import getIdentification from './getIdentification';
//--|🠋 utilities/showSection.ts 🠋|--//
export default function showSection(blockName: '*-overlay' | String) {
  const element = document.getElementById(`${blockName}`) as HTMLElement;
  const targetElement = document.querySelector('section[class*="overlay"]') as HTMLElement;
  let safety: boolean = element.className.includes('blocked');
  if (!element) {
    console.error('Element with ID "index-overlay" not found.');
    return;
  }
  if (!safety) {
    switch (targetElement.classList[1]) {
      case 'visible':
        targetElement.classList.add('blocked');
        targetElement.classList.toggle('hidden');

        setTimeout(() => {
          targetElement.classList.remove('blocked');
          targetElement.classList.remove('visible');
          targetElement.style.display = 'none';
        }, 1000);
        break;
      case 'hidden':
        targetElement.style.display = 'grid';
        targetElement.classList.add('blocked');
        targetElement.classList.toggle('visible');

        setTimeout(() => {
          targetElement.classList.remove('blocked');
          targetElement.classList.remove('hidden');
        }, 1000);
        break;
      default:
        alert('ERROR!');

        // console.log(targetElement);
        // console.error(`Element with ID "${pageName}-${blockName}" not found.`);
        return;
    }
    /*

    */
  }
}
