//--|🠊 SelectCarousel.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../../../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\
import markMenu from '../../Menu_carousel';
import selectCarousel from './Select_carousel';
import { romanToArabic } from '../../../../../components';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    axis: '[x]' | '[y]';
    type: '{select}' | string;
    shade: '~dark~' | '~medium~' | '~light~';
    view: '-top-' | '-rig-' | '-bot-' | '-lef-' | string;
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    paths: Array<string | HTMLElement>;
  };

  onClick?: () => number;
}

const SelectCarousel: React.FC<TheseProps> = ({ info, style, cases }) => {
  useEffect(() => {
    let pageName: string = info.pageName;
    let blockName: string = info.blockName;
    let labelName: string = info.labelName;
    /*--|🠋

    🠉|--*/
    //--|🠋|==============================================|🠋|--\\
    //--|🠊 See if the amount of children in <CarouselDivision>
    //--|🠊 Matches the amount of <button> tags in <CarouselMenu>
    //--|🠉|==============================================|🠉|--\\
    const menuLocate: string = `#${pageName}-${blockName} menu[class*="carousel"] li[class*="_sel"] ol`;
    const menuElement = document.querySelector(menuLocate) as HTMLElement;
    const carouselLocate: string = `#${pageName}-main div[class*="carousel"] ol li div[class*="container"]`;
    const carouselElement = document.querySelector(carouselLocate) as HTMLElement;
    const selectYSection = carouselElement.childNodes[0].childNodes as NodeListOf<HTMLElement>;

    if (carouselElement.childElementCount === menuElement.childElementCount) {
      for (let i = 0; i < carouselElement.childElementCount; i++) {
        let carMenu = menuElement.childNodes[i] as HTMLElement; //--|🠈 Match carousel identifiers to <li> items inside <menu> 🠈|--\\
        let carSection = carouselElement.childNodes[i] as HTMLElement; //--|🠈 Emphasize with ".visible" or ".hidden" 🠈|--\\

        var carContainer = carSection.parentElement?.parentElement as HTMLElement; //--|🠈 Retrieve the Roman String in the component container of the Carousel 🠈|--\\
        var carRoman = carContainer.classList[0] as string;
        if (romanToArabic(carRoman) === i + 1) {
          carSection.classList.add('visible');
          carSection.classList.remove('hidden');
          carMenu.className = `${carSection.classList[0]} highlight`;
        } else {
          carSection.classList.add('hidden');
          carSection.classList.remove('visible');
          carMenu.className = `${carSection.classList[0]} downplay`;
        }
      }
    }
  }, [info.pageName, info.blockName, info.labelName]);
  return (
    <>
      {cases.paths.map((path, index) => (
        <li key={index}>
          <ButtonRouting
            style={{
              size: '<h1>',
              view: 'mid-lef', // You could also dynamically use style.view here!
              color: '(mono)', // You could use style.color here
              shade: '~light~', // You could use style.shade here
              type: '{button}',
              image: path as string, // 👈 This puts the current image link here!
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            onClick={(eventInfo: React.MouseEvent<HTMLElement>): number => {
              selectCarousel(info.pageName, info.blockName, eventInfo);
              return 0;
            }}
          />
        </li>
      ))}
    </>
  );
};

export default SelectCarousel;
