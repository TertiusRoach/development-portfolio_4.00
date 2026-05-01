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

//--|===|--\\
export function hideOverlay(pageName: string, blockName: string) {
  setTimeout(() => {
    const disable = document.getElementById(`${pageName}-${blockName}`) as HTMLDivElement;
    if (disable.classList.contains('visible')) {
      disable.classList.add('hidden');
      disable.classList.remove('visible');

      setTimeout(() => {
        disable.style.display = 'none';
      }, 1500);
    }

    console.log(`|🠊 Hide: <section id="${pageName}-${blockName}"> 🠈|`);
  }, 125);
}
export function showOverlay(pageName: string, blockName: string) {
  setTimeout(() => {
    console.log(`|🠊 Show: <section id="${pageName}-${blockName}"> 🠈|`);
  }, 125);
}

export function expandHeader(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  setTimeout(() => {
    const disableElement: string = 'disabled-header';
    const locateElement: string = `#${pageName}-body header[class*="header"]`;

    let headerContainer = document.querySelector(locateElement) as HTMLElement;
    switch (blockAction) {
      case 'click':
        if (!headerContainer.classList.contains(disableElement)) {
          headerContainer.classList.add(disableElement);

          if (headerContainer.classList.contains('collapsed') || headerContainer.classList.contains('unfolded')) {
            headerContainer.classList.add('expanded');
            headerContainer.classList.remove('collapsed', 'unfolded');
          }
          setTimeout(() => {
            headerContainer.classList.remove(disableElement);
          }, 1500);
          console.log(`|🠊 Clicked on <${blockName}> to expand <header> 🠈|`);
        }
        break;
      case 'hover':
        if (!headerContainer.classList.contains(disableElement)) {
          headerContainer.classList.add(disableElement);

          if (headerContainer.classList.contains('collapsed') || headerContainer.classList.contains('unfolded')) {
            headerContainer.classList.add('expanded');
            headerContainer.classList.remove('collapsed', 'unfolded');
          }

          setTimeout(() => {
            headerContainer.classList.remove(disableElement);
          }, 1500);
          console.log(`|🠊 Hovered on <${blockName}> to expand <header> 🠈|`);
        }
        break;
      case 'exit':
        console.log(`|🠊 Left <button> in <${blockName}> to expand <header> 🠈|`);
        break;
    }
  }, 125);
}
export function expandLeftbar(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  const disableElement: string = 'disabled-leftbar';
  const locateElement: string = `#${pageName}-body aside[class*="leftbar"]`;
  setTimeout(() => {
    let leftbarContainer = document.querySelector(locateElement) as HTMLElement;
    switch (blockAction) {
      case 'click':
        if (leftbarContainer.classList.contains('collapsed') || leftbarContainer.classList.contains('unfolded')) {
          leftbarContainer.classList.add('expanded');
          leftbarContainer.classList.remove('collapsed', 'unfolded');
        }
        break;
      case 'hover':
        if (!leftbarContainer.classList.contains(disableElement)) {
          leftbarContainer.classList.add(disableElement);
          if (leftbarContainer.classList.contains('collapsed') || leftbarContainer.classList.contains('unfolded')) {
            leftbarContainer.classList.add('expanded');
            leftbarContainer.classList.remove('collapsed', 'unfolded');
          }
          setTimeout(() => {
            leftbarContainer.classList.remove(disableElement);
          }, 1500);
          console.log(`|🠊 Hovered on <${blockName}> to unfold <leftbar> 🠈|`);
        }
        break;
      case 'exit':
        break;
    }
  }, 125);
}

export function collapseHeader(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  setTimeout(() => {
    const disableElement: string = 'disabled-header';
    const locateElement: string = `#${pageName}-body header[class*="header"]`;
    let headerContainer = document.querySelector(locateElement) as HTMLElement;
    switch (blockAction) {
      case 'click':
        if (headerContainer.classList.contains('unfolded') || headerContainer.classList.contains('expanded')) {
          headerContainer.classList.add('collapsed');
          headerContainer.classList.remove('expanded', 'unfolded');
        }
        console.log(`|🠊 Clicked on <${blockName}> to unfold <header> 🠈|`);
        break;
      case 'hover':
        if (!headerContainer.classList.contains(disableElement)) {
          headerContainer.classList.add(disableElement);
          if (headerContainer.classList.contains('unfolded') || headerContainer.classList.contains('collapsed')) {
            headerContainer.classList.add('collapsed');
            headerContainer.classList.remove('collapsed', 'unfolded');
          }
          setTimeout(() => {
            headerContainer.classList.remove(disableElement);
          }, 1500);
          console.log(`|🠊 Hovered on <${blockName}> to unfold <header> 🠈|`);
        }
        break;
      case 'exit':
        if (headerContainer.classList.contains('unfolded') || headerContainer.classList.contains('collapsed')) {
          headerContainer.classList.add('collapsed');
          headerContainer.classList.remove('collapsed', 'unfolded');
        }
        console.log(`|🠊 Left <button> in <${blockName}> to unfold <header> 🠈|`);
        break;
    }
  }, 125);
}
export function collapseLeftbar(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  setTimeout(() => {
    const leftbarContainer = document.getElementById(`${pageName}-${blockName}`) as HTMLElement;
    if (leftbarContainer.classList.contains('unfolded')) {
      leftbarContainer.classList.add('collapsed');
      leftbarContainer.classList.remove('unfolded');
    }
  }, 125);
}

