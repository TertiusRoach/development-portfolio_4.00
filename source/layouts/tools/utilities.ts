//--|🠊 layouts/tools/utilities.ts 🠈|--\\
export const loadAsset = (type: '-gif-' | '-ico-' | '-jpg-' | '-pdf-' | '-png-' | '-svg-', path: string): string => {
  //--|🠊 Finds path for file extension 🠈|--\\
  const assetSource: string = 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets';

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
/*
export function getResolution(): String {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const resolution = `${width}x${height}`;

  return resolution as String;
}
export function getOrientation(): String {
  const orientation = window.screen.orientation.type;

  if (!orientation.includes('landscape')) {
    return 'desktop-landscape' as String;
  } else if (!orientation.includes('portrait')) {
    return 'mobile-portrait' as String;
  } else {
    return 'tablet-square' as String;
  }
}
export function getIdentification(): String {
  const hyperlink: String = window.location.href;
  const identification: String | undefined = hyperlink?.split('/').pop()?.split('.')[0];
  if (identification === '' || undefined || null) {
    return 'index';
  } else {
    return hyperlink.split('/').pop()?.split('.')[0] as String;
  }
}
*/
