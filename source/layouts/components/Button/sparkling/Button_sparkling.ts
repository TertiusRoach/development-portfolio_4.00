//--|🠊 Button_sparkling.ts 🠈|--\\
import { abbrShade, abbrColor, abbrClarity } from '../../components'; //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\
import { stripBrackets } from '../../../tools/conversions';
import type { TheseProps } from './Button.sparkling'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <ButtonSparkling> 🠈|--\\
  const classColor = createColor(style.shade, style.color);
  const classLayout = createLayout(style.size, style.view);
  const classClarity = abbrClarity(style.clarity); //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\

  if (style.image == null) {
    return `${classLayout}_${classColor}_${classClarity}_alt`;
  } else {
    return `${classLayout}_${classColor}_${classClarity}_spa`;
  }
}

//--|🠋 Generate Abbreviations 🠋|--\\
const createLayout = (size: TheseProps['style']['size'], view: TheseProps['style']['view']): string => {
  const sizeMap: Record<TheseProps['style']['size'], string> = {
    //--|🠊 Map of size tags to class abbreviations 🠈|--\\
    '<h1>': 'one',
    '<h2>': 'two',
    '<h3>': 'thr',
    '<h4>': 'fou',
    '<h5>': 'fiv',
    '<h6>': 'six',
    '<p>': 'par',
  };

  const viewMap: Record<TheseProps['style']['view'], string> = {
    //--|🠊 Map of view options to class abbreviations 🠈|--\\
    '-top-': 'top',
    '-bottom-': 'bot',
    '-left-': 'lef',
    '-right-': 'rig',
    '-center-': 'cen',
    '-text-': 'tex',
    '-icon-': 'ico',
  };

  const classSize = sizeMap[size];
  const classView = viewMap[view];

  if (!classSize || !classView) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid <${stripBrackets(size, '<>')}> or -${stripBrackets(view, '--')}- 🠈|`);
  }

  return `${classSize}_${classView}`;
};
//--|🠊 AI Code: Review Please 2026-11-08 · The maps live in components.ts, shared by every component 🠈|--\\
const createColor = (shade: TheseProps['style']['shade'], color: TheseProps['style']['color']): string => {
  const classShade = abbrShade(shade);
  const classColor = abbrColor(color);

  return `${classShade}_${classColor}`;
};
export default createClass;
