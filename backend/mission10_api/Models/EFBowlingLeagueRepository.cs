using Microsoft.EntityFrameworkCore;

namespace mission10_api.Models
{
    public class EFBowlingLeagueRepository : IBowlingLeagueRepository
    {
        private BowlingLeagueContext _bowlingLeagueContext;

        public EFBowlingLeagueRepository(BowlingLeagueContext temp)
        {
            _bowlingLeagueContext = temp;
        }

        public IEnumerable<Bowler> GetBowlersForMarlins()
        {
            return _bowlingLeagueContext.Bowlers
                    .Include(b => b.Team) // Include the Team navigation property
                    .Where(b => b.Team != null && (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                    .ToList(); // Execute query and return as list
        }
    }
}
