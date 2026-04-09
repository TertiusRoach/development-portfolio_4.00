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
        {/* <dt className="annual">Annual Breaks</dt> */}
        {/* <dd className="annual">999 Days</dd> */}

        {/* <dt className="holiday">Public Holidays</dt> */}
        {/* <dd className="holiday">999 Days</dd> */}

        {/* <dt className="medical">Medical Leave</dt> */}
        {/* <dd className="medical">999 Days</dd> */}

        {/* <dt className="banked">Banked Time</dt> */}
        {/* <dd className="banked">999 Days</dd> */}
      </dl>
    </article>
  );
};
export default LeaveBreaks;
