//--|🠊 source/layouts/components/functions.ts 🠈|--\\
import { stripBrackets } from '../../scripts';

//--|🠋 Abbreviations 🠋|--\\
export let abbrAxis = (axis: '[x]' | '[y]'): string => {
  const axisMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '[x]': 'hori',
    '[y]': 'vert',
  };

  const classAxis = axisMap[axis];

  return `${classAxis}`;
};
export let abbrType = (type: '{select}' | '{scroll}' | '{swipe}'): string => {
  const typeMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '{select}': 'sel',
    '{scroll}': 'scr',
    '{swipe}': 'swi',
  };

  const classType = typeMap[type];

  return `${classType}`;
};
export let abbrView = (view: '-top-' | '-rig-' | '-bot-' | '-lef-' | '-cen-' | '-mid-' | '-def-'): string => {
  const classView = stripBrackets(view, '--');

  return `${classView}`;
};
export let abbrShade = (shade: '~dark~' | '~medium~' | '~light~'): string => {
  const shadeMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~light~': 'lig',
    '~medium~': 'med',
  };

  const classShade = shadeMap[shade];

  return `${classShade}`;
};
export let abbrColor = (
  color:
    | '(red)'
    | '(green)'
    | '(blue)'
    | '(purple)'
    | '(orange)'
    | '(pink)'
    | '(brown)'
    | '(turquoise)'
    | '(gray)'
    | '(mono)',
): string => {
  const colorMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(purple)': 'pur',
    '(orange)': 'ora',
    '(pink)': 'pin',
    '(brown)': 'bro',
    '(turquoise)': 'tur',
    '(gray)': 'gra',
    '(mono)': 'mon',
  };

  const classColor = colorMap[color];

  return `${classColor}`;
};

//--|🠋 Chain Tags 🠋|--\\
function eventListen(selector: string, execution: () => void) {
  //--|🠊 Selector helps find the HTMLElement 🠈|--\\
  //--|🠊 Execution launches the function on tag change 🠈|--\\
  let classObserver: MutationObserver | null = null;
  let domObserver: MutationObserver | null = null;

  const observeElement = (element: HTMLElement): void => {
    classObserver = new MutationObserver(execution);

    classObserver.observe(element, {
      attributes: true,
      attributeFilter: ['class'],
    });
  };

  const findElement = (): HTMLElement | null => document.querySelector(selector);
  const element = findElement();

  if (element) {
    observeElement(element);
  } else {
    domObserver = new MutationObserver(() => {
      const found = findElement();

      if (!found) return;

      observeElement(found);
      domObserver?.disconnect();
    });
    domObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
  return () => {
    classObserver?.disconnect();
    domObserver?.disconnect();
  };
}
export default eventListen; //--|🠈 Allows components to be linked 🠈|--\\
