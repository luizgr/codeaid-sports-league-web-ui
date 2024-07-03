import LeagueService from "../../services/LeagueService";
import { useState, useEffect } from "react";

import "../style.css";

export default function Schedule() {

  var service = new LeagueService();

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const updateMatches = async () => {
      await service.fetchData();
      setMatches(service.getMatches());
    };
    
    updateMatches();
  }, []);

  const formatDatetime = (date) => {
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className="content">
      <h1 className="page-header">League Schedule</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="no-mobile text-right">Date/Time</th>
            <th className="no-tablet text-left">Stadium</th>
            <th className="text-right" colSpan={2}>Home Team</th>
            <th className="text-center"></th>
            <th className="text-left" colSpan={2}>Away Team</th>
          </tr>
        </thead>
        <tbody>
          {
            matches?.map((match, index) => {
              return (
                <tr key={index}>
                  <td className="no-mobile text-right">{formatDatetime(new Date(match.matchDate))}</td>
                  <td className="no-tablet text-left">{match.stadium}</td>
                  <td className="text-right bolded">
                    {match.homeTeam}
                  </td>
                  <td className="text-center">
                    <img className="team-flag" src={"https://flagsapi.codeaid.io/"+match.homeTeam+".png"} alt={match.homeTeam} />
                  </td>
                  <td className="text-center bolded">{match.homeTeamScore + ':' + match.awayTeamScore}</td>
                  <td className="text-center">
                    <img className="team-flag" src={"https://flagsapi.codeaid.io/"+match.awayTeam+".png"} alt={match.awayTeam} />
                  </td>
                  <td className="text-left bolded">{match.awayTeam}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
