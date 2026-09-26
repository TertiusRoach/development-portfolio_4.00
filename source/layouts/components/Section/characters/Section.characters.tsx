//--|🠊 Section.characters.tsx 🠈|--\\

//--|🠋 Functions 🠋|--\\
import returnProfile from './Section_characters';
import type { CharacterSelection } from './Section_characters';

//--|🠋 Components 🠋|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  cases: {
    characters:
      | string
      | Array<
          | 'jane'
          | 'malik'
          | 'dimitri'
          | 'dale'
          | 'alaric'
          | 'conrad'
          | 'daniel'
          | 'kady'
          | 'seamus'
          | 'hammad'
          | 'tasneem'
          | 'elliot'
          | 'sipho'
          | 'zuberi'
          | 'nyra'
          | 'victor'
          | 'danish'
          | 'aelin'
          | 'random'
        >;
  };
}

const SectionCharacters: React.FC<TheseProps> = ({ info, cases }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  let selectProfile: CharacterSelection;
  if (typeof cases.characters === 'object') {
    selectProfile = returnProfile(cases.characters[Math.floor(Math.random() * cases.characters.length)]);
  } else if (cases.characters === 'random') {
    selectProfile = returnProfile(cases.characters as 'random');
  } else {
    selectProfile = returnProfile(cases.characters as string);
  }

  return (
    <section className={`${info.labelName}-${info.blockName}_characters-default`}>
      <div className="wrap-card">
        <header className="card-information">
          <div className="profile">
            <img src={selectProfile.profile} alt={selectProfile.profile} />
          </div>
          <h1 className="full-name">{selectProfile.fullName}</h1>
          <p className="country">{selectProfile.country}</p>
        </header>
        <section className="card-permissions">
          <div className="auth-vocation">
            <h6>Vocation</h6>
            <p>{selectProfile.permissions.vocation}</p>
          </div>
          <div className="auth-position">
            <h6>Position</h6>
            <p>{selectProfile.permissions.position}</p>
          </div>
          <div className="auth-occupation">
            <h6>Occupation</h6>
            <p>{selectProfile.permissions.occupation}</p>
          </div>
        </section>
        <footer className="card-description">
          <div className="bio-department">
            <h3>{selectProfile.department.bureau}</h3>
          </div>
          <div className="bio-description">
            <p>{selectProfile.description}</p>
          </div>
        </footer>
      </div>
    </section>
  );
};
export default SectionCharacters;
