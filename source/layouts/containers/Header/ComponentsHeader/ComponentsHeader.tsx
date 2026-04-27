//--|🠊 ComponentsHeader.tsx 🠈|--\\
import React, { useEffect } from 'react';
import { stripBrackets } from '../../../scripts/components';
import MenuCarousel from '../../../components/Menu/carousel/Menu.carousel';
import NavigationProfile from '../../../components/Navigation/profile/Navigation.profile';

interface InfoProps {
  info: {
    //--|🠋 pageName: Id that represents the application 🠋|--\\
    pageName: '[components]';
    //--|🠋 blockName: 'Toggles between '/containers' folders. 🠋|--\\
    blockName: '<footer>' | '<header>' | '<leftbar>' | '<main>' | '<overlay>' | '<rightbar>';
    //--|🠋 labelName: Class name marker for all components. 🠋|--\\
    labelName: '(default)' | string;
  };
}
const ComponentsHeader: React.FC<InfoProps> = ({ info }) => {
  const svgPath: Array<string> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/index-page/rightbar/rightbar-dark.svg',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/index-page/leftbar/leftbar-dark.svg',
  ];

  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const labelName = stripBrackets(info.labelName, '()') as 'profile';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {}, [pageName, blockName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' = 'unfolded';
  return (
    <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <MenuCarousel
          style={{
            axis: '[x]',
            view: '-top-',
            color: '(mono)',
            shade: '~dark~',
            type: '{scroll}',
          }}
          cases={{ paths: svgPath as Array<string> }}
          info={{
            labelName: 'elements',
            blockName: blockName as '<leftbar>',
            pageName: pageName as '[components]',
          }}
        />
        <NavigationProfile //--|🠊 <nav class="profile-header"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />

        {/* <h1 className="display-1">{`<ComponentsHeader>`}</h1> */}
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </header>
  );
};
export default ComponentsHeader;
