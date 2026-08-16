//--|🠊 Article_loading.ts 🠈|--\\
import loadAsset from '../../../scripts/archive';

function loadShade(apps: '{signature}' | '{tralogfin}', shade: '~dark~' | '~light~'): string {
  const typeName = '-gif-';
  const pathName = {
    '{signature}': {
      '~dark~': '/signature/1280x720%2C%2015fps/signature-dark',
      '~light~': '/signature/1280x720%2C%2015fps/signature-light',
    },
    '{tralogfin}': {
      '~dark~': '/trinity-apps/1280x720%2C 15fps/1280x720%2C 15fps_black',
      '~light~': '/trinity-apps/1280x720%2C 15fps/1280x720%2C 15fps_white',
    },
  };

  return loadAsset(typeName, pathName[apps][shade]) as string;
}
export default loadShade;
