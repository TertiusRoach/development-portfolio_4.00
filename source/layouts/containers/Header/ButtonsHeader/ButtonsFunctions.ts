//--|🠊 Header/ButtonsFunctions.ts 🠈|--\\
export function toggleHeader(pageName: string, blockName: string) {
  const buttonsHeader = document.getElementById(`${pageName}-header`);

  // Safety Check 1: Element existence
  if (!buttonsHeader) return;
  // Safety Check 2: Explicit Class Swapping
  // Optional: If you want it to toggle back (expand) when triggered again
  else if (buttonsHeader.classList.contains('collapsed')) {
    buttonsHeader.classList.remove('collapsed');
    buttonsHeader.classList.add('unfolded');
  }

  // If it is currently expanded, collapse it.
  if (buttonsHeader.classList.contains('unfolded')) {
    buttonsHeader.classList.remove('unfolded');
    buttonsHeader.classList.add('collapsed');
  }
}
