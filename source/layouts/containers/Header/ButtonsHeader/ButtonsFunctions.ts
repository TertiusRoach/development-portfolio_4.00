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
export function expandHeader(pageName: string, blockName: string) {
  const buttonsHeader = document.getElementById(`${pageName}-header`) as HTMLElement;
  if (buttonsHeader.classList.contains('unfolded')) {
    buttonsHeader.classList.add('expanded');
    buttonsHeader.classList.remove('unfolded');
  } else if (buttonsHeader.classList.contains('expanded')) {
    buttonsHeader.classList.add('collapsed');
    buttonsHeader.classList.remove('expanded');
  }
}
export function loadSoftware(pageName: string, blockName: string, blockAction: 'overtime' | 'ticketing' | 'hyperlink') {
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
