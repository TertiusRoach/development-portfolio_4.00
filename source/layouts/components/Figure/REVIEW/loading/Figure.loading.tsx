//--|🠊 Figure.loading.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Figure.loading.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\
import { viewDisplay } from './Figure_loading';
import { scrollTable } from '../../Table/clocking/Table_clocking';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import ButtonRouting from '../../Button/routing/Button.routing';
interface TheseProps<Names extends Info> {
  info: Names;
  style: {
    shade: '~dar~' | '~med~' | '~lig~';
  };
  cases: {
    logo: 'signature' | 'tralogfin';
  };
}

interface Info {
  pageName: string;
  blockName: string;
  labelName?: 'loading' | 'signature' | 'tralogfin' | string;
}
const FigureLoading = <T extends Info>({ info, cases }: TheseProps<T>) => {
  const pageName: string = info.pageName as 'overtime';
  const blockName: string = info.blockName as 'overlay';

  useEffect(() => {}, [pageName, blockName]);

  let svgPath: Record<string, Array<string>> = {
    signature: [
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/signature/1280x720%2C%2015fps/signature-dark.gif',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/signature/1280x720%2C%2015fps/signature-medium.gif',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/signature/1280x720%2C%2015fps/signature-light.gif',
    ],
    tralogfin: [
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_black.gif',
      '',
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_white.gif',
    ],
  };

  return (
    <figure className={`loading-${blockName}`}>
      <figcaption>Loading</figcaption>
      <img src={`${svgPath.signature[2]}`} alt="Loading" />
    </figure>
  );
};
export default FigureLoading;
