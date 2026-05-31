//--|🠊 Menu.swipe.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { markCarousel, swipeCarousel } from './Menu_swipe';
import { romanToArabic, arabicToRoman } from '../../functions';

//--|🠋 Styles 🠋|--\\
import './Menu.swipe.scss';

interface TheseProps {
  style: {
    axis: '[x]' | '[y]';
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    show: number;
    pages: Array<string>;
  };
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}
function MenuAxis({ info, style, cases }: TheseProps) {
  const directory: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid';
  switch (style.axis) {
    case '[x]':
      return (
        <>
          <li className="preview-horizontal">
            <div className="prev-view downplay">
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-icon-',
                  type: '{button}',
                  color: style.color,
                  shade: style.shade,
                  image: `${directory}/caret-left.svg` as string,
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  /* labelName: info.labelName, */
                }}
                onClick={(): void => {
                  swipeCarousel(info.pageName, info.labelName, style.axis, 'view-prev');
                  markCarousel(info.pageName, info.blockName, info.labelName, cases.show, style.axis);
                }}
              />
            </div>
            <div className="next-view downplay">
              <ButtonDefault
                style={{
                  size: '<h3>',
                  view: '-icon-',
                  type: '{button}',
                  color: style.color,
                  shade: style.shade,
                  image: `${directory}/caret-right.svg` as string,
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  /* labelName: info.labelName, */
                }}
                onClick={(): void => {
                  swipeCarousel(info.pageName, info.labelName, style.axis, 'view-next');
                  markCarousel(info.pageName, info.blockName, info.labelName, cases.show, style.axis);
                }}
              />
            </div>
          </li>
          <li className="showing-horizontal_I">
            {cases.pages.map((path, index) => {
              const viewText = String(path);

              if (viewText.includes('_')) {
                const [boldText, italText] = viewText.split('_');
                return (
                  <aside key={index}>
                    <h3 className="display-3">
                      <span>
                        <b>{boldText}</b>
                        <i>{italText}</i>
                      </span>
                    </h3>
                  </aside>
                );
              } else {
                return (
                  <aside key={index}>
                    <h1>
                      <span>{viewText}</span>
                    </h1>
                  </aside>
                );
              }
            })}
          </li>
        </>
      );
    case '[y]':
      return (
        <>
          <li className="showing_I"></li>
          <li className="prev-view">
            <ButtonDefault
              style={{
                size: '<h3>',
                view: '-icon-',
                type: '{button}',
                color: style.color,
                shade: style.shade,
                image: `${directory}/caret-up.svg` as string,
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                /* labelName: info.labelName, */
              }}
              onClick={(): void => {
                swipeCarousel(info.pageName, info.labelName, style.axis, 'view-prev');
                markCarousel(info.pageName, info.blockName, info.labelName, cases.show, style.axis);
              }}
            />
          </li>
          <li className="next-view">
            <ButtonDefault
              style={{
                size: '<h3>',
                view: '-icon-',
                type: '{button}',
                color: style.color,
                shade: style.shade,
                image: `${directory}/caret-down.svg` as string,
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                /* labelName: info.labelName, */
              }}
              onClick={(): void => {
                swipeCarousel(info.pageName, info.labelName, style.axis, 'view-next');
                markCarousel(info.pageName, info.blockName, info.labelName, cases.show, style.axis);
              }}
            />
          </li>
        </>
      );
  }
}

const MenuSwipe: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const axisList: Record<'[x]' | '[y]', 'ul' | 'ol'> = {
    '[x]': 'ul',
    '[y]': 'ol',
  };
  const axisClass: Record<TheseProps['style']['axis'], string> = {
    '[x]': 'hori-X-swipe',
    '[y]': 'vert-Y-swipe',
  };

  useEffect(() => {
    /*--|🠋

  🠉|--*/
    switch (style.axis) {
      case '[y]':
        const verticalCarousel = document.querySelector(
          `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"]`,
        ) as HTMLElement;
        const verticalElements = document.querySelector(
          `#${pageName}-main div[class="${labelName}-main_carousel-default"] ol[class="vert-Y-axis"] li[class*="carousel-vertical"] div[class*="container"]`,
        ) as HTMLElement;
        const verticalController = document.querySelectorAll(
          `#${pageName}-${blockName} menu[class="${labelName}-${blockName}_swipe-default"] ol[class="vert-Y-swipe"] li`,
        ) as NodeListOf<HTMLElement>;

        let prevView = Array.from(verticalController).find((li) => li.classList.contains('prev-view')) as HTMLElement;
        let nextView = Array.from(verticalController).find((li) => li.classList.contains('next-view')) as HTMLElement;

        let slideMark = romanToArabic(verticalCarousel.classList[0].split('_')[1]) as number;
        let slideCount = verticalCarousel.querySelector(`div[class="${labelName}-main_container"]`) as HTMLDivElement;

        let firstChild: string = 'I';
        let showChild: string = arabicToRoman(cases.show);
        let lastChild: string = arabicToRoman(verticalElements.childElementCount);

        verticalCarousel.classList.remove(`carousel-vertical_I`);
        if (`carousel-vertical_${firstChild}` === `carousel-vertical_${showChild}`) {
          //--|🠊 Hide TOP Button 🠈|--\\
          nextView.classList.add('highlight');
          nextView.classList.remove('downplay');

          prevView.classList.add('downplay');
          prevView.classList.remove('highlight');
          verticalCarousel.classList.add(`carousel-vertical_${firstChild}`);
        } else if (`carousel-vertical_${lastChild}` === `carousel-vertical_${showChild}`) {
          //--|🠊 Hide BOT Button 🠈|--\\
          prevView.classList.add('highlight');
          prevView.classList.remove('downplay');

          nextView.classList.add('downplay');
          nextView.classList.remove('highlight');

          verticalCarousel.classList.add(`carousel-vertical_${lastChild}`);
          console.log(slideMark, slideCount, verticalCarousel);
        } else {
          //--|🠊 Show TOP and BOT Button 🠈|--\\
          nextView.classList.add('highlight');
          nextView.classList.remove('downplay');

          prevView.classList.add('highlight');
          prevView.classList.remove('downplay');
          verticalCarousel.classList.add(`carousel-vertical_${showChild}`);
        }
    }
  }, [pageName, blockName, labelName]);

  let ListItem = axisList[style.axis];
  return (
    <menu className={`${labelName}-${blockName}_swipe-default`}>
      <ListItem className={axisClass[style.axis]}>
        <MenuAxis info={info} style={style} cases={cases} />
      </ListItem>
    </menu>
  );
};
export default MenuSwipe;
