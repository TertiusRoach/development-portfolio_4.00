//--|🠊 Header/ButtonsFunctions.ts 🠈|--\\
let headerTimer: ReturnType<typeof setTimeout> | null = null;
export function toggleHeader(pageName: string, blockName: string) {
  const buttonsHeader = document.getElementById(`${pageName}-header`);

  // 2. Check if a timer is already running
  if (headerTimer !== null) {
    // If yes, we ignore this request completely.
    return;
  }

  // const buttonsHeader = document.getElementById(`${pageName}-header`);

  // 3. Start the timer and save the ID to our variable
  headerTimer = setTimeout(() => {
    // Safety check: Element might not exist after 5 seconds
    if (buttonsHeader) {
      if (buttonsHeader.classList.contains('unfolded')) {
        buttonsHeader.classList.remove('unfolded');
        buttonsHeader.classList.add('collapsed');
      }
    }

    // 4. CRITICAL: Reset the variable to null.
    // This tells the system "The timer is finished, you can accept new requests now."
    headerTimer = null;
  }, 5000);
}
