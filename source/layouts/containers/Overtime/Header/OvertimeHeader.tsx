//--|🠊 OvertimeHeader.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';
import DivisionConveyor from '../../../components/Division/conveyor/Division.conveyor';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import { lockBlock } from './OvertimeFunctions';
import { stripBrackets, checkScreen, loadAsset, loadPages } from '../../../../scripts';

interface InfoProps {
  info: {
    pageName: '[overtime]' | string;
    blockName: '<header>' | string;
    labelName: '(default)' | string;
  };
}
function OvertimeHeader({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let blockName = stripBrackets(info.blockName, '<>') as 'header';
  let pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  let labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟩|--\\
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
            blockViews(event.currentTarget, pageName, 'header', 'unfold');
            blockViews(event.currentTarget, pageName, 'leftbar', 'unfold');
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
                color: '(green)',
                view: 'top-lef',
                shade: '~light~',
                image: loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium') as string,
              }}
              cases={{
                view: undefined,
                image: undefined,
                tasks: {
                  onClick: (view) => {
                    switch (view) {
                      case 'top-lef':
                        lockBlock(pageName, 'header');
                        lockBlock(pageName, 'leftbar');
                        break;
                    }
                  },
                },
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
          onMouseEnter={(event) => {
            blockViews(event.currentTarget, pageName, 'header', 'unfold');
            blockViews(event.currentTarget, pageName, 'leftbar', 'unfold');
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
                color: '(green)',
                view: 'top-lef',
                shade: '~dark~',
                image: loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium') as string,
              }}
              cases={{
                view: undefined,
                image: undefined,
                tasks: {
                  onClick: (view) => {
                    switch (view) {
                      case 'top-lef':
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
                view: 'top-cen',
                shade: '~dark~',
                color: ['(mono)', '(blue)', '(red)'],
                image: [
                  loadAsset('-svg-', '/archive-images/trinity-apps/tralogfin/trinity-apps'),
                  loadAsset('-svg-', '/archive-images/trinity-apps/log-a-ticket/primary-medium'),
                  loadAsset('-svg-', '/archive-images/trinity-apps/find-a-link/primary-medium'),
                ] as Array<string>,
                size: '<h4>',
              }}
              cases={{
                pages: 3,
                axis: '[x]',
                link: undefined,
                task: [() => loadPages('landing'), () => loadPages('ticketing'), () => loadPages('hyperlink')],
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
export default OvertimeHeader;
