//--|🠊 Footer_applications.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { romanToArabic, arabicToRoman } from '../../functions';

export function togglePages(pageName: string, viewAction: 'overtime' | 'ticketing' | 'hyperlink' | 'landing' | 'archive') {
  const activePage = document.querySelector(`#${pageName}-body`) as HTMLDivElement;
  const sleepingPage = document.querySelector(`#${viewAction}-body`) as HTMLDivElement;

  console.log(activePage.classList[1], sleepingPage.classList[1]);

  activePage.classList.replace('active', 'asleep');
  sleepingPage.classList.replace('asleep', 'active');
}
