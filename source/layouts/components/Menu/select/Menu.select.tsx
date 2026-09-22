//--|🠊 Menu.select.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\
import { markCarousel, selectCarousel } from './Menu_select';
import { abbrView, abbrShade, abbrColor } from '../../components';

//--|🠋 Styles 🠋|--\\
import './Menu.select.scss';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    image: string | Array<string>;
    align: '-top-' | '-rig-' | '-bot-' | '-lef-';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    size: '<h1>' | '<h4>' | '<p>' | Array<'<h1>' | '<h4>' | '<p>'>;
    view: 'top-cen' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-cen';
  };
  cases: {
    pages: number;
    axis: '[x]' | '[y]';
    /* pages: Array<string>; */
  };

  onClick?: () => void;
  onMouseEnter?: () => void;

  /*
  style: {
    image: string;
    size: '<h1>' | '<h4>' | '<p>';
    shade: '~dark~' | '~medium~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    view: 'top-lef' | 'top-cen' | 'top-rig' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-lef' | 'bot-cen' | 'bot-rig';

    type: '{button}' | '{counter}';
    role?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)';
  };

  */
}

//--|🠊 Checks [x] or [y] axis 🠈|--\\
const axisList: Record<'[x]' | '[y]', 'ul' | 'ol'> = {
  '[x]': 'ul',
  '[y]': 'ol',
};
const axisClass: Record<TheseProps['cases']['axis'], Array<string>> = {
  '[x]': ['hori-X-select', 'horizontal'],
  '[y]': ['vert-Y-select', 'vertical'],
};

function MenuSelect({ info, style, cases }: TheseProps) {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  useEffect(() => {
    /*--|🠋
    reloadElements(pageName, blockName, labelName);
    modifyingController(pageName, blockName, labelName);

    markCarousel(pageName, blockName, labelName, style.axis, cases.show);
    🠉|--*/
  }, [pageName, blockName, labelName]);

  let ListStyle = axisList[cases.axis] as React.ElementType;
  return (
    <menu className={`${labelName}-${blockName}_select-default`}>
      <ListStyle className={`${axisClass[cases.axis][0]} ${abbrView(style.align)}_${abbrShade(style.shade)}_${abbrColor(style.color)}`}>
        <li className={`preview-${axisClass[cases.axis][1]}_I`}>
          <MenuAxis info={info} style={style} cases={cases} />
        </li>
      </ListStyle>
    </menu>
  );
}

const MenuAxis: React.FC<TheseProps> = ({ info, style, cases }) => {
  // console.log(viewClass[style.view]);
  switch (typeof style.image) {
    case 'object':
      return (
        <>
          {Array.from({ length: cases.pages }, (_, index) => (
            <div key={index} className={`${info.labelName}-view highlight`}>
              <ButtonRouting
                style={{
                  type: '{button}',
                  color: style.color,
                  shade: style.shade,
                  image: style.image[index] as string,
                  size: style.size[index] as '<h1>' | '<h4>' | '<p>',
                  view: style.view as 'top-cen' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-cen',
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  labelName: `${info.labelName}-select`,
                }}
              />
            </div>
          ))}
        </>
      );
    case 'string':
      return (
        <>
          {Array.from({ length: cases.pages }, (_, index) => (
            <div key={index} className={`${info.labelName}-view highlight`}>
              <ButtonRouting
                style={{
                  type: '{button}',
                  color: style.color,
                  shade: style.shade,
                  image: style.image as string,
                  size: style.size as '<h1>' | '<h4>' | '<p>',
                  view: style.view as 'top-cen' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-cen',
                }}
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  labelName: `${info.labelName}-select`,
                }}
              />
            </div>
          ))}
        </>
      );
  }
};

export default MenuSelect;
