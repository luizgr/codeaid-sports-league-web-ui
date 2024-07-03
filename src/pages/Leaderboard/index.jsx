import LeagueService from "../../services/LeagueService";
import { useState, useEffect } from "react";

import "../style.css";

export default function Leaderboard() {

  var service = new LeagueService();

  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const updateLeaderboard = async () => {
      await service.fetchData();
      setLeaderboard(service.getLeaderboard());
    };
    
    updateLeaderboard();
  }, []);

  return (
    <div className="content">
      <h1 className="page-header">League Standings</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="text-left" colSpan={2}>Team Name</th>
            <th className="text-center">MP</th>
            <th className="no-mobile text-center">GF</th>
            <th className="no-mobile text-center">GA</th>
            <th className="only-landscape text-center">GD</th>
            <th className="text-center">Points</th>
          </tr>
        </thead>
        <tbody>
          {
            leaderboard?.map((team, index) => {
              return (
                <tr key={index}>
                  <td className="text-center" width={60}>
                    <img className="team-flag" src={"https://flagsapi.codeaid.io/"+team.teamName+".png"} alt={team.teamName} />
                  </td>
                  <td className="text-left bolded">
                    {team.teamName}
                  </td>
                  <td className="text-center" width={60}>
                    {team.matchesPlayed}
                  </td>
                  <td className="no-mobile text-center" width={60}>
                    {team.goalsFor}
                  </td>
                  <td className="no-mobile text-center" width={60}>
                    {team.goalsAgainst}
                  </td>
                  <td className="only-landscape text-center" width={60}>
                    {team.goalsFor - team.goalsAgainst}
                  </td>
                  <td className="text-center bolded" width={60}>
                    {team.points}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
