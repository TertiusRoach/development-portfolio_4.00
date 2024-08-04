import getIdentification from './getIdentification';
//--|🠋 utilities/showSection.ts 🠋|--//
export function toggleSection(button: HTMLElement) {
  const section = document.querySelector(`section[class*='${button.className.split('-')[0]}']`) as HTMLElement;
  const main = document.querySelector(`#${getIdentification()}-main section`) as HTMLElement;
  const header = document.querySelector(`#${getIdentification()}-header`) as HTMLElement;
  const footer = document.querySelector(`#${getIdentification()}-footer`) as HTMLElement;
  if (section) {
    switch (section.classList[1]) {
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

        section.style.display = 'grid';
        section.classList.add('blocked');
        section.classList.add('visible');
        setTimeout(() => {
          section.classList.remove('hidden');
          section.classList.remove('blocked');
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

        section.classList.add('hidden');
        section.classList.add('blocked');
        section.classList.remove('visible');
        setTimeout(() => {
          section.style.display = 'none';
          section.classList.remove('blocked');
        }, 1000);
        break;
      default:
        alert(`//--|🠊 showSection(): Cannot Find .${section.classList[1]} 🠈|--//`);
        return;
    }
  }
}
