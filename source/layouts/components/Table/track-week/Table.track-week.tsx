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
          <th className="mon-row">
            <span>Mon</span>
          </th>
          <th className="tue-row">
            <span>Tue</span>
          </th>
          <th className="wed-row">
            <span>Wed</span>
          </th>
          <th className="thu-row">
            <span>Thu</span>
          </th>
          <th className="fri-row">
            <span>Fri</span>
          </th>
          <th className="sat-row">
            <span>Sat</span>
          </th>
          <th className="sun-row">
            <span>Sun</span>
          </th>
        </tr>
      </thead>

      <tbody className="visible" id="current-week" data-week="02">
        <tr id="YYYY-DD-MM" className="mon-row">
          <td className="mon_clock-in_am">
            <span>08:00</span>
          </td>
          <td className="mon_clock-out_am">
            <span>17:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="tue-row">
          <td className="tue_clock-in_am">
            <span>08:00</span>
          </td>
          <td className="tue_clock-out_am">
            <span>17:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="wed-row">
          <td className="wed_clock-in_am">
            <span>08:00</span>
          </td>
          <td className="wed_clock-out_am">
            <span>17:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="thu-row">
          <td className="thu_clock-in_am">
            <span>08:00</span>
          </td>
          <td className="thu_clock-out_am">
            <span>17:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="fri-row">
          <td className="fri_clock-in_am">
            <span>08:00</span>
          </td>
          <td className="fri_clock-out_am">
            <span>17:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="sat-row">
          <td className="sat_clock-in_am">
            <span>08:00</span>
          </td>
          <td className="sat_clock-out_am">
            <span>17:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="sun-row">
          <td className="sun_clock-in_am">
            <span>08:00</span>
          </td>
          <td className="sun_clock-out_am">
            <span>17:00</span>
          </td>
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
