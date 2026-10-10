//--|🠊 CharactersAside.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './CharactersAside.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';
import AsideCharacters from '../../../../../../components/Aside/characters/Aside.characters';

//--|🠋 Components 🠋|--\\
import LabelToggle from '../../../../../../components/Label/toggle/Label.toggle';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './CharactersFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const CharactersAside: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';
  return (
    <aside className="characters-aside">
      <section className={`${blockName}-foreground`}>
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
          }}
        />
        <div
          className="toggle-colors"
          onClick={(event: React.MouseEvent<HTMLElement>): void => {
            toggleColors(event.currentTarget as HTMLElement);
          }}
        >
          <LabelToggle
            style={{ type: '{toggle}', shade: '~dark~', color: '(red)' }}
            info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
          />
          <LabelToggle
            style={{ type: '{toggle}', shade: '~dark~', color: '(green)' }}
            info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
          />
          <LabelToggle
            style={{ type: '{toggle}', shade: '~dark~', color: '(blue)' }}
            info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
          />
        </div>
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
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <section className="left-side"></section>
        <section className="right-side"></section>
      </div>
    </aside>
  );
};
export default CharactersAside;
