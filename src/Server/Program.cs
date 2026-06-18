using Microsoft.AspNetCore.WebSockets;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddWebSockets(o =>
    {
        o.KeepAliveInterval = TimeSpan.FromSeconds(60);
    });
}
;

var app = builder.Build();
{
    app.UseWebSockets();
    app.UseMiddleware<WebSocketMiddleware>();
    app.Run();
}