//--|🠊 ProfileOvertime.tsx 🠈|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import SectionProfile from '../../../../../components/Section/profile/Section.profile';

//--|🠋 Functions 🠋|--\\

interface InfoProps {
  info: {
    pageName: 'overtime';
    blockName: 'header';
    labelName: 'profile';
  };
}
const ProfileOvertime: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'header';
  const pageName = info.pageName as 'overtime';
  const labelName = info.labelName as 'profile';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <>
      <SectionProfile
        //--|🠊 <section class="profile-header"/> 🠈|--\\
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: labelName,
        }}
        cases={{
          user: 'jane-lester',
        }}
      />
      <SectionProfile
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

/*
import { stripBrackets } from '../../../../../scripts/buttons';
import {
  defaultPreview,
  controlPreview,
  togglePreview,
  unfoldHeader,
  toggleAside,
  scrollMouse,
  viewDisplay,
  useSwipePhone as useSwipe,
} from '../../ButtonsFunctions';
//--|🠋 Components 🠋|--\\
import LabelToggle from '../../../../../components/Label/toggle/Label.toggle';
import ButtonDefault from '../../../../../components/Button/default/Button.default';
import ButtonRouting from '../../../../../components/Button/routing/Button.routing';


*/
