//--|🠊 Main/ArchiveFunctions.ts 🠈|--\\
function startingPreview(
  element:
    | '(article)'
    | '(aside)'
    | '(button)'
    | '(division)'
    | '(figure)'
    | '(form)'
    | '(label)'
    | '(menu)'
    | '(navigation)'
    | '(section)'
    | '(table)'
    | '(time)',
  preview: number,
): number {
  switch (element) {
    case '(article)':
      return 1;
    case '(aside)':
      return 2;
    default:
    case '(button)':
      return 3;
    case '(division)':
      return 4;
    case '(figure)':
      return 5;
    case '(form)':
      return 6;
    case '(label)':
      return 7;
    case '(menu)':
      return 8;
    case '(navigation)':
      return 9;
    case '(section)':
      return 10;
    case '(table)':
      return 11;
    case '(time)':
      return 12;
  }
}

export default startingPreview;
