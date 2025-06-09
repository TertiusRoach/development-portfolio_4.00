//--|🠊 buttons.ts 🠈|--//
export function stripBrackets(thisText: string, wrapType: '[]' | '<>' | '()'): string {
  switch (wrapType) {
    case '[]': //--|🠊 pageName 🠈|--//
      return thisText.replace(/[\[\]]/g, '');
    case '<>': //--|🠊 blockName 🠈|--//
      return thisText.replace(/[<>]/g, '');
    case '()': //--|🠊 roleName 🠈|--//
      return thisText.replace(/[()]/g, '');
  }
}
