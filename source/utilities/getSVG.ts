import getIdentification from './getIdentification';
//--|🠋 getSVG.ts 🠋|--//
export default function getSVG(labelName: string): { dark: String; medium: String; light: String } {
  const colorShades: Array<string> = ['dark', 'medium', 'light'];
  const iconURI = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/47547119286073f7ff21945c645c3d8f1b164225`;
  //--|🠋 Folder Structure Location 🠋|--//
  const getPath = (shade: string): string => {
    return `/source/assets/svg-files/${getIdentification()}-page/${labelName}/${labelName}-${shade}.svg`;
  };

  return {
    dark: `${iconURI}${getPath(colorShades[0])}`,
    medium: `${iconURI}${getPath(colorShades[1])}`,
    light: `${iconURI}${getPath(colorShades[2])}`,
  } as { dark: String; medium: String; light: String };
}
