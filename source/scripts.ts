//--|🠊 scripts.ts 🠈|--\\
//--|🠋 Page Views 🠋|--\\
export function togglePages(pageName: string, viewAction: 'overtime' | 'ticketing' | 'hyperlink' | 'landing' | 'archive') {
  const activePage = document.querySelector(`#${pageName}-body`) as HTMLDivElement;
  const sleepingPage = document.querySelector(`#${viewAction}-body`) as HTMLDivElement;

  console.log(activePage.classList[1], sleepingPage.classList[1]);

  activePage.classList.replace('active', 'asleep');
  sleepingPage.classList.replace('asleep', 'active');
}

//--|🠋 Block Views 🠋|--\\
//--|🠊 1. Expand 🠈|--\\
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
          }, 125);
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
          }, 125);
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
          }, 125);
          console.log(`|🠊 Hovered on <${blockName}> to unfold <leftbar> 🠈|`);
        }
        break;
      case 'exit':
        break;
    }
  }, 125);
}
//--|🠊 2. Collapse 🠈|--\\
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
          }, 125);
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

//--|🠊 3. Unfold 🠈|--\\
export function unfoldHeader(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  setTimeout(() => {
    const disableElement: string = 'disabled-header';
    const locateElement: string = `#${pageName}-body header[class*="header"]`;
    const leftbarElement: string = `#${pageName}-body aside[class*="leftbar"]`;

    let headerContainer = document.querySelector(locateElement) as HTMLElement;
    let leftbarContainer = document.querySelector(leftbarElement) as HTMLElement;
    switch (blockAction) {
      case 'click':
        if (!leftbarContainer.classList.contains(disableElement)) {
          leftbarContainer.classList.add(disableElement);

          if (headerContainer.classList.contains('collapsed') || headerContainer.classList.contains('expanded')) {
            headerContainer.classList.add('unfolded');
            headerContainer.classList.remove('collapsed', 'expanded');
          }

          setTimeout(() => {
            headerContainer.classList.remove(disableElement);
          }, 125);
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
          }, 125);
          console.log(`|🠊 Hovered on <${blockName}> to unfold <header> 🠈|`);
        }
        break;
      case 'exit':
        console.log(`|🠊 Left <button> in <${blockName}> to unfold <header> 🠈|`);
        break;
    }
  }, 125);
}
export function unfoldFooter(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  setTimeout(() => {
    const disableElement: string = 'disabled-footer';
    const locateElement: string = `#${pageName}-body footer[class*="footer"]`;
    const leftbarElement: string = `#${pageName}-body aside[class*="leftbar"]`;

    let footerContainer = document.querySelector(locateElement) as HTMLElement;
    let leftbarContainer = document.querySelector(leftbarElement) as HTMLElement;
    switch (blockAction) {
      case 'click':
        if (!leftbarContainer.classList.contains(disableElement)) {
          leftbarContainer.classList.add(disableElement);

          if (footerContainer.classList.contains('collapsed') || footerContainer.classList.contains('expanded')) {
            footerContainer.classList.add('unfolded');
            footerContainer.classList.remove('collapsed', 'expanded');
          }

          setTimeout(() => {
            footerContainer.classList.remove(disableElement);
          }, 125);
        }

        console.log(`|🠊 Clicked on <${blockName}> to unfold <footer> 🠈|`);
        break;
      case 'hover':
        if (!footerContainer.classList.contains(disableElement)) {
          footerContainer.classList.add(disableElement);

          if (footerContainer.classList.contains('collapsed') || footerContainer.classList.contains('squaring')) {
            footerContainer.classList.add('unfolded');
            footerContainer.classList.remove('collapsed', 'squaring');
          }

          setTimeout(() => {
            footerContainer.classList.remove(disableElement);
          }, 125);
          console.log(`|🠊 Hovered on <${blockName}> to unfold <footer> 🠈|`);
        }
        break;
      case 'exit':
        console.log(`|🠊 Left <button> in <${blockName}> to unfold <footer> 🠈|`);
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
          }, 125);
          console.log(`|🠊 Hovered on <${blockName}> to unfold <leftbar> 🠈|`);
        }
        break;
      case 'exit':
        if (!leftbarContainer.classList.contains(disableElement)) {
          leftbarContainer.classList.add(disableElement);

          //--|===|--\\

          setTimeout(() => {
            leftbarContainer.classList.remove('disabled');
          }, 125);
          console.log(`|🠊 Left <button> in <${blockName}> to unfold <leftbar> 🠈|`);
        }

        break;
    }
  }, 125);
}

//--|🠊 4. Squaring 🠈|--\\
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
          }, 125);
        }
        console.log(`|🠊 Hovered on <${blockName}> to square <header> 🠈|`);
        break;
      case 'exit':
        if (headerContainer.classList.contains('unfolded') && leftbarContainer.classList.contains('collapsed')) {
          headerContainer.classList.add('squaring');
          headerContainer.classList.remove('unfolded');
        }
        console.log(`|🠊 Left <button> in <${blockName}> to unfold <header> 🠈|`);
        break;
    }
  }, 125);
}
export function squaringFooter(pageName: string, blockAction: 'click' | 'hover' | 'exit', blockName?: string) {
  const disableElement: string = 'disabled-footer';
  const locateElement: string = `#${pageName}-body footer[class*="footer"]`;
  const leftbarElement: string = `#${pageName}-body aside[class*="leftbar"]`;

  let footerContainer = document.querySelector(locateElement) as HTMLElement;
  let leftbarContainer = document.querySelector(leftbarElement) as HTMLElement;
  switch (blockAction) {
    case 'click':
      if (footerContainer.classList.contains('unfolded') || footerContainer.classList.contains('expanded')) {
        footerContainer.classList.add('squaring');
        footerContainer.classList.remove('unfolded', 'expanded');
      }
      console.log(`|🠊 Clicked on <${blockName}> to square <footer> 🠈|`);
      break;
    case 'hover':
      if (!footerContainer.classList.contains(disableElement)) {
        footerContainer.classList.add(disableElement);

        if (footerContainer.classList.contains('collapsed') || footerContainer.classList.contains('squaring')) {
          footerContainer.classList.add('unfolded');
          footerContainer.classList.remove('collapsed', 'squaring');
        }

        setTimeout(() => {
          footerContainer.classList.remove(disableElement);
        }, 125);
      }
      console.log(`|🠊 Hovered on <${blockName}> to square <footer> 🠈|`);
      break;
    case 'exit':
      if (footerContainer.classList.contains('unfolded') && leftbarContainer.classList.contains('collapsed')) {
        footerContainer.classList.add('squaring');
        footerContainer.classList.remove('unfolded');
      }
      console.log(`|🠊 Left <button> in <${blockName}> to unfold <footer> 🠈|`);
      break;
  }
}

//--|🠊 5. Visible & Hidden 🠈|--\\
export function hideOverlay(pageName: string, blockName: string) {
  setTimeout(() => {
    const disable = document.getElementById(`${pageName}-${blockName}`) as HTMLDivElement;
    if (disable.classList.contains('visible')) {
      disable.classList.add('hidden');
      disable.classList.remove('visible');

      setTimeout(() => {
        disable.style.display = 'none';
      }, 125);
    }

    console.log(`|🠊 Hide: <section id="${pageName}-${blockName}"> 🠈|`);
  }, 125);
}
export function showOverlay(pageName: string, blockName: string) {
  setTimeout(() => {
    console.log(`|🠊 Show: <section id="${pageName}-${blockName}"> 🠈|`);
  }, 125);
}

//--|🠋 Default Functions 🠋|--\\
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
