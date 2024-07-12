// index.ts
export function getIdentification(): String {
  const hyperlink: String = window.location.href;
  const identification: String | undefined = hyperlink?.split('/').pop()?.split('.')[0];
  if (identification === '' || undefined || null) {
    return 'index';
  } else {
    return hyperlink.split('/').pop()?.split('.')[0] as String;
  }
}

export function getOrientation(): String {
  const orientation = window.screen.orientation.type;

  if (!orientation.includes('landscape')) {
    return 'desktop-landscape' as String;
  } else if (!orientation.includes('portrait')) {
    return 'mobile-portrait' as String;
  } else {
    return 'unknown-orientation' as String;
  }
}
export function getResolution(): String {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const resolution = `${width}x${height}`;

  return resolution as String;
}
