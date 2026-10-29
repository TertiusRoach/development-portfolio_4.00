//--|🠊 Division_colourize.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
//--|🠋 Button Colors Toggle 🠋|--\\
function toggleColors(element: HTMLElement): string {
  const toggles: Array<HTMLInputElement> = [
    element.childNodes[0].childNodes[0] as HTMLInputElement,
    element.childNodes[1].childNodes[0] as HTMLInputElement,
    element.childNodes[2].childNodes[0] as HTMLInputElement,
    element.childNodes[3].childNodes[0] as HTMLInputElement,
  ];

  const tintMap: Record<string, string> = {
    //--|🠊 Mono: Dark 🠈|--\\
    'false-false-false-false': 'mon',
    'false-true-false-false': 'red',
    'false-false-true-false': 'gre',
    'false-false-false-true': 'blu',
    'false-true-true-false': 'ora',
    'false-true-false-true': 'pur',
    'false-false-true-true': 'tur',
    'false-true-true-true': 'bro',

    //--|🠊 Mono: Light 🠈|--\\
    'true-false-false-false': 'mon',
    'true-true-false-false': 'pin',
    'true-false-true-false': 'gre',
    'true-false-false-true': 'blu',
    'true-true-true-false': 'yel',
    'true-true-false-true': 'pin',
    'true-false-true-true': 'tur',
    'true-true-true-true': 'mon',
  };

  let monCol: boolean = toggles[0].checked as true | false;
  let redCol: boolean = toggles[1].checked as true | false;
  let greCol: boolean = toggles[2].checked as true | false;
  let bluCol: boolean = toggles[3].checked as true | false;

  let key: string = `${monCol}-${redCol}-${greCol}-${bluCol}`;
  let tint: string = tintMap[key] ?? 'mon';

  return tint;
}
export default toggleColors;
