//--|🠊 Division_carousel.ts 🠈|--\\
import { stripBrackets } from '../../functions';

function previewElement(pageName: string, blockName: string, labelName: string, blockAction: 'next-view' | 'prev-view') {
  // (1) Query safely: allow null
  const tableWeek = document.querySelector(
    `#${pageName}-${blockName} .${labelName}-${blockName}_carousel li`,
  ) as HTMLTableElement | null;
  if (!tableWeek) return;

  // (2) Valid states as a literal tuple (gives you a real union type)
  const romanNumerals = ['I', 'II', 'III'] as Array<string>;

  // (3) Detect current state by checking which class exists (order-independent)
  const currentRoman = romanNumerals.find((r) => tableWeek.classList.contains(r)) ?? (romanNumerals[0] as string);

  // (4) Convert current roman to an index (guaranteed 0..length-1)
  const currentIndex = romanNumerals.indexOf(currentRoman) as number;

  // (5) Compute next index based on action and clamp it (prevents going out of range)
  type selectRoman = (typeof romanNumerals)[number];
  const delta = blockAction === 'next-view' ? 1 : -1;
  const nextIndex = Math.max(0, Math.min(romanNumerals.length - 1, currentIndex + delta)) as number;
  const nextRoman: selectRoman = romanNumerals[nextIndex] as string;

  // (6) Apply the new class (remove old roman state classes, then add next)
  tableWeek.classList.remove(...romanNumerals);
  tableWeek.classList.add(nextRoman);

  // (7) Toggling the tbodies based on DOM siblings (Your logic, safely typed)
  const visibleElement = document.querySelector('#overtime-leftbar tbody.visible') as HTMLTableSectionElement | null;

  // Make sure we actually found a visible element before trying to move
  if (visibleElement) {
    if (blockAction === 'prev-view') {
      const prevElement = visibleElement.previousElementSibling as HTMLTableSectionElement | null;

      // Only swap if a previous element actually exists (prevents crash at the very top)
      if (prevElement) {
        visibleElement.classList.add('hidden');
        visibleElement.classList.remove('visible');
        prevElement.classList.add('visible');
        prevElement.classList.remove('hidden');
      }
    } else if (blockAction === 'next-view') {
      const nextElement = visibleElement.nextElementSibling as HTMLTableSectionElement | null;

      // Only swap if a next element actually exists (prevents crash at the very bottom)
      if (nextElement) {
        visibleElement.classList.add('hidden');
        visibleElement.classList.remove('visible');
        nextElement.classList.add('visible');
        nextElement.classList.remove('hidden');
      }
    }
  }

  // (8) Optional: If you need a numeric position for other logic
  const position1Based = nextIndex + 1;

  // (9) Logging / side effects go here (NOT needed for the class switching itself)
  console.log('action:', blockAction);
  console.log('from:', currentRoman, 'to:', nextRoman);
  console.log('position (1-based):', position1Based);
}
export default previewElement;
export const abbrType = (type: '{select}' | '{scroll}'): string => {
  const typeMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '{select}': 'sel',
    '{scroll}': 'scr',
  };

  const classType = typeMap[type];

  return `${classType}`;
};
export const abbrView = (view: '-top-' | '-rig-' | '-bot-' | '-lef-'): string => {
  const classView = stripBrackets(view, '--');

  return `${classView}`;
};
export const abbrShade = (shade: '~dark~' | '~medium~' | '~light~'): string => {
  const shadeMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '~dark~': 'dar',
    '~medium~': 'med',
    '~light~': 'lig',
  };

  const classShade = shadeMap[shade];

  return `${classShade}`;
};
export const abbrColor = (color: '(red)' | '(green)' | '(blue)' | '(mono)'): string => {
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
export const abbrAxis = (axis: '[x]' | '[y]'): string => {
  const axisMap: Record<string, string> = {
    //--|🠊 Map of types to abbreviations 🠈|--\\
    '[x]': 'hori',
    '[y]': 'vert',
  };

  const classAxis = axisMap[axis];

  return `${classAxis}`;
};
