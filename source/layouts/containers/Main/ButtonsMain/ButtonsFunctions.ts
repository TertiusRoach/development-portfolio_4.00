//--|🠊 ButtonsMain.ts 🠈|--\\
export function toggleAside(
  pageName: string,
  blockName: string,
  blockAction: 'open-dark' | 'close-dark' | 'open-light' | 'close-light',
) {
  const qs = (selector: string) => {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) throw new Error(`Missing element: ${selector}`);
    return el;
  };
  const show = (el: HTMLElement) => {
    el.classList.add('visible');
    el.classList.remove('hidden');
  };
  const hide = (el: HTMLElement) => {
    el.classList.add('hidden');
    el.classList.remove('visible');
  };

  //--|🠊 centerElement contains a .visible className 🠈|--\\
  //--|🠊 rightLight & leftDark contains a .hidden className 🠈|--\\
  const leftDark = qs(`#${pageName}-main .midground .dark-code`);
  const rightLight = qs(`#${pageName}-main .midground .light-code`);
  const centerElement = qs(`#${pageName}-main .midground .size-font`);

  switch (blockAction) {
    case 'open-dark':
      show(leftDark); //--|🠊 Toggle .hidden on leftDark to .visible 🠈|--\\
      hide(centerElement); //--|🠊 Toggle the centerElement from .visible to .hidden 🠈|--\\
      break;
    case 'close-dark':
      hide(leftDark); //--|🠊 Toggle .visible on leftDark to .hidden 🠈|--\\
      show(centerElement); //--|🠊 Toggle .hidden on centerElement to .visible 🠈|--\\
      break;
    case 'open-light':
      show(rightLight); //--|🠊 Toggle .hidden on rightLight to .visible 🠈|--\\
      hide(centerElement); //--|🠊 Toggle the centerElement from .visible to .hidden 🠈|--\\
      break;
    case 'close-light':
      hide(rightLight); //--|🠊 Toggle .visible on rightLight to .hidden 🠈|--\\
      show(centerElement); //--|🠊 Toggle .hidden on centerElement to .visible 🠈|--\\
      break;
    default:
      throw new Error(
        '//--|🠊 ERROR - C:/Develop/development-portfolio_4.00/source/layouts/containers/Main/ButtonsMain/ButtonsMain.tsx 🠈|--//',
      );
  }

  //--|🠊 console.log({ blockName, leftDark, rightLight, centerElement }); 🠈|--\\
}
export function showCode() {
  return `WORKING!`;
}
