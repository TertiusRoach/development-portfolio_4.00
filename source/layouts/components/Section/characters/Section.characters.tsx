//--|🠊 Section.characters.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Section.characters.scss';

//--|🠋 Functions 🠋|--\\

//--|🠋 Components 🠋|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}

const SectionProfiles: React.FC<TheseProps> = ({ info }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return <section className={`${info.labelName}-${info.blockName}_characters-default`}></section>;
};
export default SectionProfiles;
