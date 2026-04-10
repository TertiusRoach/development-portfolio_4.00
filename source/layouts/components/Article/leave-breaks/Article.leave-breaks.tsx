//--|🠊 Article.leave-breaks.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Article.leave-breaks.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
}
const LeaveBreaks: React.FC<TheseProps> = ({ info }) => {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <article className="leave-breaks">
      <dl>
        <div className="annual">
          <dt>Annual Breaks</dt>
          <dd>999 Days</dd>
        </div>

        <div className="holiday">
          <dt>Public Holidays</dt>
          <dd>999 Days</dd>
        </div>

        <div className="medical">
          <dt>Medical Leave</dt>
          <dd>999 Days</dd>
        </div>

        <div className="banked">
          <dt>Banked Time</dt>
          <dd>999 Days</dd>
        </div>
      </dl>
    </article>
  );
};
export default LeaveBreaks;
