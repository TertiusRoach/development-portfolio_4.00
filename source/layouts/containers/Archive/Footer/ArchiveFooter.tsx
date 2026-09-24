//--|🠊 ArchiveFooter.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../components/Menu/swipe/Menu.swipe';
import DivisionConveyor from '../../../components/Division/conveyor/Division.conveyor';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import { stripBrackets, checkScreen, loadAsset } from '../../../../scripts';

interface InfoProps {
  info: {
    blockName: '<footer>' | string;
    labelName: '(default)' | string;
    pageName: '[components]' | string;
  };
}
function ArchiveFooter({ info }: InfoProps): JSX.Element {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait'); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let blockName = stripBrackets(info.blockName, '<>') as 'footer';
  let labelName = stripBrackets(info.labelName, '()') as 'default';
  let pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let blurName: string = 'obnubilate';
  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring';
  switch (getOrientation) {
    case 'landscape':
      stateName = 'squaring';
      return (
        <footer id={`${pageName}-${blockName}`} className={`${blurName} ${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}>
            <NavigationDefault
              //--|🠊 <nav class="default-footer_navigation-default"/> 🠈|--\\
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                color: '(mono)',
                view: 'bot-rig',
                shade: '~dark~',
                image: loadAsset('-svg-', '/archive-images/trinity-apps/tralogfin/trinity-apps') as string,
              }}
              cases={{
                tasks: '',
                view: undefined,
                image: undefined,
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}>
            <footer></footer>
          </div>
        </footer>
      );
    case 'portrait':
      stateName = 'unfolded';
      return (
        <footer id={`${pageName}-${blockName}`} className={`${blurName} ${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}>
            <DivisionConveyor
              //--|🠊 <div class="elements-header_conveyor-default"/> 🠈|--\\
              cases={{
                axis: '[y]',
                call: MenuSwipes as React.ComponentType<InfoProps>,
              }}
              info={{
                labelName: 'elements',
                blockName: blockName as 'header',
                pageName: pageName as 'components',
              }}
            />
            <NavigationDefault
              //--|🠊 <nav class="default-footer_navigation-default"/> 🠈|--\\
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                color: '(mono)',
                view: 'bot-rig',
                shade: '~light~',
                image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-dark') as string,
              }}
              cases={{
                tasks: '',
                image: undefined,
                view: undefined,
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}>
            <footer></footer>
          </div>
        </footer>
      );
  }
}
const MenuSwipes: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'footer';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  let styleShade = '~light~' as '~dark~' | '~light~';
  let styleColor = '(mono)' as '(red)' | '(green)' | '(blue)' | '(mono)';
  let styleView = 'def' as '-def-' | '-lef-' | '-rig-' | '-cen-' | '-top-' | '-bot-' | '-mid-';
  return (
    <>
      <MenuSwipe
        info={{
          labelName: 'article',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
        cases={{
          axis: '[x]',
          titles: ['<Article_Updates>', '<Article_Loading>'] as Array<string>,
        }}
      />
      <MenuSwipe
        info={{
          labelName: 'aside',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
        cases={{
          axis: '[x]',
          titles: ['<Aside_Characters>'] as Array<string>,
        }}
      />
      <MenuSwipe
        info={{
          labelName: 'button',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
        cases={{
          axis: '[x]',
          titles: ['<Button_Default>', '<Button_Routing>'] as Array<string>,
        }}
      />
      <MenuSwipe
        info={{
          labelName: 'division',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
        cases={{
          axis: '[x]',
          titles: ['<Division_Default>'] as Array<string>,
        }}
      />
      <MenuSwipe
        info={{
          labelName: 'figure',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
        cases={{
          axis: '[x]',
          titles: ['<Figure_Default>'] as Array<string>,
        }}
      />
      <MenuSwipe
        info={{
          labelName: 'menu',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
        cases={{
          axis: '[x]',
          titles: ['<Menu_Swipe>', '<Menu_Select>', '<Menu_Scroll>'] as Array<string>,
        }}
      />
      <MenuSwipe
        info={{
          labelName: 'navigation',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
        cases={{
          axis: '[x]',
          titles: ['<Navigation_Default>'] as Array<string>,
        }}
      />
      <MenuSwipe
        info={{
          labelName: 'section',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
        cases={{
          axis: '[x]',
          titles: ['<Section_Default>'] as Array<string>,
        }}
      />
      <MenuSwipe
        info={{
          labelName: 'table',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
        cases={{
          axis: '[x]',
          titles: ['<Table_Default>'] as Array<string>,
        }}
      />
      <MenuSwipe
        info={{
          labelName: 'time',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
        cases={{
          axis: '[x]',
          titles: ['<Time_Default>'] as Array<string>,
        }}
      />
    </>
  );
};
export default ArchiveFooter;
