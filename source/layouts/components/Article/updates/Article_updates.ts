//--|🠊 Article_updates.ts 🠈|--\\
//--|🠋 Configure Container 🠋|--\\
type StyleProps = {
  shade: '~dark~' | '~light~';
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)';
};
export const createClass = (style: StyleProps): string => {
  //--|🠊 Class Build for <ArticleUpdates> 🠈|--\\
  const colorMap: Record<string, string> = {
    //--|🠊 Color Abbr 🠈|--\\
    '(mono)': 'mon',
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(yellow)': 'yel',
    '(purple)': 'pur',
    '(orange)': 'ora',
    '(pink)': 'pin',
    '(brown)': 'bro',
    '(turquoise)': 'tur',
  };
  const shadeMap: Record<string, string> = {
    //--|🠊 Shade Abbr 🠈|--\\
    '~dark~': 'dar',
    '~light~': 'lig',
  };
  return `${shadeMap[style.shade]}_${colorMap[style.color]}`;
};
