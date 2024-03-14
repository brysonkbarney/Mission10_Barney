using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission10_api.Models;

namespace mission10_api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private IBowlingLeagueRepository _bowlingLeagueRepository;

        public BowlingLeagueController(IBowlingLeagueRepository temp)
        {
            _bowlingLeagueRepository = temp;
        }

        [HttpGet("marlins-sharks")]
        public IActionResult GetBowlersForMarlin()
        {
            var bowlerData = _bowlingLeagueRepository.GetBowlersForMarlins();

            return Ok(bowlerData);
        }
    }
}
