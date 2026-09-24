//--|🠊 layouts/containers 🠈|--\\
//--|🠋 Select Function 🠋|--\\
type BlockName = 'overlay' | 'header' | 'footer' | 'leftbar' | 'rightbar' | 'main';
type AlterAction = 'expand' | 'collapse' | 'unfold' | 'squaring' | 'loading' | 'update';
type Handler = (pageName: string) => void;

const blockHandlers: Partial<Record<BlockName, Partial<Record<AlterAction, Handler>>>> = {
  overlay: {
    expand: (pageName) => showOverlay(pageName, 'overlay'),
    collapse: (pageName) => hideOverlay(pageName, 'overlay'),
    update: (pageName) => updateOverlay(pageName, 'overlay'),
    loading: (pageName) => loadingOverlay(pageName, 'overlay'),
  },
  header: {
    expand: (pageName) => expandHeader(pageName, 'header'),
    collapse: (pageName) => collapseHeader(pageName, 'header'),
    unfold: (pageName) => unfoldHeader(pageName, 'header'),
    squaring: (pageName) => squaringHeader(pageName, 'header'),
  },
  footer: {
    expand: (pageName) => expandFooter(pageName, 'footer'),
    collapse: (pageName) => collapseFooter(pageName, 'footer'),
    unfold: (pageName) => unfoldFooter(pageName, 'footer'),
    squaring: (pageName) => squaringFooter(pageName, 'footer'),
  },
  leftbar: {
    expand: (pageName) => expandLeftbar(pageName, 'leftbar'),
    collapse: (pageName) => collapseLeftbar(pageName, 'leftbar'),
    unfold: (pageName) => unfoldLeftbar(pageName, 'leftbar'),
    squaring: (pageName) => squaringLeftbar(pageName, 'leftbar'),
  },
  rightbar: {
    expand: (pageName) => expandRightbar(pageName, 'rightbar'),
    collapse: (pageName) => collapseRightbar(pageName, 'rightbar'),
    unfold: (pageName) => unfoldRightbar(pageName, 'rightbar'),
    squaring: (pageName) => squaringRightbar(pageName, 'rightbar'),
  },
};
function blockViews(pageName: string, blockName: BlockName, alterAction: AlterAction) {
  blockHandlers[blockName]?.[alterAction]?.(pageName);
}