export function unfoldHeader(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  setTimeout(() => {
    const disableElement: string = 'disabled-header';
    const locateElement: string = `#${pageName}-body header[class*="header"]`;
    const leftbarElement: string = `#${pageName}-body aside[class*="leftbar"]`;

    let headerContainer = document.querySelector(locateElement) as HTMLElement;
    let leftbarContainer = document.querySelector(leftbarElement) as HTMLElement;
    switch (blockAction) {
      case 'click':
        if (headerContainer.classList.contains('collapsed') || headerContainer.classList.contains('expanded')) {
          headerContainer.classList.add('unfolded');
          headerContainer.classList.remove('collapsed', 'expanded');
        }
        console.log(`|🠊 Clicked on <${blockName}> to unfold <header> 🠈|`);
        break;
      case 'hover':
        if (!headerContainer.classList.contains(disableElement)) {
          headerContainer.classList.add(disableElement);

          if (headerContainer.classList.contains('collapsed') || headerContainer.classList.contains('squaring')) {
            headerContainer.classList.add('unfolded');
            headerContainer.classList.remove('collapsed', 'squaring');
          }

          setTimeout(() => {
            headerContainer.classList.remove(disableElement);
          }, 1500);
        }
        console.log(`|🠊 Hovered on <${blockName}> to unfold <header> 🠈|`);
        break;
      case 'exit':
        console.log(`|🠊 Left <button> in <${blockName}> to unfold <header> 🠈|`);
        break;
    }
  }, 125);
}
export function unfoldLeftbar(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  setTimeout(() => {
    const disableElement: string = 'disabled-leftbar';
    const locateElement: string = `#${pageName}-body aside[class*="leftbar"]`;
    const headerElement: string = `#${pageName}-body header[class*="header"]`;

    let leftbarContainer = document.querySelector(locateElement) as HTMLElement;
    let headerContainer = document.querySelector(headerElement) as HTMLElement;
    switch (blockAction) {
      case 'click':
        console.log(`|🠊 Clicked on <Aside> to unfold <${blockName}> 🠈|`);
        if (leftbarContainer.classList.contains('collapsed')) {
          leftbarContainer.classList.add('unfolded');
          leftbarContainer.classList.remove('collapsed');

          headerContainer.classList.add('unfolded');
          headerContainer.classList.remove('squaring');
        } else if (leftbarContainer.classList.contains('unfolded') && headerContainer.classList.contains('unfolded')) {
          leftbarContainer.classList.add('collapsed');
          leftbarContainer.classList.remove('unfolded');

          headerContainer.classList.add('squaring');
          headerContainer.classList.remove('unfolded');
        }
        break;
      case 'hover':
        if (!leftbarContainer.classList.contains(disableElement)) {
          leftbarContainer.classList.add(disableElement);

          if (leftbarContainer.classList.contains('collapsed') || leftbarContainer.classList.contains('expanded')) {
            leftbarContainer.classList.add('unfolded');
            leftbarContainer.classList.remove('collapsed', 'expanded');
          }
          setTimeout(() => {
            leftbarContainer.classList.remove(disableElement);
          }, 1500);
          console.log(`|🠊 Hovered on <${blockName}> to unfold <leftbar> 🠈|`);
        }
        break;
      case 'exit':
        if (!leftbarContainer.classList.contains(disableElement)) {
          leftbarContainer.classList.add(disableElement);

          //--|===|--\\

          setTimeout(() => {
            leftbarContainer.classList.remove('disabled');
          }, 1500);
          console.log(`|🠊 Left <button> in <${blockName}> to unfold <leftbar> 🠈|`);
        }
        break;
    }
  }, 125);
}

export function squaringHeader(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  setTimeout(() => {
    const disableElement: string = 'disabled-header';
    const locateElement: string = `#${pageName}-body header[class*="header"]`;
    const leftbarElement: string = `#${pageName}-body aside[class*="leftbar"]`;

    let headerContainer = document.querySelector(locateElement) as HTMLElement;
    let leftbarContainer = document.querySelector(leftbarElement) as HTMLElement;
    switch (blockAction) {
      case 'click':
        if (headerContainer.classList.contains('unfolded') || headerContainer.classList.contains('expanded')) {
          headerContainer.classList.add('squaring');
          headerContainer.classList.remove('unfolded', 'expanded');
        }
        console.log(`|🠊 Clicked on <${blockName}> to square <header> 🠈|`);
        break;
      case 'hover':
        if (!headerContainer.classList.contains(disableElement)) {
          headerContainer.classList.add(disableElement);

          if (headerContainer.classList.contains('collapsed') || headerContainer.classList.contains('squaring')) {
            headerContainer.classList.add('unfolded');
            headerContainer.classList.remove('collapsed', 'squaring');
          }

          setTimeout(() => {
            headerContainer.classList.remove(disableElement);
          }, 1500);
        }
        console.log(`|🠊 Hovered on <${blockName}> to square <header> 🠈|`);
        break;
      case 'exit':
        if (headerContainer.classList.contains('unfolded') && leftbarContainer.classList.contains('collapsed')) {
          headerContainer.classList.add('squaring');
          headerContainer.classList.remove('unfolded');
        }
        break;
    }
  }, 125);
}
