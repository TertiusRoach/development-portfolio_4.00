//--|🠊 Menu.toggle.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    text: Array<string>;
    image: Array<string>;
    shade: '~dark~' | '~light~';
    view: Array<'-left-' | '-right-' | '-center-' | '-text-'>;
    size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)';
  };
  cases: {
    task: Array<(event: React.MouseEvent<HTMLButtonElement>) => void>;
  };

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function MenuToggle({ info, style, cases }: TheseProps): JSX.Element {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  useEffect(() => {
    /*--|🠋

    🠉|--*/
  }, [pageName, blockName, labelName]);

  return (
    <menu className={`${labelName}-${blockName}_toggle-default`}>
      <li>
        <ButtonDefault
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
          style={{
            type: '{button}',
            shade: style.shade as '~dark~' | '~light~',
            size: style.size as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
            color: style.color as '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)',
            //--|===|--\\
            text: style.text[0] as string,
            image: style.image[0] as string,
            view: style.view[0] as '-left-' | '-right-' | '-center-' | '-text-',
          }}
          onClick={(event) => cases.task[0](event)}
          onMouseEnter={(event) => cases.task[0](event)}
        />
      </li>
      <li>
        <ButtonDefault
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
          }}
          style={{
            type: '{button}',
            shade: style.shade as '~dark~' | '~light~',
            size: style.size as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
            color: style.color as '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)',
            //--|===|--\\
            text: style.text[1] as string,
            image: style.image[1] as string,
            view: style.view[1] as '-left-' | '-right-' | '-center-' | '-text-',
          }}
          onClick={(event) => cases.task[1](event)}
          onMouseEnter={(event) => cases.task[1](event)}
        />
      </li>
    </menu>
  );
}
export default MenuToggle;
