//--|🠊 layouts/containers 🠈|--\\
//--|🠋 Block Views 🠋|--\\
const blockViews = (
  pageName: string,
  blockName: 'overlay' | 'header' | 'footer' | 'leftbar' | 'rightbar',
  alterAction: 'expand' | 'collapse' | 'unfold' | 'squaring' | 'loading' | 'update',
) => {
  switch (blockName) {
    case 'overlay':
      if (alterAction === 'expand') {
        showOverlay(pageName);
      } else if (alterAction === 'collapse') {
        hideOverlay(pageName);
      } else if (alterAction === 'loading') {
        loadingOverlay(pageName);
      } else if (alterAction === 'update') {
        updateOverlay(pageName);
      }
      break;
    case 'header':
      if (alterAction === 'expand') {
      } else if (alterAction === 'collapse') {
      } else if (alterAction === 'unfold') {
      } else if (alterAction === 'squaring') {
      } else if (alterAction === 'loading') {
      } else if (alterAction === 'update') {
      }
      break;
    case 'footer':
      if (alterAction === 'expand') {
      } else if (alterAction === 'collapse') {
      } else if (alterAction === 'unfold') {
      } else if (alterAction === 'squaring') {
      } else if (alterAction === 'loading') {
      } else if (alterAction === 'update') {
      }
      break;
    case 'leftbar':
      if (alterAction === 'expand') {
      } else if (alterAction === 'collapse') {
      } else if (alterAction === 'unfold') {
      } else if (alterAction === 'squaring') {
      } else if (alterAction === 'loading') {
      } else if (alterAction === 'update') {
      }
      break;
    case 'rightbar':
      if (alterAction === 'expand') {
      } else if (alterAction === 'collapse') {
      } else if (alterAction === 'unfold') {
      } else if (alterAction === 'squaring') {
      } else if (alterAction === 'loading') {
      } else if (alterAction === 'update') {
      }
      break;
  }
};

//--|🠊 Expand Functions 🠈|--\\
let showOverlay = (pageName: string) => {
  console.log(`//--|🠊 Visible: #${pageName}-overlay 🠈|--\\`);
};
let expandHeader = (pageName: string) => {
  console.log(`//--|🠊 Expand: #${pageName}-header 🠈|--\\`);
};
let expandFooter = (pageName: string) => {
  console.log(`//--|🠊 Expand: #${pageName}-footer 🠈|--\\`);
};
let expandLeftbar = (pageName: string) => {
  console.log(`//--|🠊 Expand: #${pageName}-leftbar 🠈|--\\`);
};
let expandRightbar = (pageName: string) => {
  console.log(`//--|🠊 Expand: #${pageName}-rightbar 🠈|--\\`);
};

//--|🠊 Collapse Functions 🠈|--\\
let hideOverlay = (pageName: string) => {
  console.log(`//--|🠊 Hidden: #${pageName}-overlay 🠈|--\\`);
};
let collapseHeader = (pageName: string) => {
  console.log(`//--|🠊 Collapse: #${pageName}-header 🠈|--\\`);
};
let collapseFooter = (pageName: string) => {
  console.log(`//--|🠊 Collapse: #${pageName}-footer 🠈|--\\`);
};
let collapseLeftbar = (pageName: string) => {
  console.log(`//--|🠊 Collapse: #${pageName}-leftbar 🠈|--\\`);
};
let collapseRightbar = (pageName: string) => {
  console.log(`//--|🠊 Collapse: #${pageName}-rightbar 🠈|--\\`);
};

//--|🠊 Unfold & Update Functions 🠈|--\\
let updateOverlay = (pageName: string) => {
  console.log(`//--|🠊 Update: #${pageName}-overlay 🠈|--\\`);
};
let unfoldHeader = (pageName: string) => {
  console.log(`//--|🠊 Unfold: #${pageName}-header 🠈|--\\`);
};
let unfoldFooter = (pageName: string) => {
  console.log(`//--|🠊 Unfold: #${pageName}-footer 🠈|--\\`);
};
let unfoldLeftbar = (pageName: string) => {
  console.log(`//--|🠊 Unfold: #${pageName}-leftbar 🠈|--\\`);
};
let unfoldRightbar = (pageName: string) => {
  console.log(`//--|🠊 Unfold: #${pageName}-rightbar 🠈|--\\`);
};

//--|🠊 Squaring & Loading Functions 🠈|--\\
let loadingOverlay = (pageName: string) => {
  console.log(`//--|🠊 Loading: #${pageName}-overlay 🠈|--\\`);
};
let squaringHeader = (pageName: string) => {
  console.log(`//--|🠊 Squaring: #${pageName}-header 🠈|--\\`);
};
let squaringFooter = (pageName: string) => {
  console.log(`//--|🠊 Squaring: #${pageName}-footer 🠈|--\\`);
};
let squaringLeftbar = (pageName: string) => {
  console.log(`//--|🠊 Squaring: #${pageName}-leftbar 🠈|--\\`);
};
let squaringRightbar = (pageName: string) => {
  console.log(`//--|🠊 Squaring: #${pageName}-rightbar 🠈|--\\`);
};

//--|🠊 Overlay Functions 🠈|--\\

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
  */
/*
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
  */
/*
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
  let disableOverlay = 'disabled-overlay' as string;
  let locateOverlay: string = `#${pageName}-body section[class*="${blockName}"]`;
  const overlayContainer = document.querySelector(locateOverlay) as HTMLElement;
  if (!overlayContainer.classList.contains(disableOverlay)) {
    overlayContainer.classList.add(disableOverlay);
    //--|🠋 Hide Overlay 🠋|--\\
    let stateName: string = overlayContainer.classList[1];
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
  */
/*
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
  */
/*
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
  */
/*
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
  */
/*
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
  */
