//--|🠊 DefaultNavigation.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../../../../components/Menu/swipe/Menu.swipe';
import MenuScroll from '../../../../../../components/Menu/scroll/Menu.scroll';
import MenuSelect from '../../../../../../components/Menu/select/Menu.select';
import NavigationDefault from '../../../../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import { checkScreen } from '../../../../../../tools/synching';
import { loadAsset } from '../../../../../../tools/utilities';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function DefaultNavigation({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  switch (getOrientation) {
    case 'landscape':
      let imageDesktop = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/desktop') as string;
      return (
        <aside className="default-navigation">
          <section className={`${blockName}-foreground`}>
            <NavigationDefault
              //--|🠊 <nav class="default-main_navigation-default"/> 🠈|--\\
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                view: undefined,
                color: '(mono)',
                shade: '~light~',
                image: undefined,
              }}
              cases={{
                tasks: {},
                menus: [
                  {
                    align: '-top-',
                    menu: (
                      <MenuSwipe
                        info={{
                          blockName: blockName as 'main',
                          labelName: 'top-nav' as string,
                          pageName: pageName as 'components',
                        }}
                        style={{
                          view: '-def-',
                          color: '(mono)',
                          shade: '~light~',
                        }}
                        cases={{
                          axis: '[x]',
                          titles: ['[Landing]', '[Archive]', '[Overtime]', '[Ticketing]', '[Hyperlink]'] as Array<string>,
                        }}
                      />
                    ) as React.JSX.Element,
                  },
                  {
                    align: '-rig-',
                    menu: (
                      <MenuScroll
                        info={{
                          blockName: blockName as 'main',
                          labelName: 'rig-nav' as string,
                          pageName: pageName as 'components',
                        }}
                        style={{
                          view: '-def-',
                          color: '(mono)',
                          shade: '~light~',
                        }}
                        cases={{
                          axis: '[y]',
                          titles: ['[Landing]', '[Archive]', '[Overtime]', '[Ticketing]', '[Hyperlink]'] as Array<string>,
                        }}
                      />
                    ) as React.JSX.Element,
                  },
                  {
                    align: '-bot-',
                    menu: (
                      <MenuSelect
                        info={{
                          blockName: blockName as 'main',
                          labelName: 'bot-nav' as string,
                          pageName: pageName as 'components',
                        }}
                        style={{
                          align: '-rig-',
                          view: 'bot-cen',
                          color: '(mono)',
                          shade: '~light~',
                          //--|===|--\\
                          image: [
                            loadAsset('-svg-', '/tralogfin-application/track-a-day/primary-medium'),
                            loadAsset('-svg-', '/tralogfin-application/log-a-ticket/primary-medium'),
                            loadAsset('-svg-', '/tralogfin-application/find-a-link/primary-medium'),
                          ] as Array<string>,
                          size: ['<p>', '<h4>', '<h1>'] as Array<'<h1>' | '<h4>' | '<p>'>,
                        }}
                        cases={{
                          pages: 3,
                          axis: '[x]',
                        }}
                      />
                    ) as React.JSX.Element,
                  },
                  {
                    align: '-lef-',
                    menu: (
                      <MenuSelect
                        info={{
                          blockName: blockName as 'main',
                          labelName: 'lef-nav' as string,
                          pageName: pageName as 'components',
                        }}
                        style={{
                          align: '-lef-',
                          view: 'mid-lef',
                          color: '(mono)',
                          shade: '~light~',
                          //--|===|--\\
                          image: [
                            loadAsset('-svg-', '/tralogfin-application/track-a-day/primary-medium'),
                            loadAsset('-svg-', '/tralogfin-application/log-a-ticket/primary-medium'),
                            loadAsset('-svg-', '/tralogfin-application/find-a-link/primary-medium'),
                          ] as Array<string>,
                          size: ['<h1>', '<h4>', '<p>'] as Array<'<h1>' | '<h4>' | '<p>'>,
                        }}
                        cases={{
                          pages: 3,
                          axis: '[y]',
                        }}
                      />
                    ) as React.JSX.Element,
                  },
                ],
                buttons: ['top-lef', 'top-rig', 'bot-rig', 'bot-lef'],
                image: [imageDesktop, imageDesktop, imageDesktop, imageDesktop],
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}>
            <canvas></canvas>
          </figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
    case 'portrait':
      let imageMobile = loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/mobile-alt') as string;
      return (
        <aside className="default-navigation">
          <section className={`${blockName}-foreground`}>
            <NavigationDefault
              //--|🠊 <nav class="default-main_navigation-default"/> 🠈|--\\
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                color: '(mono)',
                shade: '~light~',
                view: undefined,
                image: undefined,
              }}
              cases={{
                tasks: {},
                menus: [
                  {
                    align: '-top-',
                    menu: (
                      <MenuSwipe
                        info={{
                          blockName: blockName as 'main',
                          labelName: 'top-nav' as string,
                          pageName: pageName as 'components',
                        }}
                        style={{
                          view: '-def-',
                          color: '(mono)',
                          shade: '~light~',
                        }}
                        cases={{
                          axis: '[x]',
                          titles: ['[Landing]', '[Archive]', '[Overtime]', '[Ticketing]', '[Hyperlink]'] as Array<string>,
                        }}
                      />
                    ) as React.JSX.Element,
                  },
                  {
                    align: '-rig-',
                    menu: (
                      <MenuScroll
                        info={{
                          blockName: blockName as 'main',
                          labelName: 'rig-nav' as string,
                          pageName: pageName as 'components',
                        }}
                        style={{
                          view: '-def-',
                          color: '(mono)',
                          shade: '~light~',
                        }}
                        cases={{
                          axis: '[y]',
                          titles: ['[Landing]', '[Archive]', '[Overtime]', '[Ticketing]', '[Hyperlink]'] as Array<string>,
                        }}
                      />
                    ) as React.JSX.Element,
                  },
                  {
                    align: '-bot-',
                    menu: (
                      <MenuSelect
                        info={{
                          blockName: blockName as 'main',
                          labelName: 'bot-nav' as string,
                          pageName: pageName as 'components',
                        }}
                        style={{
                          align: '-rig-',
                          view: 'bot-cen',
                          color: '(mono)',
                          shade: '~light~',
                          //--|===|--\\
                          image: [
                            loadAsset('-svg-', '/tralogfin-application/track-a-day/primary-medium'),
                            loadAsset('-svg-', '/tralogfin-application/log-a-ticket/primary-medium'),
                            loadAsset('-svg-', '/tralogfin-application/find-a-link/primary-medium'),
                          ] as Array<string>,
                          size: ['<p>', '<h4>', '<h1>'] as Array<'<h1>' | '<h4>' | '<p>'>,
                        }}
                        cases={{
                          pages: 3,
                          axis: '[x]',
                        }}
                      />
                    ) as React.JSX.Element,
                  },
                  {
                    align: '-lef-',
                    menu: (
                      <MenuSelect
                        info={{
                          blockName: blockName as 'main',
                          labelName: 'lef-nav' as string,
                          pageName: pageName as 'components',
                        }}
                        style={{
                          align: '-lef-',
                          view: 'mid-lef',
                          color: '(mono)',
                          shade: '~light~',
                          //--|===|--\\
                          image: [
                            loadAsset('-svg-', '/tralogfin-application/track-a-day/primary-medium'),
                            loadAsset('-svg-', '/tralogfin-application/log-a-ticket/primary-medium'),
                            loadAsset('-svg-', '/tralogfin-application/find-a-link/primary-medium'),
                          ] as Array<string>,
                          size: ['<h1>', '<h4>', '<p>'] as Array<'<h1>' | '<h4>' | '<p>'>,
                        }}
                        cases={{
                          pages: 3,
                          axis: '[y]',
                        }}
                      />
                    ) as React.JSX.Element,
                  },
                ],
                buttons: ['top-lef', 'top-rig', 'bot-rig', 'bot-lef'],
                image: [imageMobile, imageMobile, imageMobile, imageMobile],
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}>
            <canvas></canvas>
          </figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default DefaultNavigation;
