//--|🠊 Table.weeks.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { loadWeekdays, alterWeekdays } from './Table_weeks';
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

  const handleWeeks = (pageName: string, blockName: string) => {
    //--|🠊 Find the container element using a dynamic ID pattern based on pageName and blockName 🠈|--//
    //--|🠊 Example: if pageName = "dashboard" and blockName = "completed", it'll look for an element with id="dashboard-completed" 🠈|--//
    let container = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement; //--|🠈 Get the parent element 🠈|--//

    //--|🠊 Create a new ResizeObserver instance — this watches an element for changes to its size 🠈|--//
    //--|🠊 When the element's size changes, the provided callback function runs 🠈|--//
    let resizeObserver = new ResizeObserver((entries) => {
      //--|🠊 Use requestAnimationFrame to schedule updates at the optimal time for the browser to repaint 🠈|--//
      //--|🠊 This avoids layout thrashing and keeps animations or UI updates smooth 🠈|--//
      requestAnimationFrame(() => {
        //--|🠊 Loop through all ResizeObserver entries (technically, you might only have one here) 🠈|--//
        //--|🠊 Each entry represents an observed element that has changed size 🠈|--//
        //--|🠊 Adds a safety check when toggling 🠈|--//
        entries.forEach(() => {
          //--|🠊 Call your custom function alterWeekdays when the container is resized 🠈|--//
          //--|🠊 This function presumably updates something based on the new container size 🠈|--//
          //--|🠊 Safe to perform layout updates here 🠈|--//
          alterWeekdays(pageName, blockName, '<y>'); //--|🠈 Define function when resized 🠈|--//
        });
      });
    });

    //--|🠊 Start observing the container element for size changes 🠈|--//
    resizeObserver.observe(container); //--|🠈 Resize cells when changes are detected 🠈|--//

    //--|🠊 Return a cleanup function to disconnect the observer when no longer needed 🠈|--//
    //--|🠊 (Important for preventing memory leaks in dynamic or single-page applications) 🠈|--//
    return () => resizeObserver.disconnect(); //--|🠈 Return cleanup callback 🠈|--//
  };

  useEffect(() => {
    handleWeeks(pageName, blockName);
    loadWeekdays(pageName, blockName); //--|🠊 Call it once to set initial sizes 🠈|--//
  }, [pageName, blockName]);

  return (
    <table className="weeks-table">
      <tbody className="table-body hidden" id="previous-week" data-week="01">
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
      </tbody>
      <tbody className="table-body visible" id="current-week" data-week="02">
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
      </tbody>
      <tbody className="table-body hidden" id="future-week" data-week="03">
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
      </tbody>
    </table>
  );
};

export default TableWeeks;
