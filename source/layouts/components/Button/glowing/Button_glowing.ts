//--|🠊 Button_glowing.ts 🠈|--\\
import { abbrShade, abbrColor, abbrClarity } from '../../components'; //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\
import { stripBrackets } from '../../../tools/conversions';
import type { MouseEvent } from 'react'; //--|🠈 AI Code: Review Please 2026-11-10 🠈|--\\
import type { TheseProps } from './Button.glowing'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <ButtonGlowing> 🠈|--\\
  const classColor = createColor(style.shade, style.color);
  const classLayout = createLayout(style.size, style.view);
  const classClarity = abbrClarity(style.clarity); //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\

  if (style.image == null) {
    return `${classLayout}_${classColor}_${classClarity}_alt`;
  } else {
    return `${classLayout}_${classColor}_${classClarity}_glo`;
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
//--|🠋 Glow 🠋|--\\
//--|🠊 AI Code: Review Please 2026-11-10 · Moves the spotlight to the pointer, measured from div.back 🠈|--\\
export const trackGlow = (event: MouseEvent<HTMLButtonElement>): void => {
  const backLayer = event.currentTarget.querySelector("div[class='back']") as HTMLDivElement;
  const backBox = backLayer.getBoundingClientRect();

  //--|🠊 A runtime pointer position, the one inline style RULEBOOK § No Inline Styles allows 🠈|--\\
  backLayer.style.setProperty('--x', `${event.clientX - backBox.left}px`);
  backLayer.style.setProperty('--y', `${event.clientY - backBox.top}px`);
};
export default createClass;
