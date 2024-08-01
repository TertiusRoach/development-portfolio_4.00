import getIdentification from './getIdentification';
//--|🠋 utilities/setActive.ts 🠋|--//
export function setButton(enable: HTMLButtonElement, disable: HTMLButtonElement) {
  switch (enable.parentElement?.parentElement?.tagName) {
    case 'HEADER':
    case 'FOOTER':
      let buttonElements = document.querySelectorAll(`button[id*="${getIdentification()}"]`);
      if (enable !== disable) {
        enable.id = `${enable.id}-active`;
        for (let i = 0; i < buttonElements.length; i++) {
          if (buttonElements[i].id.split('-')[2] as 'active') {
            disable.id = `${disable.id.split('-')[0]}-${disable.id.split('-')[1]}`;
            break;
          }
        }
      }

      if (enable !== disable) {
        let sectionElement = document.querySelector(`.main-${enable.id.split('-')[1]}`);
        let activeSection = document.getElementById('main-active');
        if (sectionElement) {
          sectionElement.id = 'main-active';
          activeSection?.removeAttribute('id');
        }
      }
      break;
    case 'DIV':
    case 'MAIN':
    case 'SECTION':
    case 'ASIDE':
      alert('Do you want to mark these buttons as active with no view reference to scroll to?');
      break;
  }
}
