using System.Net.WebSockets;
using System.Text;

namespace Server.Middleware;

public class WebSocketMiddleware
{
    private readonly RequestDelegate _next;
    private const int BYTE_SIZE = 1024;
    public WebSocketMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (context.WebSockets.IsWebSocketRequest)
        {
            WebSocket socket = await context.WebSockets.AcceptWebSocketAsync();
            byte[] buffer = new byte[BYTE_SIZE];
            while (socket.State != WebSocketState.Open)
            {
                await socket.ReceiveAsync(buffer, CancellationToken.None);
                Console.Write(Encoding.UTF8.GetString(buffer));
                await socket.SendAsync(buffer, WebSocketMessageType.Text, true, CancellationToken.None);
            }
        }
        await _next(context);
    }
}

public static class WebSocketMiddlewareExtensions
{
    public static IApplicationBuilder UseWebSocketMiddleware(this IApplicationBuilder builder)
    {
        builder.UseMiddleware<WebSocketMiddleware>();
        return builder;
    }
}