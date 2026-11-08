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
