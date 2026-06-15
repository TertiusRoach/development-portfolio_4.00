//--|🠊 Aside.characters.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import ButtonProfile from '../../Button/profile/Button.profile';
import './Aside.characters.scss';

//--|🠋 Functions 🠋|--\\

//--|🠋 Components 🠋|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    area: '[left]' | '[right]';
  };
}

function AsideArea({ info, style, cases }: TheseProps) {
  console.log(info, style, cases);

  let profile: Array<string> = [
    'jane-lester',
    'malik-tremaine-carter',
    'dimitri-lewis',
    'dale-sutton',
    'alaric-voss',
    'conrad-guy',
    'daniel-meyers',
    'kady-deacon',
    'seamus-odonnell',
    'hammad-dean',
    'tasneem-kemp',
    'danish-copeland',
    'elliot-crane',
    'zuberi-thorne',
    'aelin-darrow',
    'victor-langston',
    'nyra-solari',
    'sipho-dlamini',
    'radomize-character',
  ];
  let imageLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/profile-pictures/tralogfin-characters/original';
  switch (cases.area) {
    case '[left]':
      return (
        <div className="characters">
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<h1>',
              type: '{button}',
              shade: style.shade,
              color: style.color,
              image: `${imageLink}/${profile[0]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[1]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[2]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[3]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[4]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[5]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[6]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[7]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[8]}.png`,
            }}
          />
        </div>
      );
    case '[right]':
      return (
        <div className="characters">
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<h1>',
              type: '{button}',
              shade: style.shade,
              color: style.color,
              image: `${imageLink}/${profile[9]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[10]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[11]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[12]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[13]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[14]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[15]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[16]}.png`,
            }}
          />
          <ButtonProfile
            info={{ pageName: info.pageName, blockName: info.blockName }}
            style={{
              size: '<p>',
              shade: style.shade,
              color: style.color,
              type: '{button}',
              image: `${imageLink}/${profile[17]}.png`,
            }}
          />
        </div>
      );
  }
}
const AsideCharacters: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);
  const areaClass: Record<TheseProps['cases']['area'], string> = {
    '[left]': 'left-side',
    '[right]': 'right-side',
  };
  return (
    <aside className={`${info.labelName}-${info.blockName}_characters-default ${areaClass[cases.area]}`}>
      <AsideArea info={info} style={style} cases={cases} />
    </aside>
  );
};
export default AsideCharacters;

//--|🠊 ProfileOvertime.tsx 🠈|--\\
/*
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import SectionCharacters from '../../../../../components/Section/Overtime/characters/Section.characters';

//--|🠋 Functions 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: 'footer';
    labelName: 'profile';
  };
}
const ProfileOvertime: React.FC<InfoProps> = ({ info }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as 'footer';
  const labelName = info.labelName as 'profile';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <>
      <SectionCharacters
        //--|🠊 <section class="profile-footer"/> 🠈|--\\
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: labelName,
        }}
        cases={{
          user: 'jane-lester',
        }}
      />
      <SectionCharacters
        //--|🠊 <section class="profile-header"/> 🠈|--\\
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: labelName,
        }}
        cases={{
          user: 'hammad-dean',
        }}
      />
    </>
  );
};
export default ProfileOvertime;
*/
