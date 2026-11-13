export namespace UseValufy {
  export function forString(text: String) {
    const arrayString = text.split(' ');
    let arrayTotal: Number = arrayString.length;
    switch (arrayTotal) {
      case 1:
        return `${arrayString[0].toLowerCase()}`;
      case 2:
        return `${arrayString[0].toLowerCase()}-${arrayString[1].toLowerCase()}`;
      case 3:
        return `${arrayString[0].toLowerCase()}-${arrayString[1].toLowerCase()}-${arrayString[2].toLowerCase()}`;
      case 4:
        return `${arrayString[0].toLowerCase()}-${arrayString[1].toLowerCase()}-${arrayString[2].toLowerCase()}-${arrayString[3].toLowerCase()}`;
      case 5:
        return `${arrayString[0].toLowerCase()}-${arrayString[1].toLowerCase()}-${arrayString[2].toLowerCase()}-${arrayString[3].toLowerCase()}-${arrayString[4].toLowerCase()}`;
    }
  }
}
