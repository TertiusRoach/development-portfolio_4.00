import getIdentification from '../getIdentification';
//--|🠋 utilities/showAside.ts 🠋|--//
export default function toggleAside(containerElement: 'index-leftbar' | 'index-rightbar' | string) {
  const aside = document.querySelector(`aside#${containerElement}`) as HTMLElement;
  const header = document.querySelector(`#${getIdentification()}-header`) as HTMLElement;
  const main = document.querySelector(`#${getIdentification()}-main section`) as HTMLElement;
  const footer = document.querySelector(`#${getIdentification()}-footer`) as HTMLElement;

  console.log(containerElement);
  if (aside) {
    switch (aside.classList[1]) {
      case 'collapsed':
        aside.style.display = 'grid';
        aside.classList.add('blocked');
        aside.classList.add('expanded');
        setTimeout(() => {
          aside.classList.remove('blocked');
          aside.classList.remove('collapsed');
        }, 1000);

        if (main) {
          main.classList.add('blurred');
        }
        if (header) {
          header.classList.add('blurred');
        }
        if (footer) {
          footer.classList.add('blurred');
        }
        break;
      case 'expanded':
        aside.classList.add('blocked');
        aside.classList.add('collapsed');
        aside.classList.remove('expanded');
        setTimeout(() => {
          aside.style.display = 'none';
          aside.classList.remove('blocked');
        }, 1000);

        if (main) {
          main.classList.remove('blurred');
        }
        if (header) {
          header.classList.remove('blurred');
        }
        if (footer) {
          footer.classList.remove('blurred');
        }
        break;
      default:
        alert(`//--|🠊 showAside(): Cannot Find .${aside.classList[1]} 🠈|--//`);
        return;
    }
  }
}
