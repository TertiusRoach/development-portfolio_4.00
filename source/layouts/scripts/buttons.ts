//--|🠊 buttons.ts 🠈|--//
export function stripBrackets(thisText: string, wrapType: '[]' | '<>' | '()' | '{}' | '--' | '~~'): string {
  switch (wrapType) {
    case '[]':
      return thisText.replace(/[\[\]]/g, '');
    case '<>':
      return thisText.replace(/[<>]/g, '');
    case '()':
      return thisText.replace(/[()]/g, '');
    case '{}':
      return thisText.replace(/[{}]/g, '');
    case '--':
      return thisText.replace(/[--]/g, '');
    case '~~':
      return thisText.replace(/[~~]/g, '');
  }
}
