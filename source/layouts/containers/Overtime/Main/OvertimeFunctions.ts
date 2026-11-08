//--|🠊 Main/OvertimeFunctions.ts 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-08 12:54 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { arabicToRoman } from '../../../tools/conversions';

//--|🠊 AI Code: Review Please 2026-11-08 12:54 🠈|--\\
export function showSlides(pageName: 'overtime', showSlide: 1 | 2 | 3): void {
  const orientation: string = 'horizontal';
  const showingFullscreen = document.querySelector(
    `#${pageName}-main div[class*="slides-main_fullscreen"] li[class*="fullscreen-${orientation}"]`,
  ) as HTMLLIElement | null;

  switch (!showingFullscreen) {
    case true:
      return; //--|🠈 <main> isn't on the page yet, so there's nothing to move 🠈|--\\
    case false:
      let prevSlide = showingFullscreen?.classList[0] as string;
      let nextSlide = `fullscreen-${orientation}_${arabicToRoman(showSlide)}` as string;
      showingFullscreen?.classList.replace(prevSlide, nextSlide); //--|🠈 Division.fullscreen.scss slides it with translateX 🠈|--\\
      return;
  }
}
