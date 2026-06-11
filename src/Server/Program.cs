using Microsoft.AspNetCore.WebSockets;
using Server.Middleware;


var t = new Test();
t.Reverse("12345", (s) =>
{
    List<char> str = [.. s];
    char temp;
    int i = 0;
    int j = s.Length - 1;
    while (i < j)
    {
        temp = str[j];
        str[j] = str[i];
        str[i] = temp;
    }
});

var builder = WebApplication.CreateBuilder();
{
    builder.Services.AddWebSockets(o =>
    {
        o.AllowedOrigins.Add("http://localhost:5173");
    });
}

var app = builder.Build();
{
    app.UseWebSockets();
    app.UseWebSocketMiddleware();
    app.Run();
}


public interface ITest
{
    string Create(string t);
    string Create(int t);
    string Reverse(string s, Action<string> callback);
}
public class Test : ITest
{
    public Test()
    {

    }

    public virtual string Create(string t)
    {
        return "Hello";
    }

    public virtual string Create(int t)
    {
        string s = "";
        for (int i = 0; i < t; i++)
        {
            s += (char)i;
        }
        return s;
    }
    public string Reverse(string s, Action<string> callback)
    {
        callback(s);
        return s;
    }
}
