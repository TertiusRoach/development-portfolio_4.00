//--|🠋 utilities/getScroll.ts 🠋|--//
export default function getScroll(container: HTMLElement, button: HTMLButtonElement) {
  let scrollTag: string | undefined;
  let scrollLabel: string | undefined;
  let scrollPixels: { className: string; scrollAmount: number } | undefined;

  scrollLabel = button.id.split('-')[1];
  scrollTag = container.tagName.toLowerCase();
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
