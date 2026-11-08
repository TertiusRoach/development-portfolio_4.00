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
}

//--|🠊 1. Expanded Functions 🠈|--\\
export let expandHeader = (pageName: string, blockName: 'header') => {
  const headerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  let mainElement = document.querySelector(`#${pageName}-main`) as HTMLElement;

  mainElement.className = `obnubilate ${Array.from(mainElement.classList).pop()}`;
  headerElement.classList.replace(headerElement.classList[headerElement.classList.length - 1], 'expanded');

  /* console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\\\`); */
};
export let expandFooter = (pageName: string, blockName: 'footer') => {
  const footerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  let mainElement = document.querySelector(`#${pageName}-main`) as HTMLElement;

  mainElement.className = `obnubilate ${Array.from(mainElement.classList).pop()}`;
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
  let mainElement = document.querySelector(`#${pageName}-main`) as HTMLElement;
  if (headerElement.classList.contains('expanded')) {
    mainElement.classList.remove('obnubilate');
  }
  headerElement.classList.replace(headerElement.classList[headerElement.classList.length - 1], 'squaring');
  /* console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\\\`); */
  /*--|🠋 Used in...
    <Main> · revertBlocks();
    <Overlay> · shrinkBlocks();
    <OvertimeHeader> · previewProfile();
    <TicketingHeader> · previewProfile();
    <HyperlinkHeader> · previewProfile();
  🠉|--*/
};
export let squaringFooter = (pageName: string, blockName: 'footer') => {
  const footerElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  let mainElement = document.querySelector(`#${pageName}-main`) as HTMLElement;
  if (footerElement.classList.contains('expanded')) {
    mainElement.classList.remove('obnubilate');
  }
  footerElement.classList.replace(footerElement.classList[footerElement.classList.length - 1], 'squaring');
  /* console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\\\`); */
  /*--|🠋 Used in...
    <Main> · revertBlocks();
    <Overlay> · shrinkBlocks();
    <OvertimeFooter> · previewProfile();
    <TicketingFooter> · previewProfile();
    <HyperlinkFooter> · previewProfile();
  🠉|--*/
};
