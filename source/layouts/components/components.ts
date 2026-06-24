//--|🠊 source/layouts/components/functions.ts 🠈|--\\
import stripBrackets, { arabicToRoman, romanToArabic } from '../../scripts';
//--|🠋 Listeners 🠋|--\\
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

//--|🠋 Orientations 🠋|--\\
type Orientation = 'landscape' | 'portrait';
type Bootstrap =
  | string
  | 'display-1'
  | 'display-2'
  | 'display-3'
  | 'display-4'
  | 'display-5'
  | 'display-6'
  | [string, string];

export const setDis = (): Bootstrap => {
  const orientation: Orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  switch (orientation) {
    //--|🠊 Landscape Orientation 🠈|--\\
    case 'landscape': {
      if (window.innerHeight <= 360) {
        //--|🠈 Width: 640px 🠈|--\\
        return 'display-6';
      } else if (window.innerHeight <= 480) {
        //--|🠈 Width: 854px 🠈|--\\
        return 'display-4';
      } else if (window.innerHeight <= 768) {
        //--|🠈 Width: 1366px 🠈|--\\
        return 'display-3';
      } else {
        //--|🠈 Width: 1920px 🠈|--\\
        return 'display-1';
      }
    }
    //--|🠊 Portrait Orientation 🠈|--\\
    case 'portrait': {
      //--|🠈 Placeholder for portrait screen sizes 🠈|--\\
      return 'display-3';
    }
  }
};

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
export let abbrType = (type: '{select}' | '{scroll}'): string => {
  const typeMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '{select}': 'sel',
    '{scroll}': 'scr',
  };

  const classType = typeMap[type];

  return `${classType}`;
};
export let abbrView = (view: '-top-' | '-rig-' | '-bot-' | '-lef-'): string => {
  const classView = stripBrackets(view, '--');

  return `${classView}`;
};
export let abbrShade = (shade: '~dark~' | '~medium~' | '~light~'): string => {
  const shadeMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~medium~': 'med',
    '~light~': 'lig',
  };

  const classShade = shadeMap[shade];

  return `${classShade}`;
};
export let abbrColor = (color: '(red)' | '(green)' | '(blue)' | '(mono)'): string => {
  const colorMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(mono)': 'mon',
  };

  const classColor = colorMap[color];

  return `${classColor}`;
};

export default eventListen; //--|🠈 Allows components to be linked 🠈|--\\
