//--|🠊 checkbox-label/CheckboxFunctions.ts 🠈|--\\
//--|🠋 Partly Ticked 🠋|--\\
export function startMixed(color: string): boolean {
  //--|🠊 AI Code: Review Please 2026-10-29 15:45 · The right column (orange to turquoise) starts partly ticked, the left starts empty 🠈|--\\
  const mixedList: Array<string> = ['(orange)', '(pink)', '(yellow)', '(brown)', '(turquoise)'];

  return mixedList.includes(color);
}
export default startMixed;
