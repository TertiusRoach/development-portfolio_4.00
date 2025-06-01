//--|🠊 Menu_overtime.ts 🠈|--//
export function stripBrackets(blockName: string, stripType: '<>' | '()'): string {
  switch (stripType) {
    case '<>':
      return blockName.replace(/[<>]/g, '');
    case '()':
      return blockName.replace(/[()]/g, '');
  }
}
