//--|🠊 Time.clock-count.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Time.clock-count.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../functions';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
}
const ClockCount: React.FC<TheseProps> = ({ info }) => {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <time className="clock-count" dateTime="2000-01-01">
      <span className="time">--:--</span>
    </time>
  );
};
export default ClockCount;
