//--|🠊 Header/HyperlinkFunctions.ts 🠈|--\\
export function lockBlock(pageName: 'hyperlink', blockName: 'header' | 'leftbar'): void {
  const selectElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  if (selectElement.className.includes('locked')) {
    selectElement.className = `frozen-${blockName} default-${blockName} unfolded`;
  } else if (selectElement.className.includes('frozen')) {
    switch (blockName) {
      case 'header':
        selectElement.className = `default-${blockName} squaring`;
        break;
      case 'leftbar':
        selectElement.className = `default-${blockName} collapsed`;
        break;
    }
  }
}
