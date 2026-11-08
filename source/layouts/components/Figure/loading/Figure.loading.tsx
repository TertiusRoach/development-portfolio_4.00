//--|🠊 Figure.loading.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../tools/utilities';

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
//--|🠊 AI Code: Review Please 2026-11-08 · A function, not a const; the GIFs load through loadAsset() 🠈|--\\
export function FigureLoading<T extends Info>({ info }: TheseProps<T>) {
  const pageName: string = info.pageName as 'overtime';
  const blockName: string = info.blockName as 'overlay';

  useEffect(() => {}, [pageName, blockName]);

  let svgPath: Record<string, Array<string>> = {
    signature: [
      loadAsset('-gif-', '/signature/1280x720%2C%2015fps/signature-dark'),
      loadAsset('-gif-', '/signature/1280x720%2C%2015fps/signature-medium'),
      loadAsset('-gif-', '/signature/1280x720%2C%2015fps/signature-light'),
    ],
    tralogfin: [
      loadAsset('-gif-', '/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_black'),
      '',
      loadAsset('-gif-', '/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_white'),
    ],
  };

  return (
    <figure className={`loading-${blockName}`}>
      <figcaption>Loading</figcaption>
      <img src={`${svgPath.signature[2]}`} alt="Loading" />
    </figure>
  );
}
export default FigureLoading;
