//--|🠊 Menu_carousel.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import stripBrackets from '../../functions';
import { abbrAxis, abbrType, abbrView, abbrShade, abbrColor } from '../../functions';

export function createClass(style: StyleProps): String {
  //--|🠊 Class Build for <DefaultButton> 🠈|--\\
  let axis = abbrAxis(style.axis);
  let type = abbrType(style.type);
  let view = abbrView(style.view);
  let shade = abbrShade(style.shade);
  let color = abbrColor(style.color);

  return `${axis}_${view}_${shade}_${color}_${type}`;
}
export function createStyle(type: '{select}' | '{scroll}', view: '-top-' | '-rig-' | '-bot-' | '-lef-'): string {
  return `${abbrType(type)}_${abbrView(view)}`;
}

interface InfoProps {
  pageName: string;
  blockName: string;
}
interface StyleProps {
  axis: '[x]' | '[y]';
  type: '{select}' | '{scroll}';
  view: '-top-' | '-rig-' | '-bot-' | '-lef-';
  shade: '~dark~' | '~medium~' | '~light~';
  color: '(red)' | '(green)' | '(blue)' | '(mono)';
}
interface CasesProps {
  array: Array<string>;
}

export function labelList(style: StyleProps): string {
  return `${abbrAxis(style.axis)}_${abbrView(style.view)}`;
}
export function labelButtons(style: StyleProps, cases: CasesProps): string {
  return `${abbrType(style.type)}_${abbrView(style.view)}`;
}
