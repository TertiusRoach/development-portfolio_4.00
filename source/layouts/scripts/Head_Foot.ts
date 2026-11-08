//--|🠊 layouts/scripts/Head_Foot.ts 🠈|--\\
//--|🠊 Front-end Functions 🠈|--\\
export function freezeContainer(pageName: 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | 'components', blockName: 'header' | 'footer' | 'leftbar' | 'rightbar'): void {
  const selectElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  if (selectElement.className.includes('locked')) {
    selectElement.className = `frozen-${blockName} default-${blockName} unfolded`;
  } else if (selectElement.className.includes('frozen')) {
    switch (blockName) {
      case 'header':
      case 'footer':
        selectElement.className = `default-${blockName} squaring`;
        break;
      case 'leftbar':
      case 'rightbar':
        selectElement.className = `default-${blockName} collapsed`;
        break;
    }
  }
  obnubilateMain(pageName); //--|🠈 AI Code: Review Please 2026-11-08 · A freeze can end an expanded state, so <main> checks again 🠈|--\\
}
//--|🠊 AI Code: Review Please 2026-11-08 · The one place <main>'s blur is decided, run after every container change 🠈|--\\
export function obnubilateMain(pageName: string): void {
  let mainElement = document.querySelector(`#${pageName}-main`) as HTMLElement | null;
  let overlayElement = document.querySelector(`#${pageName}-overlay`) as HTMLElement | null;
  let headerElement = document.querySelector(`#${pageName}-header`) as HTMLElement | null;
  let footerElement = document.querySelector(`#${pageName}-footer`) as HTMLElement | null;
  let leftbarElement = document.querySelector(`#${pageName}-leftbar`) as HTMLElement | null;
  let rightbarElement = document.querySelector(`#${pageName}-rightbar`) as HTMLElement | null;
  if (!mainElement) return; //--|🠈 The page hasn't drawn <main> yet 🠈|--\\

  let overlayBusy = (overlayElement?.classList.contains('loading') === true || overlayElement?.classList.contains('update') === true) as boolean;
  let blockExpanded = (headerElement?.classList.contains('expanded') === true ||
    footerElement?.classList.contains('expanded') === true ||
    leftbarElement?.classList.contains('expanded') === true ||
    rightbarElement?.classList.contains('expanded') === true) as boolean;

  switch (overlayBusy || blockExpanded) {
    case true:
      if (!mainElement.classList.contains('obnubilate')) {
        mainElement.className = `obnubilate ${mainElement.className}`; //--|🠈 First, the way the JSX writes it: blockViews() reads classList[0] 🠈|--\\
      }
      break;
    case false:
      mainElement.classList.remove('obnubilate');
      break;
  }
}

//--|🠊 1. Expanded Functions 🠈|--\\
export let expandHeader = (pageName: string, blockName: 'header') => {
  const headerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;

  headerElement.classList.replace(headerElement.classList[headerElement.classList.length - 1], 'expanded');

  /* console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\\\`); */
};
export let expandFooter = (pageName: string, blockName: 'footer') => {
  const footerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;

  footerElement.classList.replace(footerElement.classList[footerElement.classList.length - 1], 'expanded');

  /* console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\\\`); */
};

//--|🠊 2. Collapsed Functions 🠈|--\\
export let collapseHeader = (pageName: string, blockName: 'header') => {
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\\\`);
};
export let collapseFooter = (pageName: string, blockName: 'footer') => {
  console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\\\`);
};

//--|🠊 3. Unfolded Functions 🠈|--\\
export let unfoldHeader = (pageName: string, blockName: 'header') => {
  let headerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  headerElement.classList.replace(headerElement.classList[headerElement.classList.length - 1], 'unfolded');
  /* console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\\\`); */
  /*--|🠋 Used in...
    <Header> · unfoldHeaders();
  🠉|--*/
};
export let unfoldFooter = (pageName: string, blockName: 'footer') => {
  let footerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  footerElement.classList.replace(footerElement.classList[footerElement.classList.length - 1], 'unfolded');
  /* console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\\\`); */
  /*--|🠋 Used in...
    <Footer> · unfoldFooters();
  🠉|--*/
};

//--|🠊 4. Squaring Functions 🠈|--\\
export let squaringHeader = (pageName: string, blockName: 'header') => {
  const headerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  headerElement.classList.replace(headerElement.classList[headerElement.classList.length - 1], 'squaring');
  /* console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\\\`); */
  /*--|🠋 Used in...
    <Main> · revertBlocks();
    <Overlay> · shrinkBlocks();
    <Header> · squareHeaders();
    <OvertimeHeader> · previewProfile();
    <TicketingHeader> · previewProfile();
    <HyperlinkHeader> · previewProfile();
  🠉|--*/
};
export let squaringFooter = (pageName: string, blockName: 'footer') => {
  const footerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  footerElement.classList.replace(footerElement.classList[footerElement.classList.length - 1], 'squaring');
  /* console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\\\`); */
  /*--|🠋 Used in...
    <Main> · revertBlocks();
    <Overlay> · shrinkBlocks();
    <Footer> · squareFooters();
    <OvertimeFooter> · previewProfile();
    <TicketingFooter> · previewProfile();
    <HyperlinkFooter> · previewProfile();
  🠉|--*/
};
