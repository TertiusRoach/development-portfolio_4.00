//--|🠊 Table.track-week.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Table.track-week.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
}
const TrackWeek: React.FC<TheseProps> = ({ info }) => {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <table className="track-week">
      <thead className="track-head">
        <tr>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
        </tr>
      </thead>

      <tbody className="visible" id="current-week" data-week="02">
        <tr id="YYYY-DD-MM" className="mon-row">
          {/* <td className="weekday h1">Mon</td> */}
          {/* <td className="clock-in display-3">08:00</td> */}
          {/* <td className="clock-out display-3">17:00</td> */}
        </tr>
        <tr id="YYYY-DD-MM" className="tue-row">
          {/* <td className="weekday h1">Tue</td> */}
          {/* <td className="clock-in display-3">08:00</td> */}
          {/* <td className="clock-out display-3">17:00</td> */}
        </tr>
        <tr id="YYYY-DD-MM" className="wed-row">
          {/* <td className="weekday h1">Wed</td> */}
          {/* <td className="clock-in display-3">08:00</td> */}
          {/* <td className="clock-out display-3">17:00</td> */}
        </tr>
        <tr id="YYYY-DD-MM" className="thu-row">
          {/* <td className="weekday h1">Thu</td> */}
          {/* <td className="clock-in display-3">08:00</td> */}
          {/* <td className="clock-out display-3">17:00</td> */}
        </tr>
        <tr id="YYYY-DD-MM" className="fri-row">
          {/* <td className="weekday h1">Fri</td> */}
          {/* <td className="clock-in display-3">08:00</td> */}
          {/* <td className="clock-out display-3">17:00</td> */}
        </tr>
        <tr id="YYYY-DD-MM" className="sat-row">
          {/* <td className="weekday h1">Sat</td> */}
          {/* <td className="clock-in display-3">08:00</td> */}
          {/* <td className="clock-out display-3">13:00</td> */}
        </tr>
        <tr id="YYYY-DD-MM" className="sun-row">
          {/* <td className="weekday h1">Sun</td> */}
          {/* <td className="clock-in display-3">--:--</td> */}
          {/* <td className="clock-out display-3">~~:~~</td> */}
        </tr>
      </tbody>

      {/* <tbody className="table-body hidden" id="previous-week" data-week="01">
        <tr id="YYYY-DD-MM" className="monday-row">
          <td className="weekday h1">Mon</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="tuesday-row">
          <td className="weekday h1">Tue</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="wednesday-row">
          <td className="weekday h1">Wed</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="thursday-row">
          <td className="weekday h1">Thu</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="friday-row">
          <td className="weekday h1">Fri</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="saturday-row">
          <td className="weekday h1">Sat</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="sunday-row">
          <td className="weekday h1">Sun</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
      </tbody> */}
      {/* <tbody className="table-body visible" id="current-week" data-week="02">
        <tr id="YYYY-DD-MM" className="monday-row">
          <td className="weekday h1">Mon</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="tuesday-row">
          <td className="weekday h1">Tue</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="wednesday-row">
          <td className="weekday h1">Wed</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="thursday-row">
          <td className="weekday h1">Thu</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="friday-row">
          <td className="weekday h1">Fri</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="saturday-row">
          <td className="weekday h1">Sat</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">13:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="sunday-row">
          <td className="weekday h1">Sun</td>
          <td className="clock-in display-3">--:--</td>
          <td className="clock-out display-3">~~:~~</td>
        </tr>
      </tbody> */}
      {/* <tbody className="table-body hidden" id="future-week" data-week="03">
        <tr id="YYYY-DD-MM" className="monday-row">
          <td className="weekday h1">Mon</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="tuesday-row">
          <td className="weekday h1">Tue</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="wednesday-row">
          <td className="weekday h1">Wed</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="thursday-row">
          <td className="weekday h1">Thu</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="friday-row">
          <td className="weekday h1">Fri</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="saturday-row">
          <td className="weekday h1">Sat</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="sunday-row">
          <td className="weekday h1">Sun</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
      </tbody> */}
    </table>
  );
};
export default TrackWeek;
