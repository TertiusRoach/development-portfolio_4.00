//--|🠊 LandingFooter.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import { unfoldFooters } from './LandingFunctions';
import MenuSelect from '../../../components/Menu/select/Menu.select';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import { freezeContainer } from '../../../scripts/Head_Foot';
import { stripBrackets, checkScreen, loadAsset, loadPages } from '../../../../scripts';

interface InfoProps {
  info: {
    pageName: '[landing]' | string;
    blockName: '<footer>' | string;
    labelName: '(default)' | string;
  };
}
function LandingFooter({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'footer';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟪|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let blurName: string = 'obnubilate';
  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring';
  switch (getOrientation) {
    case 'landscape':
      stateName = 'unfolded';
      return (
        <footer
          id={`${pageName}-${blockName}`}
          className={`${blurName} ${labelName}-${blockName} ${stateName}`}
          onMouseEnter={(event) => {
            unfoldFooters(event.currentTarget);
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
                view: 'bot-rig',
                shade: '~dark~',
                image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-dark') as string,
              }}
              cases={{
                view: undefined,
                image: undefined,
                tasks: {
                  onClick: (view) => {
                    switch (view) {
                      case 'bot-rig':
                        return loadPages('components');
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
                view: 'bot-cen',
                shade: '~dark~',
                color: ['(green)', '(blue)', '(red)'],
                image: [
                  loadAsset('-svg-', '/tralogfin-application/track-a-day/primary-medium'),
                  loadAsset('-svg-', '/tralogfin-application/log-a-ticket/primary-medium'),
                  loadAsset('-svg-', '/tralogfin-application/find-a-link/primary-medium'),
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
            <footer></footer>
          </div>
        </footer>
      );
    case 'portrait':
      stateName = 'unfolded';
      return (
        <footer
          id={`${pageName}-${blockName}`}
          className={`${blurName} ${labelName}-${blockName} ${stateName}`}
          onClick={(event) => {
            unfoldFooters(event.currentTarget); //--|🠈 Mobile taps to unfold, <main> folds it back 🠈|--\\
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
                view: 'bot-rig',
                shade: '~dark~',
                image: loadAsset('-svg-', '/tralogfin-application/pick-a-page/trinity-apps') as string,
              }}
              cases={{
                view: undefined,
                image: undefined,
                tasks: {
                  onClick: (view) => {
                    switch (view) {
                      case 'bot-rig':
                        freezeContainer(pageName, 'footer');
                        freezeContainer(pageName, 'rightbar');
                        break;
                    }
                  },
                },
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
export default LandingFooter;
