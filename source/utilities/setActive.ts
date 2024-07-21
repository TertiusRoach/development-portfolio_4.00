//--|🠋 setActive.ts 🠋|--//
export default function setActive(buttonElement: HTMLButtonElement, blockName: String) {
  const activeButton = document.querySelector(`#${blockName}-active`) as HTMLElement;
  if (activeButton) {
    activeButton.removeAttribute('id');
  }
  buttonElement.setAttribute('id', `${blockName}-active`);
  // buttonElement.id = `${blockName}-active`;
}
