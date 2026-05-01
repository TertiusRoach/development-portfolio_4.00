//--|🠊 OvertimeHeader.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/overtime';
import { expandHeader, loadSoftware } from './OvertimeFunctions';
//--|🠋 Dependencies 🠋|--\\
import React, { ComponentType, useEffect } from 'react';

//--|🠋 Elements 🠋|--\\
import ProfileOvertime from './elements/profile-overtime/ProfileOvertime';

//--|🠋 Components 🠋|--\\
import MenuProfile from '../../../components/Menu/profile/Menu.profile';

//--|===|--\\
import ButtonDefault from '../../../components/Button/default/Button.default';
import ButtonRouting from '../../../components/Button/routing/Button.routing';
import ButtonProfile from '../../../components/Button/profile/Button.profile';
import NavigationProfile from '../../../components/Navigation/Overtime/review/profile/Navigation.profile';
import DivisionCarousel from '../../../components/Division/Archive/carousel/Division.carousel';

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    labelName: '(default)' | '(tracking)' | '(clocking)' | '(request)' | '(profile)' | '(message)' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const OvertimeHeader: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const labelName = stripBrackets(info.labelName, '()') as 'profile';
  const stateName: 'expanded' | 'unfolded' | 'collapsed' = 'expanded';

  useEffect(() => {
    setTimeout(() => {
      console.log(`|🠊Load: <header id="${pageName}-${blockName}"> 🠈|`);
    }, 60000);
  }, [pageName, blockName]);

  return (
    <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`} style={{ zIndex: 2 }}>
      <section className={`${blockName}-foreground`}>
        <MenuProfile
          //--|🠊 <menu class="profile-header"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
        <NavigationProfile
          //--|🠊 <nav class="profile-header"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}>
        {/* <DivisionCarousel
          //--|🠊 <div class="profile-header_carousel"/> 🠈|--\\
          cases={{
            axis: '[x]',
            call: [ProfileOvertime],
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        /> */}
      </figure>
      <div className={`${blockName}-background`}>
        {/* <div className="nav-top"></div> */}
        {/* <div className="nav-bot"></div> */}

        <div className="nav-lef">
          <span></span>
        </div>
        <div className="nav-rig">
          <span></span>
        </div>
      </div>
    </header>
  );
};
export default OvertimeHeader;
