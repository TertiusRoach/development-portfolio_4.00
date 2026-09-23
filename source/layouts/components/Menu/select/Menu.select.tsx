//--|🠊 Menu.select.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../scripts';
import reloadElements, { modifyControl, selectCarousel, createClass } from './Menu_select';

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
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    size: '<h1>' | '<h4>' | '<p>' | Array<'<h1>' | '<h4>' | '<p>'>;
    view: 'top-cen' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-cen';
    align: '-top-' | '-rig-' | '-mid-' | '-cen-' | '-bot-' | '-lef-';
  };
  cases: {
    pages: number;
    axis: '[x]' | '[y]';
    mark?: Array<string> | undefined;
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

    🠉|--*/
    reloadElements(pageName, blockName, labelName);
    modifyControl(pageName, blockName, labelName, cases.axis);
  }, [pageName, blockName, labelName]);

  let ListStyle = axisList[cases.axis] as React.ElementType;
  return (
    <menu className={`${labelName}-${blockName}_select-default`}>
      <ListStyle className={`${axisClass[cases.axis][0]} ${createClass(cases.axis, style)}`}>
        <li className={`preview-${axisClass[cases.axis][1]}_I`}>
          <MenuAxis info={info} style={style} cases={cases} />
        </li>
      </ListStyle>
    </menu>
  );
}

const MenuAxis: React.FC<TheseProps> = ({ info, style, cases }) => {
  let casesMark: Array<string>;
  if (typeof cases.mark === 'object') {
    casesMark = cases.mark;
  } else {
    casesMark = Array.from({ length: cases.pages }, () => info.labelName);
  }

  let styleSize: Array<'<h1>' | '<h4>' | '<p>'>;
  if (typeof style.size === 'object') {
    styleSize = style.size;
  } else {
    styleSize = Array.from({ length: cases.pages }, () => style.size as '<h1>' | '<h4>' | '<p>');
  }

  let stateView = 'downplay' as 'downplay' | 'highlight';
  let axisView = axisClass[cases.axis][0].split('-')[0] as 'hori' | 'vert';
  switch (typeof style.image) {
    case 'object':
      return (
        <>
          {Array.from({ length: cases.pages }, (_, index) => (
            <div key={index} className={`${axisView}-view ${stateView}`}>
              <ButtonRouting
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  labelName: `${casesMark[index]}-select`,
                }}
                style={{
                  type: '{button}',
                  color: style.color,
                  shade: style.shade,
                  image: style.image[index] as string,
                  size: styleSize[index] as '<h1>' | '<h4>' | '<p>',
                  view: style.view as 'top-cen' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-cen',
                }}
                onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
                  /* previewButtons(pageName, blockName, labelName, cases.axis); */
                  selectCarousel(event.currentTarget.parentElement as HTMLDivElement, info.pageName, info.blockName, info.labelName, cases.axis);
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
            <div key={index} className={`${axisView}-view ${stateView}`}>
              <ButtonRouting
                info={{
                  pageName: info.pageName,
                  blockName: info.blockName,
                  labelName: `${casesMark[index]}-select`,
                }}
                style={{
                  type: '{button}',
                  color: style.color,
                  shade: style.shade,
                  image: style.image as string,
                  size: styleSize[index] as '<h1>' | '<h4>' | '<p>',
                  view: style.view as 'top-cen' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-cen',
                }}
                onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
                  /* previewButtons(pageName, blockName, labelName, cases.axis); */
                  selectCarousel(event.currentTarget.parentElement as HTMLDivElement, info.pageName, info.blockName, info.labelName, cases.axis);
                }}
              />
            </div>
          ))}
        </>
      );
  }
};

export default MenuSelect;
