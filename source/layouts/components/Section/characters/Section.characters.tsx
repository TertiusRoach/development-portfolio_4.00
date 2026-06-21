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

const SectionCharacters: React.FC<TheseProps> = ({ info }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <section className={`${info.labelName}-${info.blockName}_characters-default`}>
      <header>
        <img src="" alt="" />
        <h1 className="full-name">full-name</h1>
        <p className="country">South Africa</p>
      </header>
      <div>
        <span className="vocation">
          <h6>Vocation</h6>
          <p>Establishes or Freelancing</p>
        </span>
        <span className="position">
          <h6>Position</h6>
          <p>Employee or Manager</p>
        </span>
        <span className="occupation">
          <h6>Occupation</h6>
          <p>Specialist or Technician</p>
        </span>
      </div>
      <footer>
        <h3>Department</h3>
        <p className="description"></p>
      </footer>
    </section>
  );
};
export default SectionCharacters;
