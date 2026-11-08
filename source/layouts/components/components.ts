//--|🠊 source/layouts/components/components.ts 🠈|--\\
import { stripBrackets } from '../tools/conversions';
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

//--|🠋 Abbreviations 🠋|--\\
//--|🠊 AI Code: Review Please 2026-11-08 · Written out and checked like abbrShade, abbrColor and abbrClarity 🠈|--\\
export const abbrAxis = (axis: '[x]' | '[y]'): string => {
  const axisMap: Record<'[x]' | '[y]', string> = {
    //--|🠊 Map axis options to class abbreviations 🠈|--\\
    '[x]': 'hori',
    '[y]': 'vert',
  };

  const classAxis = axisMap[axis];

  if (!classAxis) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid [${stripBrackets(axis, '[]')}] 🠈|`);
  }

  return classAxis;
};
export const abbrView = (view: '-top-' | '-rig-' | '-bot-' | '-lef-' | '-cen-' | '-mid-' | '-def-'): string => {
  const viewMap: Record<'-top-' | '-rig-' | '-bot-' | '-lef-' | '-cen-' | '-mid-' | '-def-', string> = {
    //--|🠊 Map view options to class abbreviations 🠈|--\\
    '-top-': 'top',
    '-rig-': 'rig',
    '-bot-': 'bot',
    '-lef-': 'lef',
    '-cen-': 'cen',
    '-mid-': 'mid',
    '-def-': 'def',
  };

  const classView = viewMap[view];

  if (!classView) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid -${stripBrackets(view, '--')}- 🠈|`);
  }

  return classView;
};
//--|🠊 AI Code: Review Please 2026-11-08 · Shared by every component: shade, colour and clarity mean the same everywhere 🠈|--\\
export const abbrShade = (shade: '~dark~' | '~light~'): string => {
  const shadeMap: Record<'~dark~' | '~light~', string> = {
    //--|🠊 Map shade options to class abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~light~': 'lig',
  };

  const classShade = shadeMap[shade];

  if (!classShade) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid ~${stripBrackets(shade, '~~')}~ 🠈|`);
  }

  return classShade;
};
export const abbrColor = (
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)',
): string => {
  const colorMap: Record<
    '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)',
    string
  > = {
    //--|🠊 Map color options to class abbreviations 🠈|--\\
    '(mono)': 'mon',
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(purple)': 'pur',
    '(orange)': 'ora',
    '(pink)': 'pin',
    '(yellow)': 'yel',
    '(brown)': 'bro',
    '(turquoise)': 'tur',
  };

  const classColor = colorMap[color];

  if (!classColor) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid (${stripBrackets(color, '()')}) 🠈|`);
  }

  return classColor;
};
export const abbrClarity = (clarity: '⟨opaque⟩' | '⟨lucid⟩'): string => {
  const clarityMap: Record<'⟨opaque⟩' | '⟨lucid⟩', string> = {
    //--|🠊 Map clarity options to class abbreviations 🠈|--\\
    '⟨opaque⟩': 'opa',
    '⟨lucid⟩': 'luc',
  };

  const classClarity = clarityMap[clarity];

  if (!classClarity) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid ⟨${stripBrackets(clarity, '⟨⟩')}⟩ 🠈|`);
  }

  return classClarity;
};

export default eventListen; //--|🠈 Allows components to be linked 🠈|--\\
