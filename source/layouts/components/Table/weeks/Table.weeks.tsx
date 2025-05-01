//--|🠊 Table.weeks.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { loadYear } from './Table_weeks';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Styles 🠋|--//
import './Table.weeks.scss';
//--|🠉 Styles 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;
  };
}
const TableWeeks: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const pageName = info.identification;
  const stateName: 'highlight' | 'downplay' = 'downplay';

  const handleWeeks = async () => {
    // const presentYear = new Date().getFullYear();
    // const weekContainers = giveWeek(presentYear);
  };

  useEffect(() => {
    loadYear(pageName, blockName); //--|🠊 Call it once to set initial sizes 🠈|--//

    window.addEventListener('resize', () => loadYear(pageName, blockName)); //--|🠊 Set up resize listener 🠈|--//
    return () => {
      window.removeEventListener('resize', () => loadYear(pageName, blockName)); //--|🠊 Clean up listener on unmount 🠈|--//
    };
  }, [pageName, blockName]);

  return (
    <table className="weeks-table">
      <tbody data-week="01" className="table-body hidden" id="previous-week">
        <tr id="YYYY-DD-MM" className="monday-row" data-week="01">
          <td className="weekday h1">Mon</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="tuesday-row" data-week="02">
          <td className="weekday h1">Tue</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="wednesday-row" data-week="03">
          <td className="weekday h1">Wed</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="thursday-row" data-week="04">
          <td className="weekday h1">Thu</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="friday-row" data-week="05">
          <td className="weekday h1">Fri</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="saturday-row" data-week="06">
          <td className="weekday h1">Sat</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="sunday-row" data-week="07">
          <td className="weekday h1">Sun</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
      </tbody>
      <tbody data-week="02" className="table-body visible" id="current-week">
        <tr id="YYYY-DD-MM" className="monday-row" data-week="01">
          <td className="weekday h1">Mon</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="tuesday-row" data-week="02">
          <td className="weekday h1">Tue</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="wednesday-row" data-week="03">
          <td className="weekday h1">Wed</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="thursday-row" data-week="04">
          <td className="weekday h1">Thu</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="friday-row" data-week="05">
          <td className="weekday h1">Fri</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="saturday-row" data-week="06">
          <td className="weekday h1">Sat</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">13:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="sunday-row" data-week="07">
          <td className="weekday h1">Sun</td>
          <td className="clock-in display-3">--:--</td>
          <td className="clock-out display-3">~~:~~</td>
        </tr>
      </tbody>
      <tbody data-week="03" className="table-body hidden" id="future-week">
        <tr id="YYYY-DD-MM" className="monday-row" data-week="01">
          <td className="weekday h1">Mon</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="tuesday-row" data-week="02">
          <td className="weekday h1">Tue</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="wednesday-row" data-week="03">
          <td className="weekday h1">Wed</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="thursday-row" data-week="04">
          <td className="weekday h1">Thu</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="friday-row" data-week="05">
          <td className="weekday h1">Fri</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="saturday-row" data-week="06">
          <td className="weekday h1">Sat</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr id="YYYY-DD-MM" className="sunday-row" data-week="07">
          <td className="weekday h1">Sun</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableWeeks;
