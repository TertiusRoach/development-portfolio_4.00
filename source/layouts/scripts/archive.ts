//--|🠊 archive.ts 🠈|--\\
function loadAsset(file: '-gif-' | '-ico-' | '-jpg-' | '-pdf-' | '-png-' | '-svg-', path: string): string {
  //--|🠊 Finds path for file extension 🠈|--\\
  const assetSource: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets';

  //--|🠊 Build URL string 🠈|--\\
  let filePath: Record<'-gif-' | '-ico-' | '-jpg-' | '-pdf-' | '-png-' | '-svg-', [string, string]> = {
    '-gif-': [`${assetSource}/gif-files`, '.gif'],
    '-ico-': [`${assetSource}/ico-files`, '.ico'],
    '-jpg-': [`${assetSource}/jpg-files`, '.jpg'],
    '-pdf-': [`${assetSource}/pdf-files`, '.pdf'],
    '-png-': [`${assetSource}/png-files`, '.png'],
    '-svg-': [`${assetSource}/svg-files`, '.svg'],
  };
  return (filePath[file][0] + path + filePath[file][1]) as string;
}
export default loadAsset;