//--|🠊 Expand Functions 🠈|--\\
const showOverlay = (pageName: string, blockName: 'overlay') => {
  console.log(`//--|🠊 Visible: #${pageName}-${blockName} 🠈|--\\`);
};
const expandHeader = (pageName: string, blockName: 'header') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\`);
};
const expandFooter = (pageName: string, blockName: 'footer') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\`);
};
const expandLeftbar = (pageName: string, blockName: 'leftbar') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\`);
};
const expandRightbar = (pageName: string, blockName: 'rightbar') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\`);
};

//--|🠊 Collapse Functions 🠈|--\\
const hideOverlay = (pageName: string, blockName: 'overlay') => {
  console.log(`//--|🠊 Hidden: #${pageName}-${blockName} 🠈|--\\`);
};
const collapseHeader = (pageName: string, blockName: 'header') => {
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\`);
};
const collapseFooter = (pageName: string, blockName: 'footer') => {
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\`);
};
const collapseLeftbar = (pageName: string, blockName: 'leftbar') => {
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\`);
};
const collapseRightbar = (pageName: string, blockName: 'rightbar') => {
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\`);
};

//--|🠊 Unfold & Update Functions 🠈|--\\
const updateOverlay = (pageName: string, blockName: 'overlay') => {
  console.log(`//--|🠊 Update: #${pageName}-${blockName} 🠈|--\\`);
};
const unfoldHeader = (pageName: string, blockName: 'header') => {
  console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\`);
};
const unfoldFooter = (pageName: string, blockName: 'footer') => {
  console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\`);
};
const unfoldLeftbar = (pageName: string, blockName: 'leftbar') => {
  console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\`);
};
const unfoldRightbar = (pageName: string, blockName: 'rightbar') => {
  console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\`);
};

//--|🠊 Squaring & Loading Functions 🠈|--\\
const loadingOverlay = (pageName: string, blockName: 'overlay') => {
  console.log(`//--|🠊 Loading: #${pageName}-${blockName} 🠈|--\\`);
};
const squaringHeader = (pageName: string, blockName: 'header') => {
  console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\`);
};
const squaringFooter = (pageName: string, blockName: 'footer') => {
  console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\`);
};
const squaringLeftbar = (pageName: string, blockName: 'leftbar') => {
  console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\`);
};
const squaringRightbar = (pageName: string, blockName: 'rightbar') => {
  console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\`);
};

export default blockViews;

/*
  setTimeout(() => {
    console.log(`|🠊 Show: <section id="${pageName}-${blockName}"> 🠈|`);
  }, 125);
  */
/*
  setTimeout(() => {
    const disableElement: string = 'disabled-header';
    const locateElement: string = `#${pageName}-body header[class*="header"]`;

    const headerContainer = document.querySelector(locateElement) as HTMLElement;
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
  */
/*
  const disableElement: string = 'disabled-leftbar';
  const locateElement: string = `#${pageName}-body aside[class*="leftbar"]`;
  setTimeout(() => {
    const leftbarContainer = document.querySelector(locateElement) as HTMLElement;
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
  */
/*
  setTimeout(() => {
    const disableElement: string = 'disabled-header';
    const locateElement: string = `#${pageName}-body header[class*="header"]`;
    const headerContainer = document.querySelector(locateElement) as HTMLElement;
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
  */
/*
  setTimeout(() => {
    const leftbarContainer = document.getElementById(`${pageName}-${blockName}`) as HTMLElement;
    if (leftbarContainer.classList.contains('unfolded')) {
      leftbarContainer.classList.add('collapsed');
      leftbarContainer.classList.remove('unfolded');
    }
  }, 125);
  */
/*
  const disableOverlay = 'disabled-overlay' as string;
  const locateOverlay: string = `#${pageName}-body section[class*="${blockName}"]`;
  const overlayContainer = document.querySelector(locateOverlay) as HTMLElement;
  if (!overlayContainer.classList.contains(disableOverlay)) {
    overlayContainer.classList.add(disableOverlay);
    //--|🠋 Hide Overlay 🠋|--\\
    const stateName: string = overlayContainer.classList[1];
    setTimeout(() => {
      overlayContainer.classList.remove(disableOverlay);
      overlayContainer.classList.replace(stateName, 'hidden');
      console.log(`|🠊 Hide: <section id="${pageName}-${blockName}"> 🠈|`);
    }, 1500);
  }
  */
/*
  setTimeout(() => {
    const disableElement: string = 'disabled-header';
    const locateElement: string = `#${pageName}-body header[class*="header"]`;
    const leftbarElement: string = `#${pageName}-body aside[class*="leftbar"]`;

    const headerContainer = document.querySelector(locateElement) as HTMLElement;
    const leftbarContainer = document.querySelector(leftbarElement) as HTMLElement;
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
  */
/*
  setTimeout(() => {
    const disableElement: string = 'disabled-footer';
    const locateElement: string = `#${pageName}-body footer[class*="footer"]`;
    const leftbarElement: string = `#${pageName}-body aside[class*="leftbar"]`;

    const footerContainer = document.querySelector(locateElement) as HTMLElement;
    const leftbarContainer = document.querySelector(leftbarElement) as HTMLElement;
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
  */
/*
  setTimeout(() => {
    const disableElement: string = 'disabled-leftbar';
    const locateElement: string = `#${pageName}-body aside[class*="leftbar"]`;
    const headerElement: string = `#${pageName}-body header[class*="header"]`;

    const leftbarContainer = document.querySelector(locateElement) as HTMLElement;
    const headerContainer = document.querySelector(headerElement) as HTMLElement;
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
  */
/*
  setTimeout(() => {
    const disableElement: string = 'disabled-header';
    const locateElement: string = `#${pageName}-body header[class*="header"]`;
    const leftbarElement: string = `#${pageName}-body aside[class*="leftbar"]`;

    const headerContainer = document.querySelector(locateElement) as HTMLElement;
    const leftbarContainer = document.querySelector(leftbarElement) as HTMLElement;
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
  */
/*
  const disableElement: string = 'disabled-footer';
  const locateElement: string = `#${pageName}-body footer[class*="footer"]`;
  const leftbarElement: string = `#${pageName}-body aside[class*="leftbar"]`;

  const footerContainer = document.querySelector(locateElement) as HTMLElement;
  const leftbarContainer = document.querySelector(leftbarElement) as HTMLElement;
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
  */
