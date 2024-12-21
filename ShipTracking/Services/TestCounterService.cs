namespace ShipTracking.Services;

using ShipTracking.EntityFramework;
using ShipTracking.EntityFramework.Models;

public class TestCounterService
{
    public TestCounterService(ShipTrackingDbContext shipTrackingDbContext)
    {
        ShipTrackingDbContext = shipTrackingDbContext;
    }

    public ShipTrackingDbContext ShipTrackingDbContext { get; }

    public async Task<int> IncrementCounter(TestCounter counter)
    {
        counter.Count += 1;

        await ShipTrackingDbContext.SaveChangesAsync();

        return counter.Count;
    }
}
