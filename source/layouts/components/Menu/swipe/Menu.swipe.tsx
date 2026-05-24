//--|🠊 Menu.carousel.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Menu.swipe.scss';

//--|🠋 Functions 🠋|--\\
import { markCarousel, swipeCarousel } from './Menu_swipe';
// import markMenu from './Menu_swipe';
// import stripBrackets from '../../../functions';
// import { labelList } from './Menu_swipe';
// import { loadClass, loadStyle } from './Menu_swipe';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
// import selectCarousel from '../../../Division/Archive/carousel/Division_carousel';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
// import ButtonRouting from '../../../Button/routing/Button.routing';

interface TheseProps {
  style: {
    axis: '[x]' | '[y]';
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    pages: Array<string | HTMLElement>;
  };
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}

const MenuSwipe: React.FC<TheseProps> = ({ info, style }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const ListItem = style.axis === '[x]' ? 'ul' : 'ol';
  const axisClass: Record<TheseProps['style']['axis'], string> = {
    '[x]': 'hori-X-swipe',
    '[y]': 'vert-Y-swipe',
  };

  let directory: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid';
  let horiArrows: Record<string, string> = {
    left: `${directory}/caret-left.svg`,
    right: `${directory}/caret-right.svg`,
  };
  let vertArrows: Record<string, string> = {
    up: `${directory}/caret-up.svg`,
    down: `${directory}/caret-down.svg`,
  };

  useEffect(() => {
    markCarousel(pageName, blockName, labelName, style.axis);
  }, [pageName, blockName, labelName]);

  return (
    <menu className={`${labelName}-${blockName}_swipe-default`}>
      <ListItem className={axisClass[style.axis]}>
        {(() => {
          switch (style.axis) {
            case '[x]':
              return (
                <>
                  <li className="showing"></li>
                  <li className="prev-view downplay">
                    <ButtonDefault
                      style={{
                        size: '<h3>',
                        view: '-icon-',
                        type: '{button}',
                        color: style.color,
                        shade: style.shade,
                        image: horiArrows.left as string,
                      }}
                      info={{
                        pageName: info.pageName,
                        blockName: info.blockName,
                        // labelName: info.labelName,
                      }}
                      onClick={(): void => {
                        swipeCarousel(info.pageName, info.blockName, info.labelName, style.axis, 'view-prev');
                        markCarousel(info.pageName, info.blockName, info.labelName, style.axis);
                      }}
                    />
                  </li>
                  <li className="next-view downplay">
                    <ButtonDefault
                      style={{
                        size: '<h3>',
                        view: '-icon-',
                        type: '{button}',
                        color: style.color,
                        shade: style.shade,
                        image: horiArrows.right as string,
                      }}
                      info={{
                        pageName: info.pageName,
                        blockName: info.blockName,
                        // labelName: info.labelName,
                      }}
                      onClick={(): void => {
                        swipeCarousel(info.pageName, info.blockName, info.labelName, style.axis, 'view-next');
                        markCarousel(info.pageName, info.blockName, info.labelName, style.axis);
                      }}
                    />
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
                        image: vertArrows.up as string,
                      }}
                      info={{
                        pageName: info.pageName,
                        blockName: info.blockName,
                        // labelName: info.labelName,
                      }}
                      onClick={(): number =>
                        swipeCarousel(info.pageName, info.blockName, info.labelName, style.axis, 'view-prev')
                      }
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
                        image: vertArrows.down as string,
                      }}
                      info={{
                        pageName: info.pageName,
                        blockName: info.blockName,
                        // labelName: info.labelName,
                      }}
                      onClick={(): number =>
                        swipeCarousel(info.pageName, info.blockName, info.labelName, style.axis, 'view-next')
                      }
                    />
                  </li>
                </>
              );
          }
        })()}
      </ListItem>
    </menu>
  );
};
export default MenuSwipe;

/*
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const buildMenu = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['pages']) => {
    const styleAxis: '[x]' | '[y]' = style.axis;

    let layoutPreview: string = '';
    if (style.type === '{select}') {
      layoutPreview = `sel_${labelList(style)}`;
    } else if (style.type === '{scroll}') {
      layoutPreview = `scr_${labelList(style)}`;
    }
    switch (styleAxis) {
      case '[x]':
        return (
          <li className={`${loadClass(style)}`}>
            <ul className={`${stripBrackets(style.type, '{}')}-carousel`}>{callAddon(info, style, cases)}</ul>
          </li>
        );
      case '[y]':
        return (
          <li className={`${loadClass(style)}`}>
            <ol className={`${stripBrackets(style.type, '{}')}-carousel`}>{callAddon(info, style, cases)}</ol>
          </li>
        );
    }
  };
  //--|🠊 Loads <DefaultButton> or <RoutingButton> 🠈|--\\
  const callAddon = (info: TheseProps['info'], style: TheseProps['style'], cases: TheseProps['pages']) => {
    switch (style.type) {
      case '{scroll}':
        return <ScrollCarousel info={info} style={style} cases={cases} />;
      case '{select}':
        return <SelectCarousel info={info} style={style} cases={cases} />;
    }
  };

  
  */
