import getIdentification from './getIdentification';
//--|🠋 utilities/getSVG.ts 🠋|--//
export function getSVG(labelName: string): { dark: String; medium: String; light: String } {
  const colorShades: Array<string> = ['dark', 'medium', 'light'];
  const getURI = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/47547119286073f7ff21945c645c3d8f1b164225`;

  /*
  let signatureIconDark = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3bcd3d7ffb5a6c429e163b455718ade768df9661/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-dark.svg`;
  let signatureIconMedium = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3bcd3d7ffb5a6c429e163b455718ade768df9661/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg`;
  let signatureIconLight = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3bcd3d7ffb5a6c429e163b455718ade768df9661/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-medium.svg`;
  */
  //--|🠋 Folder Structure Location 🠋|--//
  let getIcon = (shade: string): string => {
    return `/source/assets/svg-files/${getIdentification()}-page/${labelName}/${labelName}-${shade}.svg`;
  };
  switch (labelName) {
    default:
      return {
        dark: `${getURI}${getIcon(colorShades[0])}`,
        medium: `${getURI}${getIcon(colorShades[1])}`,
        light: `${getURI}${getIcon(colorShades[2])}`,
      } as { dark: String; medium: String; light: String };
  }
}
export function getPNG(labelName: string): String {
  return '';
}
