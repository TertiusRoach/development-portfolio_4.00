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

  const handleWeeks = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  return (
    <table className="weeks-table">
      <tbody className="hidden" id="previous-week">
        <tr className="monday">
          <td>#previous-week - 01. Monday</td>
        </tr>
        <tr className="tuesday">
          <td>#previous-week - 02. Tuesday</td>
        </tr>
        <tr className="wednesday">
          <td>#previous-week - 03. Wednesday</td>
        </tr>
        <tr className="thursday">
          <td>#previous-week - 04. Thursday</td>
        </tr>
        <tr className="friday">
          <td>#previous-week - 05. Friday</td>
        </tr>
        <tr className="saturday">
          <td>#previous-week - 06. Saturday</td>
        </tr>
        <tr className="sunday">
          <td>#previous-week - 07. Sunday</td>
        </tr>
      </tbody>
      <tbody className="visible" id="current-week">
        <tr className="monday">
          <td>#current-week - 01. Monday</td>
        </tr>
        <tr className="tuesday">
          <td>#current-week - 02. Tuesday</td>
        </tr>
        <tr className="wednesday">
          <td>#current-week - 03. Wednesday</td>
        </tr>
        <tr className="thursday">
          <td>#current-week - 04. Thursday</td>
        </tr>
        <tr className="friday">
          <td>#current-week - 05. Friday</td>
        </tr>
        <tr className="saturday">
          <td>#current-week - 06. Saturday</td>
        </tr>
        <tr className="sunday">
          <td>#current-week - 07. Sunday</td>
        </tr>
      </tbody>
      <tbody className="hidden" id="future-week">
        <tr className="monday">
          <td>#future-week - 01. Monday</td>
        </tr>
        <tr className="tuesday">
          <td>#future-week - 02. Tuesday</td>
        </tr>
        <tr className="wednesday">
          <td>#future-week - 03. Wednesday</td>
        </tr>
        <tr className="thursday">
          <td>#future-week - 04. Thursday</td>
        </tr>
        <tr className="friday">
          <td>#future-week - 05. Friday</td>
        </tr>
        <tr className="saturday">
          <td>#future-week - 06. Saturday</td>
        </tr>
        <tr className="sunday">
          <td>#future-week - 07. Sunday</td>
        </tr>
      </tbody>
    </table>
  );
};
export default TableWeeks;
