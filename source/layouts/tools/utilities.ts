//--|🠊 layouts/tools/utilities.ts 🠈|--\\
export const loadAsset = (type: '-gif-' | '-ico-' | '-jpg-' | '-pdf-' | '-png-' | '-svg-', path: string): string => {
  //--|🠊 Finds path for file extension 🠈|--\\
  const assetSource: string = './assets'; //--|🠈 Beside index.html: the build copies each image it finds here into public/assets/ (FRONT-END.md, Images & Assets) 🠈|--\\

  //--|🠊 Build URL string 🠈|--\\
  let filePath: Record<'-gif-' | '-ico-' | '-jpg-' | '-pdf-' | '-png-' | '-svg-', [string, string]> = {
    '-gif-': [`${assetSource}/gif-files`, '.gif'],
    '-ico-': [`${assetSource}/ico-files`, '.ico'],
    '-jpg-': [`${assetSource}/jpg-files`, '.jpg'],
    '-pdf-': [`${assetSource}/pdf-files`, '.pdf'],
    '-png-': [`${assetSource}/png-files`, '.png'],
    '-svg-': [`${assetSource}/svg-files`, '.svg'],
  };
  return (filePath[type][0] + path + filePath[type][1]) as string;
};
