//--|🠊 Aside.characters.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Aside.characters.scss';

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

const AsideProfiles: React.FC<TheseProps> = ({ info }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return <aside className={`${info.labelName}-${info.blockName}_characters-default`}></aside>;
};
export default AsideProfiles;

//--|🠊 ProfileOvertime.tsx 🠈|--\\

/*
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import SectionCharacters from '../../../../../components/Section/Overtime/characters/Section.characters';

//--|🠋 Functions 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: 'footer';
    labelName: 'profile';
  };
}
const ProfileOvertime: React.FC<InfoProps> = ({ info }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as 'footer';
  const labelName = info.labelName as 'profile';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <>
      <SectionCharacters
        //--|🠊 <section class="profile-footer"/> 🠈|--\\
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: labelName,
        }}
        cases={{
          user: 'jane-lester',
        }}
      />
      <SectionCharacters
        //--|🠊 <section class="profile-header"/> 🠈|--\\
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: labelName,
        }}
        cases={{
          user: 'hammad-dean',
        }}
      />
    </>
  );
};
export default ProfileOvertime;
*/
