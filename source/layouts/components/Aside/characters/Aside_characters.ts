//--|🠊 Aside_characters.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { abbrShade, abbrColor, abbrClarity } from '../../components';
import { stripBrackets } from '../../../tools/conversions';
import type { TheseProps } from './Aside.characters'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠊 The unused cardInfo list was removed: Section_characters.ts holds the live one 🠈|--\\
export function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <AsideCharacters> 🠈|--\\
  const viewMap: Record<TheseProps['style']['view'], string> = {
    //--|🠊 Map view options to class abbreviations 🠈|--\\
    '-left-': 'lef',
    '-right-': 'rig',
  };

  const classView = viewMap[style.view];

  if (!classView) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid -${stripBrackets(style.view, '--')}- 🠈|`);
  }

  //--|🠊 Shade, colour and clarity maps live in components.ts, shared by every component 🠈|--\\
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  const classClarity = abbrClarity(style.clarity);
  return `${classView}_${classShade}_${classColor}_${classClarity}`;
}
export default createClass;
