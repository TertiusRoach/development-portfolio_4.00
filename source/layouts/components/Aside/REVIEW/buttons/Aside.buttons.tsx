//--|🠊 Aside.buttons.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Aside.buttons.scss';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/buttons';
//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
//--|🠋 Extensions 🠋|--\\
import AsideMain from './extensions/main/ButtonsMain';

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
  };
  style: {
    specShade: '~dark~' | '~medium~' | '~light~';
    specLoad: '[default]' | '[cleaned]' | '[stretch]' | string;
    specColor: '(red)' | '(green)' | '(blue)' | '(mono)' | string;
    specSize: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
  };
}
const AsideButtons: React.FC<InfoProps> = ({ info, style }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  const handleButtons = (blockName: string, callBack: Array<object>) => {
    let info = callBack[0] as InfoProps['info'];
    let style = callBack[1] as InfoProps['style'];

    switch (blockName) {
      case '<overlay>':
        return <></>;
      case '<leftbar>':
        return <></>;
      case '<rightbar>':
        return <></>;
      case '<header>':
        return <></>;
      case '<footer>':
        return <></>;
      case '<main>':
      default:
        return <AsideMain info={info} style={style} />;
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <aside className={`${pageName}-aside ${stripBrackets(style.specShade, '~~')}`}>
      {handleButtons(info.blockName, [info, style])}
    </aside>
  );
};
export default AsideButtons;
