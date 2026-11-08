//--|🠊 layouts/scripts/Left_Right.ts 🠈|--\\
//--|🠊 Front-end Functions 🠈|--\\

//--|🠊 1. Expanded Functions 🠈|--\\
export let expandLeftbar = (pageName: string, blockName: 'leftbar') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\\\`);
};
export let expandRightbar = (pageName: string, blockName: 'rightbar') => {
  console.log(`//--|🠊 Expand: #${pageName}-${blockName} 🠈|--\\\\`);
};

//--|🠊 2. Collapsed Functions 🠈|--\\
export let collapseLeftbar = (pageName: string, blockName: 'leftbar') => {
  let leftbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  leftbarElement.classList.replace(leftbarElement.classList[leftbarElement.classList.length - 1], 'collapsed');
  /* console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\\\`); */
  /*--|🠋 Used in...
    <Main> · revertBlocks();
    <Overlay> · shrinkBlocks();
    <Header> · squareHeaders();
  🠉|--*/
};
export let collapseRightbar = (pageName: string, blockName: 'rightbar') => {
  let rightbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  rightbarElement.classList.replace(rightbarElement.classList[rightbarElement.classList.length - 1], 'collapsed');
  /* console.log(`//--|🠊 Collapse: #${pageName}-${blockName} 🠈|--\\\\`); */
  /*--|🠋 Used in...
    <Main> · revertBlocks();
    <Overlay> · shrinkBlocks();
    <Footer> · squareFooters();
  🠉|--*/
};

//--|🠊 3. Unfolded Functions 🠈|--\\
export let unfoldLeftbar = (pageName: string, blockName: 'leftbar') => {
  let leftbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  leftbarElement.classList.replace(leftbarElement.classList[leftbarElement.classList.length - 1], 'unfolded');
  /* console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\\\`); */
  /*--|🠋 Used in...
    <Header> · unfoldHeaders();
  🠉|--*/
};
export let unfoldRightbar = (pageName: string, blockName: 'rightbar') => {
  let rightbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  rightbarElement.classList.replace(rightbarElement.classList[rightbarElement.classList.length - 1], 'unfolded');
  /* console.log(`//--|🠊 Unfold: #${pageName}-${blockName} 🠈|--\\\\`); */
  /*--|🠋 Used in...
    <Footer> · unfoldFooters();
  🠉|--*/
};

//--|🠊 4. Squaring Functions 🠈|--\\
export let squaringLeftbar = (pageName: string, blockName: 'leftbar') => {
  let leftbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  leftbarElement.classList.replace(leftbarElement.classList[leftbarElement.classList.length - 1], 'squaring');
  /* console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\\\`); */
};
export let squaringRightbar = (pageName: string, blockName: 'rightbar') => {
  let rightbarElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  rightbarElement.classList.replace(rightbarElement.classList[rightbarElement.classList.length - 1], 'squaring');
  /* console.log(`//--|🠊 Squaring: #${pageName}-${blockName} 🠈|--\\\\`); */
};
