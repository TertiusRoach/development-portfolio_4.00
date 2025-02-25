import getOrientation from '../getOrientation';
//--|🠋 utilities/setMenu.ts 🠋|--//
export default function setMenu(blockName: String, labelName: String) {
  // Get currently active section and the selected section elements
  const disableElement = document.getElementById('main-active') as HTMLElement | null;
  const activateElement = document.querySelector(`.${blockName}-${labelName}`) as HTMLElement | null;

  // Helper function to update active elements
  const toggleElement = function (
    disableElement: HTMLElement | HTMLButtonElement | null,
    activateElement: HTMLElement | HTMLButtonElement | null,
    id: string
  ) {
    if (disableElement) {
      disableElement.removeAttribute('id');
    }
    if (activateElement) {
      activateElement.setAttribute('id', id);
    }
  };

  // Determine orientation and update the active button accordingly
  let block: 'header' | 'footer' | '';
  switch (getOrientation()) {
    case 'desktop-landscape':
      block = 'header';
      break;
    case 'mobile-portrait':
      block = 'footer';
      break;
    default:
      block = '';
  }

  if (block) {
    let activeButton = document.querySelector(`#${block}-active`) as HTMLButtonElement;
    let selectButton = document.querySelector(`.${block}-${labelName}`) as HTMLButtonElement;
    toggleElement(activeButton, selectButton, `${block}-active`); // Update the <header> or <footer> element based on device orientation
    toggleElement(disableElement, activateElement, 'main-active'); // Activate the <section> inside the <main> container
  }
}
