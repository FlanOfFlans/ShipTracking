namespace ShipTracking.DependencyInjection;

using Microsoft.Extensions.DependencyInjection;
using ShipTracking.Services;

public static class ServiceExtensions
{
    public static IServiceCollection AddShipTracking(this IServiceCollection services)
    {
        services
            .AddScoped<TestCounterService>();

        return services;
    }
}
