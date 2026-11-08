//--|🠊 Time.date-string.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../tools/conversions'; //--|🠈 AI Code: Review Please 2026-11-08 · Was the default import of ../../components, which is eventListen() 🠈|--\\

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
  };
}
//--|🠊 AI Code: Review Please 2026-11-08 · A function, not a const: the main function of the file 🠈|--\\
export function DateString({ info, style }: TheseProps) {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <time className={`date-string ${stripBrackets(style.shade, '~~')}-mode`} dateTime="2000-01-01">
      <span className="week">Saturday</span>
      <span className="date">1st January 2000</span>
    </time>
  );
}
export default DateString;
