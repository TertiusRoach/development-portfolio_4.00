// index.ts
export function getIdentification() {
  const hyperlink = window.location.href as String;

  console.log(hyperlink);
  return window.location.href.split('.html')[0].split('/').pop() as String;
}

export function getOrientation() {
  const orientation = window.screen.orientation.type;

  if (!orientation.includes('landscape')) {
    return 'desktop-landscape' as string;
  } else if (!orientation.includes('portrait')) {
    return 'mobile-portrait' as string;
  } else {
    return 'unknown-orientation' as string;
  }
}
export function getResolution() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const resolution = `${width}x${height}`;

  return resolution as String;
}
