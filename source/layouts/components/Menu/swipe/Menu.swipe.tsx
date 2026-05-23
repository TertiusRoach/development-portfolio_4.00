//--|🠊 Menu.carousel.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import './Menu.swipe.scss';

//--|🠋 Addons 🠋|--\\
// import SelectCarousel from './addons/select-carousel/SelectCarousel';
// import ScrollCarousel from './addons/scroll-carousel/ScrollCarousel';

//--|🠋 Functions 🠋|--\\
// import markMenu from './Menu_swipe';
// import stripBrackets from '../../../functions';
// import { labelList } from './Menu_swipe';
// import { loadClass, loadStyle } from './Menu_swipe';

//--|🠋 Components 🠋|--\\
// import selectCarousel from '../../../Division/Archive/carousel/Division_carousel';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
// import ButtonRouting from '../../../Button/routing/Button.routing';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;

    pages: Array<string | HTMLElement>;
  };
  style: {
    axis: '[x]' | '[y]';
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}

const MenuSwipe: React.FC<TheseProps> = ({ info, style }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  const ListItem = style.axis === '[x]' ? 'ul' : 'ol';
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const axisClass: Record<TheseProps['style']['axis'], string> = {
    '[x]': 'hori-X-swipe',
    '[y]': 'vert-Y-swipe',
  };

  return (
    <menu className={`${labelName}-${blockName}_swipe-default`}>
      <ListItem className={axisClass[style.axis]}>
        {(() => {
          switch (style.axis) {
            case '[x]':
              let horiArrows: Record<string, string> = {
                left: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/caret-left.svg',
                right:
                  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/caret-right.svg',
              };

              return (
                <>
                  <li className="showing"></li>
                  <li className="prev-view">
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
                      // onClick={(): number => scrollHorizontal(info.pageName, info.blockName, info.labelName, 'go-left')}
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
                        image: horiArrows.right as string,
                      }}
                      info={{
                        pageName: info.pageName,
                        blockName: info.blockName,
                        // labelName: info.labelName,
                      }}
                      // onClick={(): number => scrollHorizontal(info.pageName, info.blockName, info.labelName, 'go-left')}
                    />
                  </li>
                </>
              );
            case '[y]':
              let vertArrows: Record<string, string> = {
                up: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/caret-up.svg',
                down: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/caret-down.svg',
              };
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
                      // onClick={(): number => scrollHorizontal(info.pageName, info.blockName, info.labelName, 'go-left')}
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
                      // onClick={(): number => scrollHorizontal(info.pageName, info.blockName, info.labelName, 'go-left')}
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
