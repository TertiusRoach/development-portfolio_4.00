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

export function getIndex(container: HTMLElement, label: string) {
  const children = container.children as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < children.length; i++) {
    var current = children[i].className.split('-')[1] as string;
    if (label === current) {
      return i as number;
    }
  }
}
export function getScroll(container: HTMLElement, label: string) {
  let children = container.children as HTMLCollectionOf<HTMLElement>;
  let scrolling = {
    above: 0 - container.scrollTop,
    below: 0,
    active: 0,
    adjust: container.scrollTop,
    slot: getIndex(container, label),
  };
  let slot = scrolling.slot as number;

  for (let i = 0; i < children.length; i++) {
    const current = children[i].className.split('-')[1];
    if (slot < i) {
      // Add the offsetHeight of all the elements above the slot.
      scrolling.above += children[i].offsetHeight;
    } else if (slot === i) {
      // Change the value of scrolling.active to the height of this element.
      scrolling.active = children[i].offsetHeight;
    } else if (slot > i) {
      // Add the offsetHeight of all the elements below the slot.
      scrolling.below += children[i].offsetHeight;
    }
  }
  // When the loop is done, return the calculated values
  return {
    above: scrolling.above,
    below: scrolling.below,
    active: scrolling.active,
    adjust: scrolling.adjust,
  };
}
