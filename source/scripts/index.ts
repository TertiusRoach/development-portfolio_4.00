// index.ts
export function getIdentification() {
  const hyperlink: String = window.location.href;
  const identification: String | undefined = hyperlink?.split('/').pop()?.split('.')[0];
  if (identification === '' || undefined || null) {
    return 'index';
  } else {
    return hyperlink.split('/').pop()?.split('.')[0] as String;
  }
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
