//--|🠊 Header/ButtonsFunctions.ts 🠈|--\\
export function togglePreview(pageName: string, blockName: string, pageAction: 'default-buttons' | 'routing-buttons') {
  /*
      I need the code that is commented out. I need it to change the className (TypeScript Version) but keep it in the same position. 
      Which is at the start. For example 'disabled-button fou_ico_lig_mon_def' should toggle to 'default-button fou_ico_lig_mon_def',
      then back to 'disabled-button fou_ico_lig_mon_def' again. Add safety checks and keep everything neat like this. Thank you.
      */

  const carousel = document.querySelector(`#${pageName}-main ul[class*="preview"]`) as HTMLElement;
  const preview = document.querySelector(`#${pageName}-header ol[class*="preview"]`) as HTMLElement;

  const defaultButton = document.getElementById(`buttons_header_default-preview`) as HTMLButtonElement;
  const routingButton = document.getElementById(`buttons_header_routing-preview`) as HTMLButtonElement;
  switch (pageAction) {
    case 'default-buttons':
      carousel.classList.add('slide-def');
      carousel.classList.remove('slide-rou');

      preview.classList.add('slide-def');
      preview.classList.remove('slide-rou');

      routingButton.setAttribute('aria-disabled', 'false');
      defaultButton.setAttribute('aria-disabled', 'true');
      break;
    case 'routing-buttons':
      carousel.classList.add('slide-rou');
      carousel.classList.remove('slide-def');

      preview.classList.add('slide-rou');
      preview.classList.remove('slide-def');

      routingButton.setAttribute('aria-disabled', 'true');
      defaultButton.setAttribute('aria-disabled', 'false');
      break;
  }
}
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
export function loadSoftware(blockAction: 'overtime' | 'ticketing' | 'hyperlink') {
  const buttonsBody = document.getElementById('buttons-body') as HTMLDivElement;
  const activateBody = document.getElementById(`${blockAction}-body`) as HTMLDivElement;

  if (buttonsBody.classList.contains('active')) {
    buttonsBody.classList.add('asleep');
    buttonsBody.classList.remove('active');

    activateBody.classList.add('active');
    activateBody.classList.remove('asleep');
  }

  switch (blockAction) {
    case 'overtime':
      break;
    case 'ticketing':
      break;
    case 'hyperlink':
      break;
  }
}
