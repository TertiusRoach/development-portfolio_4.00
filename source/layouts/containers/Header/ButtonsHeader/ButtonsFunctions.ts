//--|🠊 Header/ButtonsFunctions.ts 🠈|--\\
export function toggleHeader(pageName: string, blockName: string) {
  const buttonsHeader = document.getElementById(`${pageName}-header`);

  if (!buttonsHeader) return;
  else if (buttonsHeader.classList.contains('collapsed')) {
    buttonsHeader.classList.remove('collapsed');
    buttonsHeader.classList.add('unfolded');
  }

  if (buttonsHeader.classList.contains('unfolded')) {
    buttonsHeader.classList.remove('unfolded');
    buttonsHeader.classList.add('collapsed');
  }
}
