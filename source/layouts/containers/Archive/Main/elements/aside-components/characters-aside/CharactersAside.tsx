//--|🠊 CharactersAside.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './CharactersAside.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';
import AsideCharacters from '../../../../../../components/Aside/characters/Aside.characters';

//--|🠋 Components 🠋|--\\

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
            color: '(mono)',
            shade: '~light~',
          }}
          cases={{ area: '[left]' }}
        />
        <AsideCharacters
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            color: '(mono)',
            shade: '~light~',
          }}
          cases={{ area: '[right]' }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <h1 className="display-1">{`<CharactersAside>`}</h1>
      </div>
    </aside>
  );
};
export default CharactersAside;
