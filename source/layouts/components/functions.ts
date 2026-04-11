//--|🠊 source/layouts/components/functions.ts 🠈|--\\
export function stripBrackets(thisText: string, wrapType: '[]' | '<>' | '()' | '{}' | '--' | '~~'): string {
  switch (wrapType) {
    case '[]':
      //--|🠊 pageName 🠈|--\\
      return thisText.replace(/[\[\]]/g, '');
    case '<>':
      //--|🠊 blockName & style.size 🠈|--\\
      return thisText.replace(/[<>]/g, '');
    case '()':
      //--|🠊 roleName, style.color & style.role 🠈|--\\
      return thisText.replace(/[()]/g, '');
    case '~~':
      //--|🠊 style.shade 🠈|--\\
      return thisText.replace(/[~~]/g, '');
    case '{}':
      //--|🠊 style.type 🠈|--\\
      return thisText.replace(/[{}]/g, '');
    case '--':
      //--|🠊 style.view 🠈|--\\
      return thisText.replace(/[--]/g, '');
  }
}
