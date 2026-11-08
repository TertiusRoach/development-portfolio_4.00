//--|🠊 layouts/tools/navigation.ts 🠈|--\\
export const loadPages = (pageName: 'overtime' | 'ticketing' | 'hyperlink' | 'components' | 'landing'): void => {
  const prevPage = document.querySelector(`.active`) as HTMLDivElement;
  const nextPage = document.querySelector(`#${pageName}-body`) as HTMLDivElement;

  prevPage.classList.replace('active', 'asleep');
  nextPage.classList.replace('asleep', 'active');
};
