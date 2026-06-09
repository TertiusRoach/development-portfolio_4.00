//--|🠊 Division.default.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Division.default.scss';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}

const DivisionDefault: React.FC<TheseProps> = ({ info }) => {
  return <div className={`${info.labelName}-${info.blockName}_division-default`}></div>;
};
export default DivisionDefault;
