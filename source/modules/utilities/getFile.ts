import getIdentification from './getIdentification';
//--|🠋 utilities/getSVG.ts 🠋|--//
export function getSVG(labelName: string): { dark: String; medium: String; light: String } {
  const colorShades: Array<string> = ['dark', 'medium', 'light'];
  //--|🠋 Folder Structure Location 🠋|--//
  let getIcon = (shade: string): String => {
    let getURI =
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/a076f2a95820996aeb19ab1610fc070656b800a6';
    return `${getURI}/source/assets/svg-files/${getIdentification()}-page/${labelName}/${labelName}-${shade}.svg`;
  };
  switch (true) {
    default:
      return {
        dark: getIcon(colorShades[0]),
        medium: getIcon(colorShades[1]),
        light: getIcon(colorShades[2]),
      } as { dark: String; medium: String; light: String };
  }
}
export function getPNG(labelName: string): String {
  console.log(labelName);
  return '';
}
