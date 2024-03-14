import { useEffect, useState } from 'react';
import { BowlingLeague } from '../types/BowlingLeague';

function BowlerList() {
  const [BowlingData, setBowlingData] = useState<BowlingLeague[]>([]);

  useEffect(() => {
    const fetchBowlingData = async () => {
      const rsp = await fetch(
        'https://localhost:7002/BowlingLeague/marlins-sharks',
      );
      const f = await rsp.json();
      setBowlingData(f);
    };
    fetchBowlingData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Our top bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {BowlingData.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{b.team?.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
