//--|🠊 ArchiveHeader.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../components/Menu/swipe/Menu.swipe';
import MenuSelect from '../../../components/Menu/select/Menu.select';
import DivisionConveyor from '../../../components/Division/conveyor/Division.conveyor';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import { freezeHeaders, unfoldHeaders } from './ArchiveFunctions';
import { stripBrackets, checkScreen, loadAsset, loadPages } from '../../../../scripts';

interface InfoProps {
  info: {
    blockName: '<header>' | string;
    labelName: '(default)' | string;
    pageName: '[components]' | string;
  };
}
function ArchiveHeader({ info }: InfoProps): JSX.Element {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let blockName = stripBrackets(info.blockName, '<>') as 'header';
  let labelName = stripBrackets(info.labelName, '()') as 'default';
  let pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let blurName: string = 'obnubilate';
  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring';
  switch (getOrientation) {
    case 'landscape':
      stateName = 'unfolded';
      return (
        <header
          id={`${pageName}-${blockName}`}
          className={`${blurName} ${labelName}-${blockName} ${stateName}`}
          onMouseEnter={(event) => {
            unfoldHeaders(event.currentTarget as HTMLElement);
          }}
        >
          <section className={`${blockName}-foreground`}>
            <NavigationDefault
              //--|🠊 <nav class="default-header_navigation-default"/> 🠈|--\\
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                color: '(mono)',
                view: 'top-lef',
                shade: '~light~',
                image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-dark') as string,
              }}
              cases={{
                view: undefined,
                image: undefined,
                tasks: {
                  onClick: () => {
                    freezeHeaders(pageName, 'top-lef');
                  },
                },
              }}
            />
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
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}>
            <header>
              <div className="top-header"></div>
              <div className="bot-header"></div>
            </header>
          </div>
        </header>
      );
    case 'portrait':
      stateName = 'unfolded';
      return (
        <header
          id={`${pageName}-${blockName}`}
          className={`${blurName} ${labelName}-${blockName} ${stateName}`}
          //--|🠊 AI Code: Review Please 🠈|--\\
          onClick={(event) => {
            unfoldHeaders(event.currentTarget as HTMLElement); //--|🠈 Mobile taps to unfold, <main> folds it back 🠈|--\\
          }}
        >
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
                view: 'top-lef',
                shade: '~light~',
                image: loadAsset('-svg-', '/archive-images/trinity-apps/tralogfin/trinity-apps') as string,
              }}
              cases={{
                view: undefined,
                image: undefined,
                tasks: {
                  onClick: (view) => {
                    switch (view) {
                      case 'top-lef':
                        return loadPages('landing');
                    }
                  },
                },
              }}
            />
            <MenuSelect
              info={{
                blockName: blockName as 'main',
                pageName: pageName as 'components',
                labelName: `${pageName}-applications` as string,
              }}
              style={{
                align: '-mid-',
                view: 'top-cen',
                shade: '~light~',
                color: ['(green)', '(blue)', '(red)'],

                image: [
                  loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium'),
                  loadAsset('-svg-', '/archive-images/trinity-apps/log-a-ticket/primary-medium'),
                  loadAsset('-svg-', '/archive-images/trinity-apps/find-a-link/primary-medium'),
                ] as Array<string>,
                size: '<h4>',
              }}
              cases={{
                pages: 3,
                axis: '[x]',
                link: undefined,
                task: [() => loadPages('overtime'), () => loadPages('ticketing'), () => loadPages('hyperlink')],
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}>
            <header>
              <div className="top-header"></div>
              <div className="bot-header"></div>
            </header>
          </div>
        </header>
      );
  }
}
//--|🠊 Desktop Previews 🠈|--\\
const MenuSwipes: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'header';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  let styleShade = '~light~' as '~dark~' | '~light~';
  let styleColor = '(mono)' as '(red)' | '(green)' | '(blue)' | '(mono)';
  let styleView = 'def' as '-def-' | '-lef-' | '-rig-' | '-cen-' | '-top-' | '-bot-' | '-mid-';
  return (
    <>
      {/*--|🠊 <Article> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Article_Updates>', '<Article_Loading>'] as Array<string>,
        }}
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
      />
      {/*--|🠊 <Aside> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Aside_Characters>'] as Array<string>,
        }}
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
      />
      {/*--|🠊 <Button> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Button_Default>', '<Button_Routing>', '<Button_Profile>'] as Array<string>,
        }}
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
      />
      {/*--|🠊 <Division> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Division_Placeholder>', '<Division_Testing>'] as Array<string>,
        }}
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
      />
      {/*--|🠊 <Figure> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Figure_Default>'] as Array<string>,
        }}
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
      />
      {/*--|🠊 AI Code: Review Please 🠈|--*/}
      {/*--|🠊 <Label> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Label_Switching>', '<Label_Textarea>', '<Label_Selection>'] as Array<string>, //--|🠈 AI Code: Review Please 2026-10-30 🠈|--\\
        }}
        info={{
          labelName: 'label',
          blockName: blockName as 'header',
          pageName: pageName as 'components',
        }}
        style={{
          view: styleView,
          color: styleColor,
          shade: styleShade,
        }}
      />
      {/*--|🠊 <Menu> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Menu_Swipe>', '<Menu_Select>', '<Menu_Scroll>'] as Array<string>,
        }}
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
      />
      {/*--|🠊 <Navigation> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Navigation_Default>'] as Array<string>,
        }}
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
      />
      {/*--|🠊 <Section> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Section_Characters>', '<Section_Demonstration>'] as Array<string>,
        }}
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
      />
      {/*--|🠊 <Table> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Table_Default>'] as Array<string>,
        }}
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
      />
      {/*--|🠊 <Time> 🠈|--*/}
      <MenuSwipe
        cases={{
          axis: '[x]',
          titles: ['<Time_Default>'] as Array<string>,
        }}
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
      />
    </>
  );
};
export default ArchiveHeader;
