//--|🠊 Article_loading.ts 🠈|--\\
import { abbrShade, abbrColor, abbrClarity } from '../../components'; //--|🠈 AI Code: Review Please 2026-11-10 🠈|--\\
import { loadAsset } from '../../../tools/utilities';
import type { TheseProps } from './Article.loading'; //--|🠈 AI Code: Review Please 2026-11-08 · The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
//--|🠊 AI Code: Review Please 2026-11-10 · shade_color_clarity, e.g. lig_mon_opa; clarity is the last slot, like <AsideCharacters> 🠈|--\\
function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <ArticleLoading> 🠈|--\\
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  const classClarity = abbrClarity(style.clarity);

  return `${classShade}_${classColor}_${classClarity}`;
}

//--|🠋 Generate Assets 🠋|--\\
export const loadShade = (apps: TheseProps['cases']['apps'], shade: TheseProps['style']['shade']): string => {
  const pathName = {
    '{signature}': {
      '~dark~': '/signature/1280x720%2C%2015fps/signature-dark',
      '~light~': '/signature/1280x720%2C%2015fps/signature-light',
    },
    '{tralogfin}': {
      '~dark~': '/trinity-apps/1280x720%2C 15fps/1280x720%2C 15fps_black',
      '~light~': '/trinity-apps/1280x720%2C 15fps/1280x720%2C 15fps_white',
    },
  } as const;
  return loadAsset('-gif-', pathName[apps][shade]) as string;
};
export default createClass;
