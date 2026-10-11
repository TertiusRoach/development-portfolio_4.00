//--|🠊 OvertimeFooter.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';
import AsideCharacters from '../../../components/Aside/characters/Aside.characters';
import DivisionSweeping from '../../../components/Division/sweeping/Division.sweeping';
import DivisionCarousel from '../../../components/Division/carousel/Division.carousel';
import SectionCharacters from '../../../components/Section/characters/Section.characters';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen, loadAsset, loadPages } from '../../../../scripts';
import designateCharacter, { unfoldFooters, squareFooters, freezeFooters } from './OvertimeFunctions';

interface InfoProps {
  info: {
    pageName: '[overtime]' | string;
    blockName: '<footer>' | string;
    labelName: '(default)' | '(demonstration)' | '(application)' | string;
  };
}
function OvertimeFooter({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let blockName = stripBrackets(info.blockName, '<>') as 'footer';
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
        <footer
          id={`${pageName}-${blockName}`}
          className={`${blurName} ${labelName}-${blockName} ${stateName}`}
          onMouseEnter={(event) => {
            unfoldFooters(event.currentTarget);
          }}
          onMouseLeave={(event) => {
            squareFooters(event.currentTarget);
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
            <footer></footer>
          </div>
        </footer>
      );
    case 'portrait':
      stateName = 'expanded';
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
                color: '(green)',
                view: 'bot-rig',
                shade: '~dark~',
                image: loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium') as string,
              }}
              cases={{
                view: undefined,
                image: undefined,
                tasks: {
                  onClick: () => {
                    freezeFooters(pageName, 'bot-rig');
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
                  color: '(green)',
                  shade: '~dark~',
                }}
                cases={{
                  task: [
                    (event) => designateCharacter('enter', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-left'),
                    (event) => designateCharacter('click', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-left'),
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
                  color: '(green)',
                  shade: '~light~',
                }}
                cases={{
                  task: [
                    (event) => designateCharacter('enter', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-right'),
                    (event) => designateCharacter('click', event.currentTarget as HTMLButtonElement, pageName, blockName, 'demo-right'),
                  ],
                }}
              />
            </div>
          </section>
          <figure className={`${blockName}-midground`}>
            <DivisionSweeping
              //--|🠊 <div class="demon-left-header_sweeping-default"/> 🠈|--\\
              info={{
                labelName: 'demo-left',
                blockName: blockName as '<header>',
                pageName: pageName as '[overtime]',
              }}
              cases={{
                axis: '[y]',
                view: '-top-',
                show: 0 as number,
                call: OvertimeCharacters as React.ComponentType<InfoProps>,
              }}
            />

            {/*
            <SectionCharacters
              cases={{
                characters: 'random',
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
            />
            */}

            <DivisionSweeping
              //--|🠊 <div class="demo-right-header_sweeping-default"/> 🠈|--\\
              info={{
                labelName: 'demo-right',
                blockName: blockName as '<header>',
                pageName: pageName as '[overtime]',
              }}
              cases={{
                axis: '[y]',
                view: '-bot-',
                show: 0 as number,
                call: OvertimeCharacters as React.ComponentType<InfoProps>,
              }}
            />
          </figure>
          <div className={`${blockName}-background`}>
            <footer></footer>
          </div>
        </footer>
      );
  }
}
const OvertimeCharacters: React.FC<InfoProps> = ({ info }) => {
  const labelName = info.labelName as string;
  const pageName = info.pageName as 'overtime';
  const blockName = info.blockName as 'footer';
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
          />
        </>
      );
  }
};
export default OvertimeFooter;
