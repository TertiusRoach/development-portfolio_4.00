//--|🠊 Aside_characters.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { abbrShade, abbrColor, abbrClarity } from '../../components'; //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\
import { stripBrackets } from '../../../tools/conversions';
import type { TheseProps } from './Aside.characters'; //--|🠈 AI Code: Review Please 2026-11-08 · The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠊 AI Code: Review Please 2026-11-08 · The unused cardInfo list was removed: Section_characters.ts holds the live one 🠈|--\\
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

  //--|🠊 AI Code: Review Please 2026-11-08 · Shade, colour and clarity maps live in components.ts, shared by every component 🠈|--\\
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  const classClarity = abbrClarity(style.clarity);
  return `${classView}_${classShade}_${classColor}_${classClarity}`; //--|🠈 AI Code: Review Please 2026-10-31 12:27 🠈|--\\
}
export default createClass;
