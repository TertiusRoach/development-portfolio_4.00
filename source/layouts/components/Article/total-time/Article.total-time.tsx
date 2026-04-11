//--|🠊 Article.total-time.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Article.total-time.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
}
const TotalTime: React.FC<TheseProps> = ({ info }) => {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <article className="total-time">
      <dl>
        <div className="days">
          <dd>00</dd>
          <dt>Days</dt>
        </div>

        <div className="hours">
          <dd>--:--</dd>
          <dt>Hours</dt>
        </div>
      </dl>
    </article>
  );
};
export default TotalTime;
