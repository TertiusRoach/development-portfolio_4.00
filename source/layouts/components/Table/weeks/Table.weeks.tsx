//--|🠊 Table.weeks.tsx 🠈|--//

//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { styleTable, showWeek, returnWeek } from './Table_weeks';
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
    const presentYear = new Date().getFullYear();
    const weekContainers = returnWeek(presentYear);
  };
  const handleResize = () => {
    handleTablets();
    setTimeout(() => {
      // handleWeeks();
      showWeek(pageName, '<y>');
      styleTable(pageName, blockName);
    }, 3000);
  };
  const handleTablets = () => {
    const tds = document.querySelectorAll('td');
    if (window.innerWidth < 1366) {
      tds.forEach((td) => {
        td.classList.remove('h1', 'display-3');
        td.style.fontSize = '0.75rem';
        td.style.padding = '0.25rem';
        td.style.lineHeight = '1.2';
      });
    } else {
      // const tds = document.querySelectorAll('td');

      tds.forEach((td) => {
        td.classList.add('h1', 'display-3');
        td.style.fontSize = '';
        td.style.padding = '';
        td.style.lineHeight = '';
      });
    }
  };

  useEffect(() => {
    handleResize(); //--|🠊 Call it once to set initial sizes 🠈|--//

    window.addEventListener('resize', handleResize); //--|🠊 Set up resize listener 🠈|--//
    return () => {
      //--|🠊 Clean up listener on unmount 🠈|--//
      window.removeEventListener('resize', handleResize);
    };
  }, [pageName, blockName]);

  // I'm using Bootstrap inside REACT and want to incorporate useEffect by toggling the className of the table data <td> elements.
  // Make remove the classes and add inline styles to make everything as small as possible for screen sizes below a height of 1366px.
  return (
    <table className="weeks-table">
      <tbody className="table-body hidden" id="previous-week_YYYY-DD-MM" data-week="01">
        <tr className="monday-row" data-week="01">
          <td className="weekday h1">Mon</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="tuesday-row" data-week="02">
          <td className="weekday h1">Tue</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="wednesday-row" data-week="03">
          <td className="weekday h1">Wed</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="thursday-row" data-week="04">
          <td className="weekday h1">Thu</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="friday-row" data-week="05">
          <td className="weekday h1">Fri</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="saturday-row" data-week="06">
          <td className="weekday h1">Sat</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="sunday-row" data-week="07">
          <td className="weekday h1">Sun</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
      </tbody>
      <tbody className="table-body visible" id="current-week_YYYY-DD-MM" data-week="02">
        <tr className="monday-row" data-week="01">
          <td className="weekday h1">Mon</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="tuesday-row" data-week="02">
          <td className="weekday h1">Tue</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="wednesday-row" data-week="03">
          <td className="weekday h1">Wed</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="thursday-row" data-week="04">
          <td className="weekday h1">Thu</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="friday-row" data-week="05">
          <td className="weekday h1">Fri</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="saturday-row" data-week="06">
          <td className="weekday h1">Sat</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">13:00</td>
        </tr>
        <tr className="sunday-row" data-week="07">
          <td className="weekday h1">Sun</td>
          <td className="clock-in display-3">--:--</td>
          <td className="clock-out display-3">~~:~~</td>
        </tr>
      </tbody>
      <tbody className="table-body hidden" id="future-week_YYYY-DD-MM" data-week="03">
        <tr className="monday-row" data-week="01">
          <td className="weekday h1">Mon</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="tuesday-row" data-week="02">
          <td className="weekday h1">Tue</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="wednesday-row" data-week="03">
          <td className="weekday h1">Wed</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="thursday-row" data-week="04">
          <td className="weekday h1">Thu</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="friday-row" data-week="05">
          <td className="weekday h1">Fri</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="saturday-row" data-week="06">
          <td className="weekday h1">Sat</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
        <tr className="sunday-row" data-week="07">
          <td className="weekday h1">Sun</td>
          <td className="clock-in display-3">08:00</td>
          <td className="clock-out display-3">17:00</td>
        </tr>
      </tbody>
    </table>
  );
};
export default TableWeeks;
