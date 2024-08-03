//--|🠋 utilities/scrollMain.ts 🠋|--//
export default function scrollMain(
  container: HTMLElement,
  button: HTMLButtonElement,
  blockName: '<header>' | '<main>' | '<footer>' | string
) {
  let scrollTag: string | undefined;
  let scrollLabel: string | undefined;
  let scrollPixels: { className: string; scrollAmount: number } | undefined;
  switch (blockName) {
    case '<header>':
    case '<footer>':
      scrollLabel = button.id.split('-')[1];
      scrollTag = container.tagName.toLowerCase();
      break;
    case '<main>':
      scrollTag = container.tagName.toLowerCase();
      scrollLabel = button.className.split(' ')[0].split('-')[1];
      break;
    default:
      console.warn('//--|🠊 Unsupported blockName 🠈|--//');
      break;
  }
  scrollPixels = pixelAmount(container).find((item) => item.className === scrollLabel);
  if (scrollPixels) {
    return {
      scrollTag: scrollTag,
      scrollTop: scrollPixels.scrollAmount,
    };
  }
}

function pixelAmount(container: HTMLElement): { className: string; scrollAmount: number }[] {
  let cumulativeHeight = 0;
  const children = Array.from(container.children) as HTMLElement[];
  const scrollAmounts: { className: string; scrollAmount: number }[] = [];

  children.forEach((child) => {
    scrollAmounts.push({
      className: child.className.split('-')[1], // Assuming className format includes the section name
      scrollAmount: cumulativeHeight,
    });
    cumulativeHeight += child.offsetHeight;
  });
  return scrollAmounts;
}
