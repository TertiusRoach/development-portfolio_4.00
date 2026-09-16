//--|🠊 Division_conveyor.ts 🠈|--\\
interface ChainedElements {
  carousel: HTMLDivElement | null;
  container: HTMLDivElement | null;
}
export function findTags(pageName: string, blockName: string, labelName: string): ChainedElements {
  return {
    carousel: document.querySelector(`#${pageName}-${blockName} .${labelName}-${blockName}_carousel-default`),
    container: document.querySelector(`#${pageName}-${blockName} div[class="${labelName}-${blockName}_container"]`),
  };
}
