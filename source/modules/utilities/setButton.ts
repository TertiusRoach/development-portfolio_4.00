import getIdentification from './getIdentification';
//--|🠋 modules/utilities/setButton.ts 🠋|--//
export function setButton(enable: HTMLButtonElement, disable: HTMLButtonElement) {
  let disableSection = document.getElementById('main-active');
  let enableSection = document.querySelector(`.main-${enable.id.split('-')[1]}`);
  let buttonElements = document.querySelectorAll(`button[id*="${getIdentification()}"]`);

  //--|🠋 Safety Check 🠋|--//
  if (enable !== disable) {
    enable.id = `${enable.id}-active`;
    for (let i = 0; i < buttonElements.length; i++) {
      if (buttonElements[i].id.split('-')[2] as 'active') {
        disable.id = `${disable.id.split('-')[0]}-${disable.id.split('-')[1]}`;
        break;
      }
    }

    if (enableSection) {
      enableSection.id = 'main-active';
      disableSection?.removeAttribute('id');
    }
  }
}
