import getIdentification from './getIdentification';
//--|🠋 utilities/getSVG.ts 🠋|--//
export function getSVG(labelName: string): { dark: String; medium: String; light: String } {
  const colorShades: Array<string> = ['dark', 'medium', 'light'];
  //--|🠋 Folder Structure Location 🠋|--//
  let getIcon = (shade: string): String => {
    let getURI = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/47547119286073f7ff21945c645c3d8f1b164225`;
    return `${getURI}/source/assets/svg-files/${getIdentification()}-page/${labelName}/${labelName}-${shade}.svg`;
  };
  let getLogo = (logo: string, shade: string): String | undefined => {
    let getURI: String;
    if (logo === 'my-portfolio') {
      getURI = `https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3bcd3d7ffb5a6c429e163b455718ade768df9661`;
      return `${getURI}/source/assets/svg-files/archive-images/tertius-roach/${labelName}-icon/primary-${shade}.svg` as String;
    } else if (logo === 'log-a-ticket') {
      getURI = ``;
      return `` as String;
    } else if (logo === 'univer-track') {
      getURI = ``;
      return `` as String;
    } else if (logo === 'journal-fits') {
      getURI = ``;
      return `` as String;
    }
  };
  switch (true) {
    case ['my-portfolio', 'log-a-ticket', 'univer-track', 'journal-fits'].includes(labelName):
      return {
        dark: getLogo(labelName, colorShades[0]),
        medium: getLogo(labelName, colorShades[1]),
        light: getLogo(labelName, colorShades[2]),
      } as { dark: String; medium: String; light: String };
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
