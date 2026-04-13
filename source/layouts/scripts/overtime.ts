//--|🠊 overtime.ts 🠈|--\\
export function stripBrackets(thisText: string, wrapType: '[]' | '<>' | '()' | '~~'): string {
  switch (wrapType) {
    case '[]': //--|🠈 pageName 🠈|--\\
      return thisText.replace(/[\[\]]/g, '');
    case '<>': //--|🠈 blockName 🠈|--\\
      return thisText.replace(/[<>]/g, '');
    case '()': //--|🠈 roleName 🠈|--\\
      return thisText.replace(/[()]/g, '');
    case '~~': //--|🠈 style.shade 🠈|--\\
      return thisText.replace(/[~~]/g, '');
  }
}

export function openLeftbar(pageName: string, blockName: string) {
  console.log(document.querySelector(`#${pageName}-leftbar`));
}
