//--|🠊 Table.data-week.tsx 🠈|--\\
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
      {/* <thead className="track-head">
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
      </thead> */}

      {/* <tbody className="hidden" id="previous-week" data-week="01">
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
      </tbody> */}

      {/* <tbody className="visible" id="current-week" data-week="02">
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
      </tbody> */}

      {/* <tbody className="hidden" id="future-week" data-week="03">
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
      </tbody> */}
    </table>
  );
};
export default TableClocking;
