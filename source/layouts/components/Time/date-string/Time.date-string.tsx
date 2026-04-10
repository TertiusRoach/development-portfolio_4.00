//--|🠊 Time.date-string.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Time.date-string.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
}
const DateString: React.FC<TheseProps> = ({ info }) => {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <time className="date-string" dateTime="2000-01-01">
      <span className="weekday">Saturday</span>
      <span className="date">1st January 2000</span>
    </time>
  );
};
export default DateString;
