//--|🠊 Footer/HyperlinkFunctions.ts 🠈|--\\
export function lockBlock(pageName: 'hyperlink', blockName: 'footer' | 'rightbar'): void {
  const selectElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  if (selectElement.className.includes('locked')) {
    selectElement.className = `frozen-${blockName} default-${blockName} unfolded`;
  } else if (selectElement.className.includes('frozen')) {
    switch (blockName) {
      case 'footer':
        selectElement.className = `default-${blockName} squaring`;
        break;
      case 'rightbar':
        selectElement.className = `default-${blockName} collapsed`;
        break;
    }
  }
}
