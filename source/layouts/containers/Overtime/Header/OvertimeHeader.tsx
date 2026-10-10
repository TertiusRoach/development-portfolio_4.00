//--|🠊 OvertimeHeader.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';
import AsideCharacters from '../../../components/Aside/characters/Aside.characters';
import DivisionCarousel from '../../../components/Division/carousel/Division.carousel';
import SectionCharacters from '../../../components/Section/characters/Section.characters';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import { unfoldHeaders, squareHeaders, freezeHeaders } from './OvertimeFunctions';
import { stripBrackets, checkScreen, loadAsset, loadPages } from '../../../../scripts';

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
      stateName = 'expanded';
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
                view: 'top-lef',
                shade: '~light~',
                color: '(green)',
                image: loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium') as string,
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
              />
            </div>
          </section>
          <figure className={`${blockName}-midground`}>
            <DivisionCarousel
              //--|🠊 <div class="demonstration-header_carousel-default"/> 🠈|--\\
              cases={{
                axis: '[x]',
                show: 1 as number,
                call: OvertimeCharacters as React.ComponentType<InfoProps>,
              }}
              info={{
                labelName: 'demonstration',
                blockName: blockName as '<header>',
                pageName: pageName as '[overtime]',
              }}
            />
          </figure>
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
            unfoldHeaders(event.currentTarget as HTMLElement);
          }}
          onMouseLeave={(event) => {
            squareHeaders(event.currentTarget as HTMLElement);
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
const OvertimeCharacters: React.FC<InfoProps> = ({ info }) => {
  const pageName = info.pageName as 'overtime';
  const blockName = info.blockName as 'header';
  const labelName = info.labelName as 'demonstration';
  return (
    <>
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
};
export default OvertimeHeader;
