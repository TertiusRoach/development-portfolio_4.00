export namespace UseCapify {
  export function forString(splitAt: '-' | ' ', text: String) {
    switch (splitAt) {
      case '-':
        let splitHyphen = text.split('-');
        if (splitHyphen.length === 2) {
          let hyphenFirst: String = `${splitHyphen[0].charAt(0).toUpperCase() + splitHyphen[0].slice(1)}`;
          let hyphenSecond: String = `${splitHyphen[1].charAt(0).toUpperCase() + splitHyphen[1].slice(1)}`;
          return `${hyphenFirst} ${hyphenSecond}`;
        } else {
          return `${splitHyphen[0].charAt(0).toUpperCase() + splitHyphen[0].slice(1)}`;
        }
      case ' ':
        let splitSpace = text.split(' ');
        if (splitSpace.length > 1) {
          let spaceFirst: String = `${splitSpace[0].charAt(0).toUpperCase() + splitSpace[0].slice(1)}`;
          let spaceSecond: String = `${splitSpace[1].charAt(0).toUpperCase() + splitSpace[1].slice(1)}`;
          return `${spaceFirst} ${spaceSecond}`;
        } else {
          return `${splitSpace[0].charAt(0).toUpperCase() + splitSpace[0].slice(1)}`;
        }
    }
  }
}
