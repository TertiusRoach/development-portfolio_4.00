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
    view: 'top-cen' | 'mid-rig' | 'bot-cen' | 'mid-lef' | 'mid-cen';
  };
  cases: {
    show: number;
    pages: Array<{ labelName: string; imageLink: string }>;
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}
function MenuAxis({ info, style, cases }: TheseProps) {
  /*--|🠋

  🠉|--*/
  switch (style.axis) {
    case '[x]':
      return <li className="showing-horizontal_I"></li>;
    case '[y]':
      return (
        <li className="showing-vertical_I">
          {cases.pages.map((path, index) => {
            return (
              <div key={index} className={`${path.labelName}-view highlight`}>
                <ButtonRouting
                  style={{
                    size: '<h1>',
                    type: '{button}',
                    view: style.view,
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
                    markCarousel(info.pageName, info.blockName, info.labelName, style.axis, cases.show);
                  }}
                />
              </div>
            );
          })}
        </li>
      );
  }
}

const MenuSelect: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const axisList: Record<'[x]' | '[y]', 'ul' | 'ol'> = {
    '[x]': 'ul',
    '[y]': 'ol',
  };
  const axisClass: Record<TheseProps['style']['axis'], string> = {
    '[x]': 'hori-X-select',
    '[y]': 'vert-Y-select',
  };

  useEffect(() => {
    /*--|🠋
    
    🠉|--*/
    markCarousel(pageName, blockName, labelName, style.axis, cases.show);
  }, [pageName, blockName, labelName]);

  let ListItem = axisList[style.axis];
  return (
    <menu className={`${labelName}-${blockName}_select-default ${style.view}`}>
      <ListItem className={`${axisClass[style.axis]}`}>
        <MenuAxis info={info} style={style} cases={cases} />
      </ListItem>
    </menu>
  );
};
export default MenuSelect;
