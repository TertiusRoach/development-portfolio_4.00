//--|🠊 Table.weeks.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Table.weeks.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { styleTable, showWeek } from './Table_weeks';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
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
    showWeek(pageName, blockName);
    styleTable(pageName, blockName);
  };

  useEffect(() => {
    handleWeeks();
  }, [pageName, blockName]);

  return (
    <table className="weeks-table">
      <tbody className="table-body hidden" id="previous-week">
        <tr className="monday-row">
          {/* <th>#previous-week</th> */}
          <td className="weekday">01. Monday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="tuesday-row">
          {/* <th>#previous-week</th> */}
          <td className="weekday">02. Tuesday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="wednesday-row">
          {/* <th>#previous-week</th> */}
          <td className="weekday">03. Wednesday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="thursday-row">
          {/* <th>#previous-week</th> */}
          <td className="weekday">04. Thursday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="friday-row">
          {/* <th>#previous-week</th> */}
          <td className="weekday">05. Friday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="saturday-row">
          {/* <th>#previous-week</th> */}
          <td className="weekday">06. Saturday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
        <tr className="sunday-row">
          {/* <th>#previous-week</th> */}
          <td className="weekday">07. Sunday</td>
          <td className="clock-in">08:00</td>
          <td className="clock-out">17:00</td>
        </tr>
      </tbody>
      <tbody className="table-body visible" id="current-week">
        <tr className="monday-row">
          <td>01. Monday</td>
          <td>#current-week</td>
        </tr>
        <tr className="tuesday-row">
          <td>02. Tuesday</td>
          <td>#current-week</td>
        </tr>
        <tr className="wednesday-row">
          <td>03. Wednesday</td>
          <td>#current-week</td>
        </tr>
        <tr className="thursday-row">
          <td>04. Thursday</td>
          <td>#current-week</td>
        </tr>
        <tr className="friday-row">
          <td>05. Friday</td>
          <td>#current-week</td>
        </tr>
        <tr className="saturday-row">
          <td>06. Saturday</td>
          <td>#current-week</td>
        </tr>
        <tr className="sunday-row">
          <td>07. Sunday</td>
          <td>#current-week</td>
        </tr>
      </tbody>
      <tbody className="table-body hidden" id="future-week">
        <tr className="monday-row">
          <td>01. Monday</td>
          <td>#future-week</td>
        </tr>
        <tr className="tuesday-row">
          <td>02. Tuesday</td>
          <td>#future-week</td>
        </tr>
        <tr className="wednesday-row">
          <td>03. Wednesday</td>
          <td>#future-week</td>
        </tr>
        <tr className="thursday-row">
          <td>04. Thursday</td>
          <td>#future-week</td>
        </tr>
        <tr className="friday-row">
          <td>05. Friday</td>
          <td>#future-week</td>
        </tr>
        <tr className="saturday-row">
          <td>06. Saturday</td>
          <td>#future-week</td>
        </tr>
        <tr className="sunday-row">
          <td>07. Sunday</td>
          <td>#future-week</td>
        </tr>
      </tbody>
    </table>
  );
};
export default TableWeeks;
