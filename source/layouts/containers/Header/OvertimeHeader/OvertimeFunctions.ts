//--|🠊 Header/OvertimeFunctions.ts 🠈|--\\
export function expandHeader(pageName: string) {
  const buttonsHeader = document.getElementById(`${pageName}-header`) as HTMLElement;
  if (buttonsHeader.classList.contains('unfolded')) {
    buttonsHeader.classList.add('expanded');
    buttonsHeader.classList.remove('unfolded');
  } else if (buttonsHeader.classList.contains('expanded')) {
    buttonsHeader.classList.add('collapsed');
    buttonsHeader.classList.remove('expanded');
  }
}
