//--|🠊 Header/ButtonsFunctions.ts 🠈|--\\

export function togglePreview(pageName: string, blockName: string, pageAction: 'default-buttons' | 'routing-buttons') {
  /*
      I need the code that is commented out. I need it to change the className (TypeScript Version) but keep it in the same position. 
      Which is at the start. For example 'disabled-button fou_ico_lig_mon_def' should toggle to 'default-button fou_ico_lig_mon_def',
      then back to 'disabled-button fou_ico_lig_mon_def' again. Add safety checks and keep everything neat like this. Thank you.
      */

  const carousel = document.querySelector(`#${pageName}-main ul[class*="preview"]`) as HTMLElement;
  const preview = document.querySelector(`#${pageName}-header ol[class*="preview"]`) as HTMLElement;

  const defaultButton = document.getElementById(`buttons_header_default-preview`) as HTMLElement;
  const routingButton = document.getElementById(`buttons_header_routing-preview`) as HTMLElement;
  switch (pageAction) {
    case 'default-buttons':
      if (defaultButton.classList[0].includes('default') === false) {
        carousel.classList.add('slide-def');
        carousel.classList.remove('slide-rou');

        preview.classList.add('slide-def');
        preview.classList.remove('slide-rou');

        routingButton.classList.add('default-button');
        routingButton.classList.remove('disabled-button');

        defaultButton.classList.add('disabled-button');
        defaultButton.classList.remove('default-button');
      }
      break;
    case 'routing-buttons':
      if (defaultButton.classList[0].includes('default') === false) {
        carousel.classList.add('slide-rou');
        carousel.classList.remove('slide-def');

        preview.classList.add('slide-rou');
        preview.classList.remove('slide-def');

        routingButton.classList.add('disabled-button');
        routingButton.classList.remove('default-button');

        defaultButton.classList.add('default-button');
        defaultButton.classList.remove('disabled-button');
      }

      /*

      goLeft.classList.add('default-button');
      goLeft.classList.remove('disabled-button');

      goRight.classList.add('disabled-button');
      goRight.classList.remove('default-button');

      */

      break;
  }
}

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
