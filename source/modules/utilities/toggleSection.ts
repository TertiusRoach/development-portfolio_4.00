import getIdentification from './getIdentification';
//--|🠋 utilities/showSection.ts 🠋|--//
export function toggleSection(containerElement: 'index-overlay' | string) {
  const overlay = document.querySelector(`section#${containerElement}`) as HTMLElement;
  const header = document.querySelector(`#${getIdentification()}-header`) as HTMLElement;
  const main = document.querySelector(`#${getIdentification()}-main section`) as HTMLElement;
  const footer = document.querySelector(`#${getIdentification()}-footer`) as HTMLElement;
  if (overlay) {
    switch (overlay.classList[1]) {
      case 'hidden':
        setTimeout(() => {
          if (main) {
            main.classList.add('blurred');
          }
          if (header) {
            header.classList.add('blurred');
          }
          if (footer) {
            footer.classList.add('blurred');
          }
        }, 250);

        overlay.style.display = 'grid';
        overlay.classList.add('blocked');
        overlay.classList.add('visible');
        setTimeout(() => {
          overlay.classList.remove('hidden');
          overlay.classList.remove('blocked');
        }, 1000);

        break;
      case 'visible':
        setTimeout(() => {
          if (main) {
            main.classList.remove('blurred');
          }
          if (header) {
            header.classList.remove('blurred');
          }
          if (footer) {
            footer.classList.remove('blurred');
          }
        }, 750);

        overlay.classList.add('hidden');
        overlay.classList.add('blocked');
        overlay.classList.remove('visible');
        setTimeout(() => {
          overlay.style.display = 'none';
          overlay.classList.remove('blocked');
        }, 1000);
        break;
      default:
        alert(`//--|🠊 showSection(): Cannot Find .${overlay.classList[1]} 🠈|--//`);
        return;
    }
  }
}
