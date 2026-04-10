//--|🠊 Aside.week-grid.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Aside.week-grid.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
}
const WeekGrid: React.FC<TheseProps> = ({ info }) => {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <aside className="week-grid">
      <div className="lines"></div>
      <div className="fade"></div>
    </aside>
  );
};
export default WeekGrid;
