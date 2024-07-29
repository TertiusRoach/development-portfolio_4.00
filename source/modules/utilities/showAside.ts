import getIdentification from './getIdentification';
//--|🠋 utilities/showAside.ts 🠋|--//
export default function showAside(containerElement: 'leftbar' | 'rightbar' | string) {
  const pageName: String = getIdentification();
  const element = document.querySelector(`#${containerElement}`) as HTMLElement;
  // console.log(element.split(' ')[0]);
  //--|🠋 Safety Check 🠈|--//
  if (!element.className.includes('blocked')) {
    if (element) {
      let status = element.className.split(' ').pop() as string;
      switch (status) {
        case 'expanded':
          element.classList.add('blocked');
          element.classList.add('expanded');

          setTimeout(() => {
            element.classList.remove('blocked');
            element.style.display = 'none';
            element.classList.remove('expanded');
          }, 1000);
          break;
        case 'collapsed':
          // element.style.display = 'grid';
          element.classList.add('blocked');
          element.classList.add('expanded');

          setTimeout(() => {
            element.classList.remove('blocked');
            element.classList.remove('collapsed');
          }, 1000);
          break;
        default:
          alert('ERROR!');
      }
    } else {
      console.error(`No block with an ID of '#${containerElement}' found.`);
      return;
    }
  }
  /*

  */
}
