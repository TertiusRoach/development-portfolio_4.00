import getIdentification from './getIdentification';
//--|🠋 modules/utilities/setButton.ts 🠋|--//
export function setButton(enable: HTMLButtonElement, disable: HTMLButtonElement) {
  const disableSection = document.getElementById('main-active');
  const enableSection = document.querySelector(`.main-${enable.id.split('-')[1]}`);
  const buttonElements = document.querySelectorAll(`button[id*="${getIdentification()}"]`);
  const blockName: String = `<${enable.parentElement?.parentElement?.tagName.toLowerCase()}>`;
  //--|🠋 Safety Check 🠋|--//
  switch (blockName) {
    case '<header>':
    case '<footer>':
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
      break;
    case '<main>':
  }
}
