//--|🠊 Button_grade.ts 🠈|--//
export function scaleImage(fontSize: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>') {
  const sizeMap: Record<typeof fontSize, number> = {
    '<p>': 2,
    '<h6>': 3,
    '<h5>': 4,
    '<h4>': 5,
    '<h3>': 6,
    '<h2>': 7,
    '<h1>': 8,
  };

  return sizeMap[fontSize];
}
