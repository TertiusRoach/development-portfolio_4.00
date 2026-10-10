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
}

function AsideCharacters({ info, style }: TheseProps) {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <aside className={`${info.labelName}-${info.blockName}_characters-default ${createClass(style)}`}>
      <div className="characters">
        {((pageName: string) => {
          switch (style.view) {
            case '-left-':
              return (
                <>
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<h1>',
                      type: '{button}',
                      shade: style.shade,
                      color: style.color,
                      image: loadAsset('-png-', '/archive-images/character-testing/original/jane-lester'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/malik-tremaine-carter'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/dimitri-lewis'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/dale-sutton'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/alaric-voss'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/conrad-guy'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/daniel-meyers'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/kady-deacon'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/seamus-odonnell'),
                    }}
                  />
                </>
              );
            case '-right-':
              return (
                <>
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<h1>',
                      type: '{button}',
                      shade: style.shade,
                      color: style.color,
                      image: loadAsset('-png-', '/archive-images/character-testing/original/hammad-dean'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/tasneem-kemp'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/elliot-crane'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/sipho-dlamini'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/zuberi-thorne'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/nyra-solari'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/victor-langston'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/danish-copeland'),
                    }}
                  />
                  <ButtonProfile
                    info={{ pageName: info.pageName, blockName: info.blockName }}
                    style={{
                      size: '<p>',
                      shade: style.shade,
                      color: style.color,
                      type: '{button}',
                      image: loadAsset('-png-', '/archive-images/character-testing/original/aelin-darrow'),
                    }}
                  />
                </>
              );
          }
        })(pageName)}
      </div>
    </aside>
  );
}

export default AsideCharacters;
