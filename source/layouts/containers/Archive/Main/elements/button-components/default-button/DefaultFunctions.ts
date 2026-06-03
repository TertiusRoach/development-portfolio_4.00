//--|🠊 default-button/DefaultFunctions.ts 🠈|--\\

async function copyCode(button: HTMLButtonElement): Promise<string> {
  const copyOne = (button: HTMLButtonElement, shade: '~dark~' | '~light~') => {
    console.log('Successfully copied:', button.classList[1]);

    if (shade === '~dark~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
      }
    } else if (shade === '~light~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h1>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h1.svg' as string,
            }}
        />`;
      }
    }
  };
  const copyTwo = (button: HTMLButtonElement, shade: '~dark~' | '~light~') => {
    if (shade === '~dark~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
      }
    } else if (shade === '~light~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h2>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h2.svg' as string,
            }}
        />`;
      }
    }
  };
  const copyThr = (button: HTMLButtonElement, shade: '~dark~' | '~light~') => {
    if (shade === '~dark~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
      }
    } else if (shade === '~light~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h3>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h3.svg' as string,
            }}
        />`;
      }
    }
  };
  const copyFou = (button: HTMLButtonElement, shade: '~dark~' | '~light~') => {
    if (shade === '~dark~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
      }
    } else if (shade === '~light~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h4>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h4.svg' as string,
            }}
        />`;
      }
    }
  };
  const copyFiv = (button: HTMLButtonElement, shade: '~dark~' | '~light~') => {
    if (shade === '~dark~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
      }
    } else if (shade === '~light~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h5.svg' as string,
            }}
        />`;
      }
    }
  };
  const copySix = (button: HTMLButtonElement, shade: '~dark~' | '~light~') => {
    if (shade === '~dark~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
      }
    } else if (shade === '~light~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<h6>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/h6.svg' as string,
            }}
        />`;
      }
    }
  };
  const copySev = (button: HTMLButtonElement, shade: '~dark~' | '~light~') => {
    if (shade === '~dark~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
      }
    } else if (shade === '~light~') {
      switch (true) {
        case button.classList[1].includes('_top_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_bot_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_lef_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}

        />`;
        case button.classList[1].includes('_rig_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_cen_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}

        />`;
        case button.classList[1].includes('_tex_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
        case button.classList[1].includes('_ico_'):
          return `
        <ButtonDefault
            info={{
              pageName: 'components',
              blockName: 'main',
              labelName: 'default',
            }}
            style={{
              size: '<p>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: 'https://raw.githubusercontent.com/TertiusRoach/p.svg' as string,
            }}
        />`;
      }
    }
  };

  try {
    let textToCopy: string = '';
    switch (true) {
      case button.classList[1].includes('one'):
        //--|🠊 Separate by Shade 🠈|--\\
        if (button.classList[1].includes('_dar_')) {
          textToCopy = copyOne(button, '~dark~') as string;
        } else if (button.classList[1].includes('_lig_')) {
          textToCopy = copyOne(button, '~light~') as string;
        }
        break;
      case button.classList[1].includes('two'):
        //--|🠊 Separate by Shade 🠈|--\\
        if (button.classList[1].includes('_dar_')) {
          textToCopy = copyTwo(button, '~dark~') as string;
        } else if (button.classList[1].includes('_lig_')) {
          textToCopy = copyTwo(button, '~light~') as string;
        }
        break;
      case button.classList[1].includes('thr'):
        //--|🠊 Separate by Shade 🠈|--\\
        if (button.classList[1].includes('_dar_')) {
          textToCopy = copyThr(button, '~dark~') as string;
        } else if (button.classList[1].includes('_lig_')) {
          textToCopy = copyThr(button, '~light~') as string;
        }
        break;
      case button.classList[1].includes('fou'):
        //--|🠊 Separate by Shade 🠈|--\\
        if (button.classList[1].includes('_dar_')) {
          textToCopy = copyFou(button, '~dark~') as string;
        } else if (button.classList[1].includes('_lig_')) {
          textToCopy = copyFou(button, '~light~') as string;
        }
        break;
      case button.classList[1].includes('fiv'):
        //--|🠊 Separate by Shade 🠈|--\\
        if (button.classList[1].includes('_dar_')) {
          textToCopy = copyFiv(button, '~dark~') as string;
        } else if (button.classList[1].includes('_lig_')) {
          textToCopy = copyFiv(button, '~light~') as string;
        }
        break;
      case button.classList[1].includes('six'):
        //--|🠊 Separate by Shade 🠈|--\\
        if (button.classList[1].includes('_dar_')) {
          textToCopy = copySix(button, '~dark~') as string;
        } else if (button.classList[1].includes('_lig_')) {
          textToCopy = copySix(button, '~light~') as string;
        }
        break;
      case button.classList[1].includes('par'):
        //--|🠊 Separate by Shade 🠈|--\\
        if (button.classList[1].includes('_dar_')) {
          textToCopy = copySev(button, '~dark~') as string;
        } else if (button.classList[1].includes('_lig_')) {
          textToCopy = copySev(button, '~light~') as string;
        }
        break;
    }
    updateMessage();
    await navigator.clipboard.writeText(textToCopy);
    return textToCopy as string;
  } catch (err) {
    console.error('|🠊 Failed to copy:', err, ' 🠈|');
    return '|🠊 Failed to copy code 🠈|';
  }
}

let updateMessage = () => {
  const disableElement: string = 'disabled-footer';
  const footerElement = document.getElementById('components-footer') as HTMLElement;
  if (!footerElement.classList.contains(disableElement)) {
    footerElement.classList.add(disableElement);
    footerElement.classList.replace('squaring', 'expanded');
    setTimeout(() => {
      footerElement.classList.replace('expanded', 'squaring');
    }, 1250);
    setTimeout(() => {
      footerElement.classList.remove(disableElement);
    }, 1500);
  }
};
export default copyCode;
