//--|🠊 Menu.select.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\
import { markCarousel, selectCarousel } from './Menu_select';

//--|🠋 Styles 🠋|--\\
import './Menu.select.scss';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    axis: '[x]' | '[y]';
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    view: '-lef-' | '-cen-' | '-rig-' | '-top-' | '-mid-' | '-bot-';
  };
  cases: {
    buttons: Array<{ labelName: string; imageLink: string; styleSize: '<h1>' | '<h4>' | '<p>' }>;
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}

function MenuSelect({ info, style, cases }: TheseProps) {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  let ListItem = axisList[style.axis];
  useEffect(() => {
    /*--|🠋
    
    🠉|--*/
    // markCarousel(pageName, blockName, labelName, style.axis, cases.show);
  }, [pageName, blockName, labelName]);

  return (
    <menu className={`${labelName}-${blockName}_select-default ${style.view}`}>
      <ListItem className={`${axisClass[style.axis]}`}>
        <MenuAxis info={info} style={style} cases={cases} />
      </ListItem>
    </menu>
  );
}
//--|🠊 Checks [x] or [y] axis 🠈|--\\
const axisList: Record<'[x]' | '[y]', 'ul' | 'ol'> = {
  '[x]': 'ul',
  '[y]': 'ol',
};
const axisClass: Record<TheseProps['style']['axis'], string> = {
  '[x]': 'hori-X-select',
  '[y]': 'vert-Y-select',
};
const MenuAxis: React.FC<TheseProps> = ({ info, style, cases }) => {
  // console.log(cases.buttons);
  // view: 'top-cen' | 'mid-rig' | 'bot-cen' | 'mid-lef' | 'mid-cen';
  switch (style.axis) {
    case '[x]':
      return (
        <li className="showing-horizontal_I">
          {cases.buttons.map((path, index) => {
            return (
              <div key={index} className={`${path.labelName}-view highlight`}>
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    type: '{button}',
                    view: 'bot-cen',
                    color: style.color,
                    shade: style.shade,
                    image: path.imageLink,
                  }}
                  info={{
                    pageName: info.pageName,
                    blockName: info.blockName,
                    labelName: `${path.labelName}-select`,
                  }}
                />
              </div>
            );
          })}
        </li>
      );
    case '[y]':
      console.log(cases.buttons[0]);
      return (
        <li className="showing-vertical_I">
          {cases.buttons.map((path, index) => {
            return (
              <div key={index} className={`${path.labelName}-view highlight`}>
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    type: '{button}',
                    view: 'bot-cen',
                    color: style.color,
                    shade: style.shade,
                    image: path.imageLink,
                  }}
                  info={{
                    pageName: info.pageName,
                    blockName: info.blockName,
                    labelName: `${path.labelName}-select`,
                  }}
                  onClick={(): void => {
                    //--|🠊 This order is mandatory 🠈|--\\
                    //--|🠋 Step 1: Select Carousel 🠋|--\\
                    selectCarousel(info.pageName, info.blockName, info.labelName, path.labelName, style.axis);
                    //--|🠋 Step 2: Mark Carousel 🠋|--\\
                    // markCarousel(info.pageName, info.blockName, info.labelName, style.axis, cases.show);
                  }}
                />
              </div>
            );
          })}
        </li>
      );
  }
};

export default MenuSelect;
