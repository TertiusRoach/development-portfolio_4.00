//--|🠊 overtime.ts 🠈|--\\
export function stripBrackets(thisText: string, wrapType: '[]' | '<>' | '()' | '{}' | '--' | '~~'): string {
  switch (wrapType) {
    case '[]':
      //--|🠊 pageName 🠈|--\\
      return thisText.replace(/[\[\]]/g, '');
    case '<>':
      //--|🠊 blockName & style.size 🠈|--\\
      return thisText.replace(/[<>]/g, '');
    case '()':
      //--|🠊 roleName, style.color & style.role 🠈|--\\
      return thisText.replace(/[()]/g, '');
    case '~~':
      //--|🠊 style.shade 🠈|--\\
      return thisText.replace(/[~~]/g, '');
    case '{}':
      //--|🠊 style.type 🠈|--\\
      return thisText.replace(/[{}]/g, '');
    case '--':
      //--|🠊 style.view 🠈|--\\
      return thisText.replace(/[--]/g, '');
  }
}

//--|🠊 1. Declare timer outside of scope. 🠈|--\\
let headTime: ReturnType<typeof setTimeout> | null = null;
export function expandHeader(pageName: string, blockName: string, blockAction: 'click' | 'hover' | 'exit') {
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
      headerContainer.classList.add('unfolded');
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

/*
I
II
III
IV
V
VI
VII
VIII
IX
X
XI
XII
XIII
XIV
XV
XVI
XVII
XVIII
XIX
XX
XXI
XXII
XXIII
XXIV
XXV
XXVI
XXVII
XXVIII
XXIX
XXX
XXXI
XXXII
XXXIII
XXXIV
XXXV
XXXVI
XXXVII
XXXVIII
XXXIX
XL
XLI
XLII
XLIII
XLIV
XLV
XLVI
XLVII
XLVIII
XLIX
L
LI
LII
LIII
LIV
LV
LVI
LVII
LVIII
LIX
LX
LXI
LXII
LXIII
LXIV
LXV
LXVI
LXVII
LXVIII
LXIX
LXX
LXXI
LXXII
LXXIII
LXXIV
LXXV
LXXVI
LXXVII
LXXVIII
LXXIX
LXXX
LXXXI
LXXXII
LXXXIII
LXXXIV
LXXXV
LXXXVI
LXXXVII
LXXXVIII
LXXXIX
XC
XCI
XCII
XCIII
XCIV
XCV
XCVI
XCVII
XCVIII
XCIX
C
CI
CII
CIII
CIV
CV
CVI
CVII
CVIII
CIX
CX
CXI
CXII
CXIII
CXIV
CXV
CXVI
CXVII
CXVIII
CXIX
CXX
CXXI
CXXII
CXXIII
CXXIV
CXXV
CXXVI
CXXVII
CXXVIII
CXXIX
CXXX
CXXXI
CXXXII
CXXXIII
CXXXIV
CXXXV
CXXXVI
CXXXVII
CXXXVIII
CXXXIX
CXL
CXLI
CXLII
CXLIII
CXLIV
CXLV
CXLVI
CXLVII
CXLVIII
CXLIX
CL
CLI
CLII
CLIII
CLIV
CLV
CLVI
*/
