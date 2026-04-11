//--|🠊 Time.date-string.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Time.date-string.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../functions';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
  };
}
const DateString: React.FC<TheseProps> = ({ info, style }) => {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <time className={`date-string ${stripBrackets(style.shade, '~~')}-mode`} dateTime="2000-01-01">
      <span className="week">Saturday</span>
      <span className="date">1st January 2000</span>
    </time>
  );
};
export default DateString;
