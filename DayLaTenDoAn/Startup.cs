using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DayLaTenDoAn.Startup))]
namespace DayLaTenDoAn
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
