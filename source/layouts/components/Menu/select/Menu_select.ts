//--|🠊 Menu_select.ts 🠈|--\\

//--|🠋 Functions 🠋|--\\
import { abbrView, abbrShade, abbrColor } from '../../components';
import { stripBrackets, arabicToRoman, romanToArabic } from '../../../../scripts';
/*--|🠋

🠉|--*/
interface StyleProps {
  shade: '~dark~' | '~light~';
  image: string | Array<string>;
  color: '(red)' | '(green)' | '(blue)' | '(mono)';
  size: '<h1>' | '<h4>' | '<p>' | Array<'<h1>' | '<h4>' | '<p>'>;
  view: 'top-cen' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-cen';
  align: '-top-' | '-rig-' | '-mid-' | '-cen-' | '-bot-' | '-lef-';
}
export function createClass(axis: '[x]' | '[y]', style: StyleProps): string {
  //--|🠊 Class Build for <MenuSelect> 🠈|--\\
  const viewClass: Record<StyleProps['view'], Record<'[x]' | '[y]', string>> = {
    'bot-cen': { '[x]': `bot_${stripBrackets(style.align, '--')}`, '[y]': `rig_${stripBrackets(style.align, '--')}` },
    'top-cen': { '[x]': `top_${stripBrackets(style.align, '--')}`, '[y]': `lef_${stripBrackets(style.align, '--')}` },
    'mid-cen': { '[x]': `${stripBrackets(style.align, '--')}_cen`, '[y]': `${stripBrackets(style.align, '--')}_mid` },
    'mid-lef': { '[x]': `top_${stripBrackets(style.align, '--')}`, '[y]': `lef_${stripBrackets(style.align, '--')}` },
    'mid-rig': { '[x]': `bot_${stripBrackets(style.align, '--')}`, '[y]': `rig_${stripBrackets(style.align, '--')}` },
  };

  return `${viewClass[style.view][axis]}_${abbrShade(style.shade)}_${abbrColor(style.color)}`;
}
/*
export function markCarousel(
  pageName: string,
  blockName: string,
  labelName: string,
  axisStyle: '[x]' | '[y]',
  showCases: number,
) {

  switch (axisStyle) {
    case '[x]':
      break;
    case '[y]':
      const verticalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
      ) as HTMLElement;
      if (verticalCarousel !== null) {
        const verticalController = document.querySelector(
          `#${pageName}-${blockName} menu[class*="${labelName}-${blockName}_select-default"] ol[class="vert-Y-select"] li[class*="showing"]`,
        ) as HTMLElement;
        let slideShow: HTMLElement;
        let slideCount = Array.from(verticalController.childNodes) as HTMLElement[];
        let slideMark = romanToArabic(verticalCarousel.classList[0].split('_')[1]) as number;

        if (!slideCount.some((node) => node.classList.contains('downplay'))) {
          setTimeout(() => {
            if (showCases === 0) showCases = 1;

            slideShow = verticalController.childNodes[showCases - 1] as HTMLElement;
            var chainName = slideShow.classList[0].split('-')[0] as string;

            slideShow.classList.add('downplay');
            slideShow.classList.remove('highlight');

            selectCarousel(pageName, blockName, labelName, chainName, axisStyle);
          }, 125);
        } else {
          slideShow = verticalController.childNodes[slideMark - 1] as HTMLElement;
          var slideHide = slideCount.find((node) => node.classList.contains('downplay')) as HTMLElement;

          slideHide.classList.add('highlight');
          slideHide.classList.remove('downplay');

          slideShow.classList.add('downplay');
          slideShow.classList.remove('highlight');
        }
      }
      break;
  }
}
export function selectCarousel(
  pageName: string,
  blockName: string,
  labelName: string,
  chainName: string,
  axisStyle: '[x]' | '[y]',
): number {
  let prevView: string;
  let nextView: string;
  let returnPreview: number = 0;
  let selectCarousel: string = '';
  switch (axisStyle) {
    case '[x]':
      break;
    case '[y]':
      const verticalCarousel = document.querySelector(
        `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
      ) as HTMLElement;

      if (verticalCarousel !== null) {
        const verticalPreview = verticalCarousel.querySelector(`div[class="${labelName}-main_container"]`) as HTMLElement;
        const verticalController = document.querySelector(
          `#${pageName}-${blockName} menu[class*="${blockName}"] ol[class="vert-Y-select"] li[class*="showing-vertical"]`,
        ) as HTMLElement;
        for (let i = 0; i < verticalPreview.childElementCount; i++) {
          let viewPage = verticalPreview.childNodes[i] as HTMLElement;
          if (viewPage.classList[0].includes(chainName)) {
            selectCarousel = arabicToRoman(i + 1) as string;

            verticalController.classList.remove(verticalController.classList[0]);
            verticalController.classList.add(`showing-vertical_${selectCarousel}`);

            returnPreview = i + 1;
            break;
          }
        }
        prevView = verticalCarousel.classList[0] as string;
        nextView = `carousel-vertical_${selectCarousel}` as string;

        if (prevView !== nextView) {
          verticalCarousel.classList.add(nextView);
          verticalCarousel.classList.remove(prevView);
        }
      }
      break;
  }
  return returnPreview as number;
}
*/
