//--|🠊 loading-article/LoadingFunctions.ts 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-10 · Copied from UpdatesFunctions.ts: one article per slide, each shade found and swapped on its own 🠈|--\\
//--|🠋 Article Colors Toggle 🠋|--\\
function toggleColors(tint: string): void {
  const articleDark = document.querySelector('#components-main .loading-main_shade-dark article[class*="_loading-default"]') as HTMLElement;
  const articleLight = document.querySelector('#components-main .loading-main_shade-light article[class*="_loading-default"]') as HTMLElement;

  let prevDarkClass: string = articleDark.classList[1] as string; //--|🠈 Example: 'dar_mon_opa' 🠈|--\\
  let prevLightClass: string = articleLight.classList[1] as string; //--|🠈 Example: 'lig_mon_opa' 🠈|--\\

  let nextDarkClass: string = `${prevDarkClass.split('_')[0]}_${tint}_${prevDarkClass.split('_')[2]}`; //--|🠈 Keeps the shade and clarity, swaps the color: 'dar_red_opa' 🠈|--\\
  let nextLightClass: string = `${prevLightClass.split('_')[0]}_${tint}_${prevLightClass.split('_')[2]}`; //--|🠈 Keeps the shade and clarity, swaps the color: 'lig_red_opa' 🠈|--\\

  articleDark.classList.replace(prevDarkClass, nextDarkClass);
  articleLight.classList.replace(prevLightClass, nextLightClass);
}
export default toggleColors;
