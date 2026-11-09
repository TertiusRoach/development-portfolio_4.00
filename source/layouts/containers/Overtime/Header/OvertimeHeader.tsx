//--|🠊 OvertimeHeader.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';
import MenuToggle from '../../../components/Menu/toggle/Menu.toggle';
import AsideCharacters from '../../../components/Aside/characters/Aside.characters';
import DivisionSweeping from '../../../components/Division/sweeping/Division.sweeping';
import SectionCharacters from '../../../components/Section/characters/Section.characters';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';
import SectionDemonstration from '../../../components/Section/demonstration/Section.demonstration';

//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import { stripBrackets } from '../../../tools/conversions';
import { loadPages } from '../../../tools/navigation';
import { checkScreen, synchDemo } from '../../../tools/synching';
import { loadAsset } from '../../../tools/utilities';
import previewProfile, { unfoldHeaders, expandHeaders, squareHeaders, freezeHeaders } from './OvertimeFunctions';
import startingPreview from '../Main/OvertimeFunctions'; //--|🠊 AI Code: Review Please 2026-11-09 13:08 🠈|--\\

//--|🠋 Database 🠋|--\\
import TrackTime from '../../../../modules/server/MongoDB/testing/TrackTime';

interface InfoProps {
  info: {
    pageName: '[overtime]' | string;
    blockName: '<header>' | string;
    labelName: '(default)' | '(demonstration)' | '(application)' | string;
  };
}
function OvertimeHeader({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🠊 console.log(TrackTime().PickPage[0]); 🠈|--\\
    //--|🟩|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let blurName: string = 'obnubilate';
  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring';
  switch (getOrientation) {
    case 'landscape':
      stateName = 'expanded';
      return (
        <header
          id={`${pageName}-${blockName}`}
          className={`${blurName} ${labelName}-${blockName} ${stateName}`}
          onMouseEnter={(event) => {
            unfoldHeaders(event.currentTarget as HTMLElement);
          }}
          onLoad={() => {
            synchDemo(pageName, blockName, 'load');
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
                view: 'top-lef',
                shade: '~light~',
                color: '(green)',
                image: loadAsset('-svg-', '/tralogfin-application/track-a-day/primary-medium') as string,
              }}
              cases={{
                view: undefined,
                image: undefined,
                tasks: {
                  onClick: (_view, container) => {
                    expandHeaders(container);
                    synchDemo(pageName, blockName, 'pick');
                    startingPreview('(vocation)', 1); //--|🠊 AI Code: Review Please 2026-11-09 13:38 · 1 = the sweeping shows its placeholder 🠈|--\\
                  },
                },
              }}
            />

            <div className={`default-${blockName}_characters-demonstration`}>
              <AsideCharacters
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: labelName,
                }}
                style={{
                  view: '-left-',
                  color: '(mono)',
                  shade: '~dark~',
                  clarity: '⟨opaque⟩',
                }}
                cases={{
                  task: [
                    (event) => previewProfile('enter', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-left'),
                    (event) => previewProfile('click', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-left'),
                    (event) => previewProfile('leave', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-left'),
                  ],
                }}
              />
              <AsideCharacters
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: labelName,
                }}
                style={{
                  view: '-right-',
                  color: '(mono)',
                  shade: '~light~',
                  clarity: '⟨opaque⟩',
                }}
                cases={{
                  task: [
                    (event) => previewProfile('enter', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-right'),
                    (event) => previewProfile('click', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-right'),

                    (event) => previewProfile('leave', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-right'),
                  ],
                }}
              />
            </div>

            <MenuToggle
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: 'demonstration',
              }}
              style={{
                size: '<h3>',
                color: '(mono)',
                view: ['-left-', '-right-'],
                shade: ['~dark~', '~light~'],
                text: ['Established', 'Freelancing'],
                image: [
                  loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/briefcase'),
                  loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/messages-dollar'),
                ],
              }}
              cases={{
                task: [
                  {
                    click: () => {
                      synchDemo(pageName, blockName, 'click');
                      startingPreview('(established)', 1); //--|🠊 AI Code: Review Please 2026-11-09 13:08 🠈|--\\
                    },
                    enter: (event) => previewProfile('enter', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-left'),
                  },
                  {
                    click: () => {
                      synchDemo(pageName, blockName, 'click');
                      startingPreview('(freelancing)', 1); //--|🠊 AI Code: Review Please 2026-11-09 13:08 🠈|--\\
                    },
                    enter: (event) => previewProfile('enter', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-right'),
                  },
                ],
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}>
            <div className="top"></div>
            <DivisionSweeping
              //--|🠊 <div class="demon-left-header_sweeping-default"/> 🠈|--\\
              info={{
                labelName: 'demo-left',
                blockName: blockName as '<header>',
                pageName: pageName as '[overtime]',
              }}
              cases={{
                axis: '[x]',
                view: '-lef-',
                show: 0 as number,
                call: SelectProfile as React.ComponentType<InfoProps>,
              }}
            />

            <SectionDemonstration
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                shade: '~dark~',
                color: '(green)',
              }}
              cases={{
                apps: 'track-a-day',
              }}
            />

            <DivisionSweeping
              //--|🠊 <div class="demo-right-header_sweeping-default"/> 🠈|--\\
              info={{
                labelName: 'demo-right',
                blockName: blockName as '<header>',
                pageName: pageName as '[overtime]',
              }}
              cases={{
                axis: '[x]',
                view: '-rig-',
                show: 0 as number,
                call: SelectProfile as React.ComponentType<InfoProps>,
              }}
            />
            <div className="bot"></div>
          </figure>
          <div className={`${blockName}-background`}>
            <div className="lef"></div>
            <div className="rig"></div>
          </div>
        </header>
      );
    case 'portrait':
      stateName = 'unfolded';
      return (
        <header
          id={`${pageName}-${blockName}`}
          className={`${blurName} ${labelName}-${blockName} ${stateName}`}
          onClick={(event) => {
            unfoldHeaders(event.currentTarget as HTMLElement); //--|🠈 Mobile taps to unfold, the same as [Archive] 🠈|--\\ //--|🠈 AI Code: Review Please 2026-11-05 🠈|--\\
          }}
          onMouseLeave={(event) => {
            squareHeaders(event.currentTarget as HTMLElement); //--|🠈 The expanded footer covers <main>, so tapping it folds the header back 🠈|--\\
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
                image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-medium') as string,
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
                shade: '~light~',
                color: ['(mono)', '(blue)', '(red)'],
                image: [
                  loadAsset('-svg-', '/tralogfin-application/pick-a-page/trinity-apps'),
                  loadAsset('-svg-', '/tralogfin-application/log-a-ticket/primary-medium'),
                  loadAsset('-svg-', '/tralogfin-application/find-a-link/primary-medium'),
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
          <figure className={`${blockName}-midground`}>
            <div className="top"></div>
          </figure>
          <div className={`${blockName}-background`}></div>
        </header>
      );
  }
}
//--|===|--\\
const SelectProfile: React.FC<InfoProps> = ({ info }) => {
  const labelName = info.labelName as string;
  const pageName = info.pageName as 'overtime';
  const blockName = info.blockName as 'header';
  switch (labelName) {
    case 'demo-left':
      return (
        <>
          <SectionCharacters
            cases={{
              characters: 'jane',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'malik',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'dimitri',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'dale',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'alaric',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'conrad',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'daniel',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'kady',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'seamus',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'random',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~dark~',
              color: '(green)',
            }}
          />
        </>
      );
    case 'demo-right':
      return (
        <>
          <SectionCharacters
            cases={{
              characters: 'hammad',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'tasneem',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'elliot',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'sipho',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'zuberi',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'nyra',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'victor',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'danish',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'aelin',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
            }}
          />
          <SectionCharacters
            cases={{
              characters: 'random',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: labelName,
            }}
            style={{
              shade: '~light~',
              color: '(green)',
            }}
          />
        </>
      );
  }
};
export default OvertimeHeader;
