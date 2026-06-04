//--|🠊 Footer.select.tsx 🠈|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\
import { markCarousel, selectCarousel } from './Footer_select';

//--|🠋 Styles 🠋|--\\
import './Footer.select.scss';
import MenuSelect from '../../Menu/select/Menu.select';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    view: 'top-cen' | 'mid-rig' | 'bot-cen' | 'mid-lef' | 'mid-cen';
  };
  cases: {
    show: number;
    axis: '[x]' | '[y]';
    pages: Array<{ labelName: string; imageLink: string }>;
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}
function MenuAxis({ info, style, cases }: TheseProps) {
  /*--|🠋

  🠉|--*/
  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/trinity-apps/tralogfin/trinity-apps.svg';

  console.log(info, style, cases);
  return (
    <>
      <ul className="hori-X-select">
        <li className="showing-horizontal_I"></li>
      </ul>
    </>
  );
  /*
  switch (style.axis) {
    case '[x]':
      return <li className="preview-horizontal"></li>;
    case '[y]':
      return (
        <li className="preview-vertical">
          {cases.pages.map((path, index) => {
            return (
              <div className={`${path.labelName}-view highlight`} key={index}>
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
                    selectCarousel(info.pageName, info.labelName, path.labelName, style.axis);
                    markCarousel(info.pageName, info.blockName, info.labelName, style.axis, cases.show);
                  }}
                />
              </div>
            );
          })}
        </li>
      );
  }
  */
}

const FooterSelect: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;
  /*--|🠋
  
  🠉|--*/
  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  /*
  const axisList: Record<'[x]' | '[y]', 'ul' | 'ol'> = {
    '[x]': 'ul',
    '[y]': 'ol',
  };
  const axisClass: Record<TheseProps['cases']['axis'], string> = {
    '[x]': 'hori-X-swipe',
    '[y]': 'vert-Y-swipe',
  };
  const axisMenus = {
    '[x]': (
      <li className="showing-horizontal_I">
        {cases.pages.map((pages, index) => (
          <React.Fragment key={index}>{cases.pages}</React.Fragment>
        ))}
      </li>
    ),
    '[y]': (
      <li className="showing-vertical_I">
        {cases.pages.map((pages, index) => (
          <React.Fragment key={index}>{pages}</React.Fragment>
        ))}
      </li>
    ),
  };
  let ListItem = axisList[cases.axis];
  */
  return (
    <footer className={`${labelName}-${blockName}_select-default`}>
      {/* <ListItem className={`${axisClass[cases.axis]}`}>{axisMenus[cases.axis]}</ListItem> */}
    </footer>
  );
  /*
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
  */
};
export default FooterSelect;
