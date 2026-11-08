//--|🠊 Article_updates.ts 🠈|--\\
import { abbrShade, abbrColor } from '../../components'; //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\
import { stripBrackets } from '../../../tools/conversions';
import type { TheseProps } from './Article.updates'; //--|🠈 AI Code: Review Please 2026-11-08 · The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
export function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <ArticleUpdates> 🠈|--\\
  //--|🠊 AI Code: Review Please 2026-11-08 · The maps live in components.ts, shared by every component 🠈|--\\
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  return `${classShade}_${classColor}`;
}

//--|🠋 Generate Abbreviations 🠋|--\\
//--|🠊 AI Code: Review Please 2026-11-08 · Moved from the .tsx: the description's size_view class, e.g. par_jus 🠈|--\\
export const createLayout = (size: TheseProps['style']['size'], view: TheseProps['style']['view']): string => {
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
    '-left-': 'lef',
    '-right-': 'rig',
    '-center-': 'cen',
    '-justify-': 'jus',
  };

  const classSize = sizeMap[size];
  const classView = viewMap[view];

  if (!classSize || !classView) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid <${stripBrackets(size, '<>')}> or -${stripBrackets(view, '--')}- 🠈|`);
  }

  return `${classSize}_${classView}`;
};
export default createClass;
