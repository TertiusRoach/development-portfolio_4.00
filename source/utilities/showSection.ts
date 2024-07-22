import getIdentification from './getIdentification';
//--|🠋 utilities/showSection.ts 🠋|--//
export default function showSection(pageName: string, blockName: 'overlay' | String) {
  const element = document.getElementById('index-overlay') as HTMLElement;
  if (!element) {
    console.error('Element with ID "index-overlay" not found.');
    return;
  }

  let safety: boolean = element.className.includes('blocked');
  let status = element.className.split(' ').pop() as string;

  if (!safety) {
    const targetElement = document.getElementById(`${pageName}-${blockName}`);
    if (!targetElement) {
      console.error(`Element with ID "${pageName}-${blockName}" not found.`);
      return;
    }

    switch (status) {
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
    }
  }
}
