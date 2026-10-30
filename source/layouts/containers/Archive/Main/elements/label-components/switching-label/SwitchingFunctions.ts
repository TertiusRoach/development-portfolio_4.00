//--|🠊 switching-label/SwitchingFunctions.ts 🠈|--\\
//--|🠋 Starting Values 🠋|--\\
export function listHours(): Array<number> {
  //--|🠊 AI Code: Review Please 2026-10-29 15:56 · One per colour, in colour order, so the knobs start spread from 0 to 24 hours 🠈|--\\
  const hoursList: Array<number> = [0, 3, 6, 8, 9.5, 12, 15, 18, 21, 24];

  return hoursList;
}
//--|🠋 Partly Ticked 🠋|--\\
export function startMixed(color: string): boolean {
  //--|🠊 AI Code: Review Please 2026-10-29 15:45 · The right column (orange to turquoise) starts partly ticked, the left starts empty 🠈|--\\
  const mixedList: Array<string> = ['(orange)', '(pink)', '(yellow)', '(brown)', '(turquoise)'];

  return mixedList.includes(color);
}
//--|🠋 Words 🠋|--\\
export function listWords(): Array<string> {
  //--|🠊 AI Code: Review Please 2026-10-30 · One per colour, the three applications first like the old <FieldsetMultiselect> page 🠈|--\\
  const wordsList: Array<string> = ['Track', 'Log', 'Find', 'Day', 'Ticket', 'Link', 'Shift', 'Leave', 'Note', 'Hours'];

  return wordsList;
}
export default listWords;
