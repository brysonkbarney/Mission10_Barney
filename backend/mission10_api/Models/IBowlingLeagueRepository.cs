namespace mission10_api.Models
{
    public interface IBowlingLeagueRepository
    {
        IEnumerable<Bowler> GetBowlersForMarlins();
    }
}
