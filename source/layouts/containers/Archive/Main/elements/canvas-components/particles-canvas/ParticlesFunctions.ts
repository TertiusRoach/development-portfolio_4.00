//--|🠊 particles-canvas/ParticlesFunctions.ts 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-22 · Copied from SpotlightFunctions.ts; the class is shade_color, so the slots are [0] and [1] 🠈|--\\
//--|🠋 Colour Switching 🠋|--\\
export const switchColors = (choice: string, labelName: 'particles'): void => {
  const colorMap: Record<string, string> = {
    '(mono)': 'mon',
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(purple)': 'pur',
    '(orange)': 'ora',
    '(pink)': 'pin',
    '(yellow)': 'yel',
    '(brown)': 'bro',
    '(turquoise)': 'tur',
  };

  updateCanvases(colorMap[choice], 1, labelName); //--|🠈 The {select} picks the colour, this swaps it into every <CanvasParticles> on that page 🠈|--\\
};
//--|🠋 Shade Switching 🠋|--\\
export const switchShades = (choice: string, labelName: 'particles'): void => {
  const shadeMap: Record<string, string> = {
    '~dark~': 'dar',
    '~light~': 'lig',
  };

  updateCanvases(shadeMap[choice], 0, labelName); //--|🠈 The {select} picks the shade, this swaps it into every <CanvasParticles> on that page 🠈|--\\
};
let updateCanvases = (value: string, slot: 0 | 1, labelName: 'particles') => {
  //--|🠊 shade_color: slot 0 is the shade, slot 1 the colour 🠈|--\\
  const archiveCanvases = document.querySelectorAll(
    `#components-main .${labelName}-canvas canvas[class*="_canvas-${labelName}"]`,
  ) as NodeListOf<HTMLCanvasElement>;

  for (let i = 0; i < archiveCanvases.length; i++) {
    let prevClass = archiveCanvases[i].classList[1] as string;
    let nextClass: string;
    switch (slot) {
      case 0:
        nextClass = `${value}_${prevClass.split('_')[1]}`;
        break;
      case 1:
        nextClass = `${prevClass.split('_')[0]}_${value}`;
        break;
    }

    archiveCanvases[i].classList.replace(prevClass, nextClass);
  }
};
