//--|🠊 Table.clocking.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Table.clocking.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const TableClocking: React.FC<TheseProps> = ({ info }) => {
  const pageName: string = info.pageName as 'overtime';
  const blockName: string = info.blockName as 'leftbar';
  const labelName: string = info.labelName as 'clocking';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <table className={`${labelName}-${blockName} I`}>
      <thead className="track-head">
        <tr>
          <th className="mon-row">Mon{/* <span></span> */}</th>
          <th className="tue-row">Tue{/* <span></span> */}</th>
          <th className="wed-row">Wed{/* <span></span> */}</th>
          <th className="thu-row">Thu{/* <span></span> */}</th>
          <th className="fri-row">Fri{/* <span></span> */}</th>
          <th className="sat-row">Sat{/* <span></span> */}</th>
          <th className="sun-row">Sun{/* <span></span> */}</th>
        </tr>
      </thead>

      <tbody className="previous-week hidden" data-week="01">
        <tr id="YYYY-DD-MM" className="mon-row" data-day="mon">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>--:--</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>--:--</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>--:--</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>--:--</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="tue-row" data-day="tue">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>--:--</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>--:--</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>--:--</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>--:--</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="wed-row" data-day="wed">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>--:--</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>--:--</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>--:--</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>--:--</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="thu-row" data-day="thu">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>--:--</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>--:--</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>--:--</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>--:--</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="fri-row" data-day="fri">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>--:--</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>--:--</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>--:--</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>--:--</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="sat-row" data-day="sat">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>--:--</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>--:--</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>--:--</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>--:--</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="sun-row" data-day="sun">
          <td className="sun_clock-in_am">
            <span>--:--</span>
          </td>
          <td className="sun_clock-out_am">
            <span>--:--</span>
          </td>

          <td className="sun_clock-in_pm">
            <span>--:--</span>
          </td>
          <td className="sun_clock-out_pm">
            <span>--:--</span>
          </td>
        </tr>
      </tbody>
      <tbody className="current-week visible" data-week="02">
        <tr id="YYYY-DD-MM" className="mon-row" data-day="mon">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>08:00</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>17:00</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>17:00</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>00:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="tue-row" data-day="tue">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>08:00</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>17:00</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>17:00</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>00:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="wed-row" data-day="wed">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>08:00</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>17:00</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>17:00</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>00:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="thu-row" data-day="thu">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>08:00</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>17:00</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>17:00</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>00:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="fri-row" data-day="fri">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>08:00</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>17:00</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>17:00</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>00:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="sat-row" data-day="sat">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>08:00</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>17:00</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>17:00</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>00:00</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="sun-row" data-day="sun">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>08:00</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>17:00</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>17:00</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>00:00</span>
          </td>
        </tr>
      </tbody>
      <tbody className="future-week hidden" data-week="03">
        <tr id="YYYY-DD-MM" className="mon-row" data-day="mon">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>~~:~~</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>~~:~~</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="tue-row" data-day="tue">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>~~:~~</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>~~:~~</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="wed-row" data-day="wed">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>~~:~~</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>~~:~~</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="thu-row" data-day="thu">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>~~:~~</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>~~:~~</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="fri-row" data-day="fri">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>~~:~~</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>~~:~~</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="sat-row" data-day="sat">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>~~:~~</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>~~:~~</span>
          </td>
        </tr>
        <tr id="YYYY-DD-MM" className="sun-row" data-day="sun">
          <td className="clock-in_am" data-slot="clock-in_am">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_am" data-slot="clock-out_am">
            <span>~~:~~</span>
          </td>

          <td className="clock-in_pm" data-slot="clock-in_pm">
            <span>~~:~~</span>
          </td>
          <td className="clock-out_pm" data-slot="clock-out_pm">
            <span>~~:~~</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default TableClocking;
