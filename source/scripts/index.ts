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
  // Reset the scrolling values before each call
  const scrolling = {
    above: 0,
    below: 0,
    active: 0,
    adjust: container.scrollTop,
    slot: getIndex(container, label),
  };

  // Get the index of the target section
  const slot = scrolling.slot as number;

  // Get all child elements of the container
  const children = container.children as HTMLCollectionOf<HTMLElement>;

  // Iterate over each child element to calculate scrolling values
  for (let i = 0; i < children.length; i++) {
    // Extract the section label from the class name of the child element
    const current = children[i].className.split('-')[1];

    // If the current element is the target section, set its height to scrolling.active
    if (i === slot) {
      scrolling.active = children[i].offsetHeight;
    }
    // If the current element is above the target section, add its height to scrolling.above
    else if (i < slot) {
      scrolling.above += children[i].offsetHeight;
    }
    // If the current element is below the target section, add its height to scrolling.below
    else {
      scrolling.below += children[i].offsetHeight;
    }
  }

  // Adjust the above value by subtracting the current scrollTop
  scrolling.above -= container.scrollTop;

  // Return the calculated scroll values
  return {
    above: scrolling.above,
    below: scrolling.below,
    active: scrolling.active,
    adjust: scrolling.adjust,
  };
}
