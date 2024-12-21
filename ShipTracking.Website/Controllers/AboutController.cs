namespace ShipTracking.Website.Controllers;

using Microsoft.AspNetCore.Mvc;

[Route("/api/v0/about")]
public class AboutController : ControllerBase
{
    [HttpGet]
    public IActionResult About()
    {
        return Ok("hewwo");
    }

}
