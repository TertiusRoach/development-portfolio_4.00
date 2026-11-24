//--|🠊 Time.clock-count.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
}
//--|🠊 A function, not a const; the unused stripBrackets import (from the wrong file) is gone 🠈|--\\
export function ClockCount({ info }: TheseProps) {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <time className="clock-count" dateTime="2000-01-01">
      <span className="time">--:--</span>
    </time>
  );
}
export default ClockCount;
