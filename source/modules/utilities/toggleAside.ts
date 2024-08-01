import getIdentification from './getIdentification';
//--|🠋 utilities/showAside.ts 🠋|--//
export function toggleAside(containerElement: 'index-leftbar' | 'index-rightbar' | string) {
  // const pageName: String = getIdentification();
  const container = document.querySelector(`aside#${containerElement}`) as HTMLElement;
  if (container) {
    switch (container.classList[1]) {
      case 'collapsed':
        break;
      case 'expanded':
        container.classList[1] = 'collapsed';
        break;
    }
  }

  //--|🠋 Safety Check 🠈|--//
  if (!container.className.includes('blocked')) {
    if (container) {
      let status = container.className.split(' ').pop() as string;
      switch (status) {
        case 'collapsed':
          container.classList.add('blocked');
          container.classList.add('expanded');
          setTimeout(() => {
            container.classList.remove('blocked');
            container.classList.remove('collapsed');
          }, 1000);
          break;
        case 'expanded':
          container.classList.add('blocked');
          container.classList.add('expanded');
          setTimeout(() => {
            container.classList.remove('blocked');
            container.style.display = 'none';
            container.classList.remove('expanded');
          }, 1000);
          break;

        default:
          console.log();
          alert(container.id);
      }
    } else {
      console.error(`No block with an ID of '#${containerElement}' found.`);
      return;
    }
  }

  // if (container.className.includes('leftbar') || container.className.includes('rightbar')) {
  // }
  if (container.className.includes('overlay')) {
  }
  // if(container)
  /*

  */
  /*

  */
  /*

  */
}
/*
export function hideAside(containerElement: 'index-leftbar' | 'index-rightbar' | string) {
  // const pageName: String = getIdentification();
  const container = document.querySelector(`aside#${containerElement}`) as HTMLElement;
  if (container) {
    switch (container.classList[1]) {
      case 'collapsed':
        break;
      case 'expanded':
        container.classList[1] = 'collapsed';
        break;
    }
  }

  //--|🠋 Safety Check 🠈|--//
  if (!container.className.includes('blocked')) {
    if (container) {
      let status = container.className.split(' ').pop() as string;
      switch (status) {
        case 'expanded':
          container.classList.add('blocked');
          container.classList.add('expanded');
          setTimeout(() => {
            container.classList.remove('blocked');
            container.style.display = 'none';
            container.classList.remove('expanded');
          }, 1000);
          break;
        case 'collapsed':
          container.classList.add('blocked');
          container.classList.add('expanded');
          setTimeout(() => {
            container.classList.remove('blocked');
            container.classList.remove('collapsed');
          }, 1000);
          break;
        default:
          console.log();
          alert(container.id);
      }
    } else {
      console.error(`No block with an ID of '#${containerElement}' found.`);
      return;
    }
  }

  // if (container.className.includes('leftbar') || container.className.includes('rightbar')) {
  // }
  if (container.className.includes('overlay')) {
  }
  // if(container)
  // export default function showAside(enable: HTMLButtonElement, disable: HTMLButtonElement) {
  //   // enable: HTMLButtonElement, disable: HTMLButtonElement
  // }
}
*/
