//--|🠊 scripts.ts 🠈|--\\
export function stripBrackets(thisText: string, wrapType: '[]' | '<>' | '()' | '{}' | '--' | '~~'): string {
  switch (wrapType) {
    case '[]':
      return thisText.replace(/[\[\]]/g, '');
    case '<>':
      return thisText.replace(/[<>]/g, '');
    case '()':
      return thisText.replace(/[()]/g, '');
    case '{}':
      return thisText.replace(/[{}]/g, '');
    case '--':
      return thisText.replace(/[--]/g, '');
    case '~~':
      return thisText.replace(/[~~]/g, '');
  }
}
export function changeNumerals(thisCount: number, numType: 'roman' | 'arabic'): string {
  return '';
}
export function romanNumerals(): Array<string> {
  return [
    'O', // 0 (usually left empty)
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII',
    'XIII',
    'XIV',
    'XV',
    'XVI',
    'XVII',
    'XVIII',
    'XIX',
    'XX',
    'XXI',
    'XXII',
    'XXIII',
    'XXIV',
    'XXV',
    'XXVI',
    'XXVII',
    'XXVIII',
    'XXIX',
    'XXX',
    'XXXI',
    'XXXII',
    'XXXIII',
    'XXXIV',
    'XXXV',
    'XXXVI',
    'XXXVII',
    'XXXVIII',
    'XXXIX',
    'XL',
    'XLI',
    'XLII',
    'XLIII',
    'XLIV',
    'XLV',
    'XLVI',
    'XLVII',
    'XLVIII',
    'XLIX',
    'L',
    'LI',
    'LII',
    'LIII',
    'LIV',
    'LV',
    'LVI',
    'LVII',
    'LVIII',
    'LIX',
    'LX',
    'LXI',
    'LXII',
    'LXIII',
    'LXIV',
    'LXV',
    'LXVI',
    'LXVII',
    'LXVIII',
    'LXIX',
    'LXX',
    'LXXI',
    'LXXII',
    'LXXIII',
    'LXXIV',
    'LXXV',
    'LXXVI',
    'LXXVII',
    'LXXVIII',
    'LXXIX',
    'LXXX',
    'LXXXI',
    'LXXXII',
    'LXXXIII',
    'LXXXIV',
    'LXXXV',
    'LXXXVI',
    'LXXXVII',
    'LXXXVIII',
    'LXXXIX',
    'XC',
    'XCI',
    'XCII',
    'XCIII',
    'XCIV',
    'XCV',
    'XCVI',
    'XCVII',
    'XCVIII',
    'XCIX',
    'C',
    'CI',
    'CII',
    'CIII',
    'CIV',
    'CV',
    'CVI',
    'CVII',
    'CVIII',
    'CIX',
    'CX',
    'CXI',
    'CXII',
    'CXIII',
    'CXIV',
    'CXV',
    'CXVI',
    'CXVII',
    'CXVIII',
    'CXIX',
    'CXX',
    'CXXI',
    'CXXII',
    'CXXIII',
    'CXXIV',
    'CXXV',
    'CXXVI',
    'CXXVII',
    'CXXVIII',
    'CXXIX',
    'CXXX',
    'CXXXI',
    'CXXXII',
    'CXXXIII',
    'CXXXIV',
    'CXXXV',
    'CXXXVI',
    'CXXXVII',
    'CXXXVIII',
    'CXXXIX',
    'CXL',
    'CXLI',
    'CXLII',
    'CXLIII',
    'CXLIV',
    'CXLV',
    'CXLVI',
    'CXLVII',
    'CXLVIII',
    'CXLIX',
    'CL',
    'CLI',
    'CLII',
    'CLIII',
    'CLIV',
    'CLV',
    'CLVI',
  ];
}

//--|🠊 1. Declare timer outside of scope. 🠈|--\\
let headTime: ReturnType<typeof setTimeout> | null = null;
export function expandHeader(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  const headerContainer = document.getElementById(`${pageName}-header`) as HTMLElement;

  switch (blockAction) {
    case 'hover':
      //--|🠊 2. Check if 'headTime' is running 🠈|--\\
      if (headTime === null) {
        //--|🠊 If yes, then ignore this request. 🠈|--\\
        //--|🠊 3. Check the className of the <header>. 🠈|--\\
        if (headerContainer.classList.contains('collapsed')) {
          headerContainer.classList.add('unfolded');
          headerContainer.classList.remove('collapsed');
          //--|🠊 4. Reset 'headTime' to null. 🠈|--\\
          headTime = setTimeout(() => {
            if (headerContainer.classList.contains('unfolded')) {
              headerContainer.classList.add('collapsed');
              headerContainer.classList.remove('unfolded');
              setTimeout(() => {
                headTime = null; //--|🠈 Reset headTime to signal readiness 🠈|--\\
              }, 250);
            }
          }, 5750);
        }
        return;
      }
      break;
    case 'click':
      headerContainer.classList.add('expanded');
      headerContainer.classList.remove('collapsed');
      break;
    case 'exit':
      if (headerContainer.classList.contains('unfolded')) {
        headTime = setTimeout(() => {
          headerContainer.classList.add('collapsed');
          headerContainer.classList.remove('unfolded');
        }, 1500);
      }
      break;
  }
}

export function collapseHeader(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  const headerContainer = document.getElementById(`${pageName}-header`) as HTMLElement;

  switch (blockAction) {
    case 'hover':
      //--|🠊 2. Check if 'headTime' is running 🠈|--\\
      if (headTime === null) {
        //--|🠊 If yes, then ignore this request. 🠈|--\\
        //--|🠊 3. Check the className of the <header>. 🠈|--\\
        if (headerContainer.classList.contains('collapsed')) {
          headerContainer.classList.add('unfolded');
          headerContainer.classList.remove('collapsed');
          //--|🠊 4. Reset 'headTime' to null. 🠈|--\\
          headTime = setTimeout(() => {
            if (headerContainer.classList.contains('unfolded')) {
              headerContainer.classList.add('collapsed');
              headerContainer.classList.remove('unfolded');
              setTimeout(() => {
                headTime = null; //--|🠈 Reset headTime to signal readiness 🠈|--\\
              }, 250);
            }
          }, 5750);
        }
        return;
      }
      break;
    case 'click':
      headerContainer.classList.add('collapsed');
      headerContainer.classList.remove('expanded');
      break;
    case 'exit':
      if (headerContainer.classList.contains('unfolded')) {
        headTime = setTimeout(() => {
          headerContainer.classList.add('collapsed');
          headerContainer.classList.remove('unfolded');
        }, 1500);
      }
      break;
  }
}
export function expandLeftbar(pageName: string, blockName: string) {
  const leftbarContainer = document.getElementById(`${pageName}-leftbar`) as HTMLElement;
  if (leftbarContainer.classList.contains('collapsed')) {
    leftbarContainer.classList.add('expanded');
    leftbarContainer.classList.remove('collapsed');
  } else {
    leftbarContainer.classList.add('collapsed');
    leftbarContainer.classList.remove('expanded');
  }
}
export function collapseLeftbar(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  const leftbarContainer = document.getElementById(`${pageName}-${blockName}`) as HTMLElement;
  if (leftbarContainer.classList.contains('unfolded')) {
    leftbarContainer.classList.add('collapsed');
    leftbarContainer.classList.remove('unfolded');
  }
}
