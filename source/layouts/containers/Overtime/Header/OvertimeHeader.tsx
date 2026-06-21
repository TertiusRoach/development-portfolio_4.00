//--|🠊 OvertimeHeader.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/archive';

//--|🠋 Components 🠋|--\\
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface InfoProps {
  info: {
    pageName: '[overtime]';
    blockName: '<header>';
    labelName: '(default)' | string;
  };
}
const OvertimeHeader: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {}, [pageName, blockName, labelName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring' = 'squaring';
  let link =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7';
  return (
    <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <NavigationDefault
          //--|🠊 <nav class="default-header_navigation-default"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            color: '(green)',
            view: 'top-lef',
            shade: '~light~',
            image: `${link}/source/assets/svg-files/archive-images/trinity-apps/track-a-day/primary-medium.svg`,
          }}
          cases={{
            tasks: '',
            view: undefined,
            image: undefined,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </header>
  );
};
export default OvertimeHeader;
/*
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/overtime';
import { expandHeader, loadSoftware } from './OvertimeFunctions';
//--|🠋 Dependencies 🠋|--\\
import React, { ComponentType, useEffect } from 'react';

//--|🠋 Elements 🠋|--\\
import ProfileOvertime from './elements/profile-overtime/ProfileOvertime';

//--|🠋 Components 🠋|--\\
import MenuProfile from '../../../components/Menu/ARCHIVE/profile/Menu.profile';

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
        // {/* <DivisionCarousel
        //   //--|🠊 <div class="profile-header_carousel"/> 🠈|--\\
        //   cases={{
        //     axis: '[x]',
        //     call: [ProfileOvertime],
        //   }}
        //   info={{
        //     pageName: pageName,
        //     blockName: blockName,
        //     labelName: labelName,
        //   }}
        // /> /}
      </figure>
      <div className={`${blockName}-background`}>
        {/* <div className="nav-top"></div> /}
        {/* <div className="nav-bot"></div> /}

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
*/
