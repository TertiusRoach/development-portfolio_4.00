//--|🠊 Menu_landing.ts 🠈|--//
export function stripBrackets(blockName: string, stripType: '<>' | '()'): string {
  switch (stripType) {
    case '<>':
      return blockName.replace(/[<>]/g, '');
    case '()':
      return blockName.replace(/[()]/g, '');
  }
}
