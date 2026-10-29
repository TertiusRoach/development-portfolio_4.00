//--|🠊 Division_colourize.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
//--|🠋 Button Colors Toggle 🠋|--\\
function toggleColors(element: HTMLElement, toggles: Array<HTMLLabelElement>): string {
  const tintMap: Record<string, string> = {
    //--|🠊 Mono: Dark 🠈|--\\
    'false-false-false-false': 'mono',
    'false-true-false-false': 'red',
    'false-false-true-false': 'gre',
    'false-false-false-true': 'blu',
    'false-true-true-false': 'ora',
    'false-true-false-true': 'pin',
    'false-false-true-true': 'tur',
    'false-true-true-true': 'bro',

    //--|🠊 Mono: Light 🠈|--\\
    'true-false-false-false': 'mono',
    'true-true-false-false': 'red',
    'true-false-true-false': 'gre',
    'true-false-false-true': 'blu',
    'true-true-true-false': 'yel',
    'true-true-false-true': 'pur',
    'true-false-true-true': 'tur',
    'true-true-true-true': 'mono',
  };
  console.log(toggles);
  /*
  let key: string = `${mono}-${red}-${green}-${blue}`;
  let tint: string = tintMap[key] ?? 'mon';

  return tint;
  */
  return '';
}
export default toggleColors;
