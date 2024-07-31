//--|🠋 utilities/setActive.ts 🠋|--//
export function setButton(enable: HTMLButtonElement, disable: HTMLButtonElement) {
  if (enable !== disable) {
    let safetyCheck: boolean = enable !== disable && enable.classList[1] === undefined;
    if (safetyCheck) {
      console.log(enable.classList[1]);
      console.log(disable.classList[1]);
      // disable.className = '';
      // enable.className = 'active';
    }
    /*
    console.log(enable, disable);
    console.log('jfdiasljk;dfaljkdljkfasdkl;fasdljk;');
    */
  }
  /*
  const activeButton = document.querySelector(`#${blockName}-active`) as HTMLElement;
  if (activeButton) {
    disable.removeAttribute('id');
  }
  buttonElement.setAttribute('id', `${blockName}-active`);
  // buttonElement.id = `${blockName}-active`;
  */
}
