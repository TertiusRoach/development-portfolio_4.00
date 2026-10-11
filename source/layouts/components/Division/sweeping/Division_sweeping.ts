//--|🠊 Division_sweeping.ts 🠈|--\\
import { romanToArabic } from '../../../../scripts';

const observers = new WeakMap<HTMLElement, MutationObserver>();
export default function emphasizeParameters(pageName: string, blockName: string, labelName: string, index: number = 0) {
  const selectContainer = document.querySelectorAll(`#${pageName}-${blockName} div[class*="${labelName}-${blockName}_container"]`)[
    index
  ] as HTMLDivElement;
  if (!selectContainer) return;

  const parentWrapper = selectContainer.parentElement as HTMLLIElement;
  const casesShow: number = romanToArabic(parentWrapper.className.split('_').pop());

  switch (observers.has(selectContainer)) {
    case false: {
      for (let i = 0; i < selectContainer.children.length; i++) {
        const element = selectContainer.children[i] as HTMLElement;
        element.classList.add(casesShow === i + 1 ? 'highlight' : 'downplay');
      }

      //--|🠊 One observer per container 🠈|--\\
      const observer = new MutationObserver(() => emphasizeParameters(pageName, blockName, labelName, index));
      observer.observe(parentWrapper, { attributes: true, attributeFilter: ['class'] });
      observers.set(selectContainer, observer);
      break;
    }
    case true: {
      for (let i = 0; i < selectContainer.children.length; i++) {
        const element = selectContainer.children[i] as HTMLElement;
        if (casesShow === i + 1) {
          element.classList.replace('downplay', 'highlight');
        } else {
          element.classList.replace('highlight', 'downplay');
        }
      }
      break;
    }
  }
}
