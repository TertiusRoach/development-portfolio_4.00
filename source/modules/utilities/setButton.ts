import getIdentification from './getIdentification';

export function setButton(enable: HTMLButtonElement, disable: HTMLButtonElement) {
  // Safety check for null
  if (!enable || !disable) {
    console.error('Enable or disable button element is null');
    return;
  }

  let disableSection = document.getElementById('main-active');
  let enableSection = document.querySelector(`.main-${enable.id.split('-')[1]}`);
  let buttonElements = document.querySelectorAll(`button[id*="${getIdentification()}"]`);

  // Additional safety checks
  if (enable !== disable) {
    enable.id = `${enable.id}-active`;

    for (let i = 0; i < buttonElements.length; i++) {
      let buttonIdParts = buttonElements[i].id.split('-');
      if (buttonIdParts.length > 2 && buttonIdParts[2] === 'active') {
        disable.id = `${buttonIdParts[0]}-${buttonIdParts[1]}`;
        break;
      }
    }

    if (enableSection) {
      enableSection.id = 'main-active';
      if (disableSection) {
        disableSection.removeAttribute('id');
      }
    }
  }
}
