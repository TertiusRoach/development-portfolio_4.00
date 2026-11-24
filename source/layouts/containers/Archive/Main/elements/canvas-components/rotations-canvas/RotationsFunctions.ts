//--|🠊 rotations-canvas/RotationsFunctions.ts 🠈|--\\
//--|🠊 Copied from MeteoritesFunctions.ts; the class is shade_color_clarity, so the slots are [0], [1] and [2] 🠈|--\\
//--|🠋 Colour Switching 🠋|--\\
export const switchColors = (choice: string, labelName: 'rotations'): void => {
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

  updateCanvases(colorMap[choice], 1, labelName); //--|🠈 The {select} picks the colour, this swaps it into every <CanvasRotations> on that page 🠈|--\\
};
//--|🠋 Shade Switching 🠋|--\\
export const switchShades = (choice: string, labelName: 'rotations'): void => {
  const shadeMap: Record<string, string> = {
    '~dark~': 'dar',
    '~light~': 'lig',
  };

  updateCanvases(shadeMap[choice], 0, labelName); //--|🠈 The {select} picks the shade, this swaps it into every <CanvasRotations> on that page 🠈|--\\
};
//--|🠋 Clarity Toggle 🠋|--\\
//--|🠊 Copied from DefaultFunctions.ts toggleClarity(), for the third slot 🠈|--\\
export const toggleClarity = (element: HTMLFieldSetElement, labelName: 'rotations'): void => {
  //--|🠊 The checked radio's value picks the clarity 🠈|--\\
  const checkedInput = element.querySelector('input:checked') as HTMLInputElement;

  let clarity: string = '';
  switch (checkedInput.value) {
    case 'Lucid':
      clarity = 'luc';
      break;
    case 'Opaque':
      clarity = 'opa';
      break;
  }
  updateCanvases(clarity, 2, labelName); //--|🠈 Swaps the clarity into every <CanvasRotations> on that page 🠈|--\\
};
let updateCanvases = (value: string, slot: 0 | 1 | 2, labelName: 'rotations') => {
  //--|🠊 shade_color_clarity: slot 0 is the shade, slot 1 the colour, slot 2 the clarity 🠈|--\\
  const archiveCanvases = document.querySelectorAll(
    `#components-main .${labelName}-canvas canvas[class*="_canvas-${labelName}"]`,
  ) as NodeListOf<HTMLCanvasElement>;

  for (let i = 0; i < archiveCanvases.length; i++) {
    let prevClass = archiveCanvases[i].classList[1] as string;
    let nextClass: string;
    switch (slot) {
      case 0:
        nextClass = `${value}_${prevClass.split('_')[1]}_${prevClass.split('_')[2]}`;
        break;
      case 1:
        nextClass = `${prevClass.split('_')[0]}_${value}_${prevClass.split('_')[2]}`;
        break;
      case 2:
        nextClass = `${prevClass.split('_')[0]}_${prevClass.split('_')[1]}_${value}`;
        break;
    }

    archiveCanvases[i].classList.replace(prevClass, nextClass);
  }
};
