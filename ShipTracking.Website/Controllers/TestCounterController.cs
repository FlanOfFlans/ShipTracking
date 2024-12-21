namespace ShipTracking.Website.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShipTracking.EntityFramework;
using ShipTracking.EntityFramework.Models;
using ShipTracking.Services;

[Route("/api/v0/testcounters")]
public class TestCounterController : ControllerBase
{
    public TestCounterController(
        ShipTrackingDbContext shipTrackingDbContext,
        TestCounterService testCounterService)
    {
        ShipTrackingDbContext = shipTrackingDbContext;
        TestCounterService = testCounterService;
    }

    public ShipTrackingDbContext ShipTrackingDbContext { get; }

    public TestCounterService TestCounterService { get; }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetCounter([FromRoute] Guid id)
    {
        var counter = await ShipTrackingDbContext.TestCounters
            .Where(tc => tc.Id == id)
            .SingleAsync();

        return Ok(counter);
    }

    [HttpPost]
    public async Task<IActionResult> CreateCounter()
    {
        var counter = new TestCounter
        {
            Count = 0
        };

        ShipTrackingDbContext.Add(counter);
        await ShipTrackingDbContext.SaveChangesAsync();

        return Ok(counter);
    }

    [HttpPost("{id:guid}/increment")]
    public async Task<IActionResult> IncrementCounter([FromRoute] Guid id)
    {
        var counter = await ShipTrackingDbContext.TestCounters
            .Where(tc => tc.Id == id)
            .SingleAsync();

        await TestCounterService.IncrementCounter(counter);

        return Ok(counter);
    }

}
