//--|🠊 landing.ts 🠈|--//
export function stripBrackets(thisText: string, blockType: '[]' | '<>' | '()'): string {
  switch (blockType) {
    case '[]':
      return thisText.replace(/[\[\]]/g, '');
    case '<>':
      return thisText.replace(/[<>]/g, '');
    case '()':
      return thisText.replace(/[()]/g, '');
  }
}
