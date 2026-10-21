//--|🠊 Aside.characters.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../scripts';
import { createClass } from './Aside_characters';

//--|🠋 Components 🠋|--\\
import ButtonProfile from '../../Button/profile/Button.profile';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    view: '-left-' | '-right-';
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(turquoise)';
  };
  cases?: {
    task: [
      (event: React.MouseEvent<HTMLButtonElement>) => void,
      (event: React.MouseEvent<HTMLButtonElement>) => void,
      (event: React.MouseEvent<HTMLElement>) => void,
    ];
  };

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
}

function AsideCharacters({ info, style, cases }: TheseProps) {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <aside className={`${labelName}-${blockName}_characters-default ${createClass(style)}`} onMouseLeave={(event) => cases?.task[2](event)}>
      <div className="characters">
        {(() => {
          switch (style.view) {
            case '-left-': {
              let leftProfiles = [
                'jane-lester',
                'malik-tremaine-carter',
                'dimitri-lewis',
                'dale-sutton',
                'alaric-voss',
                'conrad-guy',
                'daniel-meyers',
                'kady-deacon',
                'seamus-odonnell',
              ];

              return (
                <>
                  {leftProfiles.map((profile, index) => (
                    <ButtonProfile
                      key={profile}
                      info={{ pageName: info.pageName, blockName: info.blockName }}
                      style={{
                        view: '-square-',
                        type: '{button}',
                        shade: style.shade,
                        color: style.color,
                        size: index === 0 ? '<h1>' : '<p>',
                        image: loadAsset('-png-', `/archive-images/character-testing/original/${profile}`),
                      }}
                      onClick={(event) => cases?.task[1](event)}
                      onMouseEnter={(event) => cases?.task[0](event)}
                    />
                  ))}
                </>
              );
            }
            case '-right-': {
              const rightProfiles = [
                'hammad-dean',
                'tasneem-kemp',
                'elliot-crane',
                'sipho-dlamini',
                'zuberi-thorne',
                'nyra-solari',
                'victor-langston',
                'danish-copeland',
                'aelin-darrow',
              ];

              return (
                <>
                  {rightProfiles.map((profile, index) => (
                    <ButtonProfile
                      key={profile}
                      info={{ pageName: info.pageName, blockName: info.blockName }}
                      style={{
                        view: '-square-',
                        type: '{button}',
                        shade: style.shade,
                        color: style.color,
                        size: index === 0 ? '<h1>' : '<p>',
                        image: loadAsset('-png-', `/archive-images/character-testing/original/${profile}`),
                      }}
                      onClick={(event) => cases?.task[1](event)}
                      onMouseEnter={(event) => cases?.task[0](event)}
                    />
                  ))}
                </>
              );
            }
          }
        })()}
      </div>
    </aside>
  );
}

export default AsideCharacters;
