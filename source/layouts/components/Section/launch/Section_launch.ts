//--|🠊 Section_launch.ts 🠈|--//
export function animateGrid(
  action: 'highlight' | 'downplay',
  division: 'overtime' | 'ticketing' | 'hyperlink',
  pageName: 'landing' | string
) {
  const element = document.querySelector(`#${pageName}-${division}`) as HTMLElement;
  switch (action) {
    case 'highlight':
      if (element.classList.contains('downplay')) {
        element.classList.remove('downplay'); //--|🠈 Remove '.downplay' 🠈|--//
        element.classList.toggle('highlight'); //--|🠈 Toggle '.highlight' 🠈|--//
      }
      break;
    case 'downplay':
      if (element.classList.contains('highlight')) {
        element.classList.remove('highlight'); //--|🠈 Remove '.highlight' 🠈|--//
        element.classList.toggle('downplay'); //--|🠈 Toggle '.downplay' 🠈|--//
      }
      break;
  }
}
