//--|🠊 Article.bank-time.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Article.bank-time.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
}
const BankTime: React.FC<TheseProps> = ({ info }) => {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <article className="bank-time">
      <dl>
        <dt className="workweek">Workweek</dt>
        <dd className="workweek">--:--</dd>

        <dt className="completed">Completed</dt>
        <dd className="completed">--:--</dd>

        <dt className="remaining">Remaining</dt>
        <dd className="remaining">--:--</dd>

        <dt className="acquired">Acquired</dt>
        <dd className="acquired">--:--</dd>
      </dl>
    </article>
  );
};
export default BankTime;
