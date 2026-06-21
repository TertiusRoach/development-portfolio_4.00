//--|🠊 default-button/DefaultFunctions.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { arabicToRoman, romanToArabic } from '../../../../../../components/functions';

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

export const toggleColors = (section: HTMLElement): Promise<string> => {
  const findTint = ([red, green, blue]: Array<boolean>): string => {
    let tintMap: Record<string, string> = {
      'true-false-false': 'red',
      'false-true-false': 'gre',
      'false-false-true': 'blu',
      'true-true-false': 'yel',
      'true-false-true': 'pur',
      'false-true-true': 'tur',
    };
    let key: string = `${red}-${green}-${blue}`;
    let tint: string = tintMap[key] ?? 'mon';

    updateButtons(tint);
    return tint;
  };

  return new Promise((resolve) => {
    let booleans: Array<boolean> = [];
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        const label = section.childNodes[i] as HTMLLabelElement;
        const input = label.childNodes[0] as HTMLInputElement;
        booleans.push(input.checked);
      }
      resolve(findTint(booleans));
    }, 125);
  });
};
export const scrollSide = (element: HTMLDivElement, action: 'view-prev' | 'view-next') => {
  const carousel = element.querySelector('li') as HTMLElement;
  const container = carousel.querySelector('div[class*="container"]') as HTMLDivElement;
  const controller = document.querySelector(`menu[class*="${element.classList[0].split('_')[0]}"]`) as HTMLMenuElement;

  const prevMenu = controller.querySelector('li[class*="prev-view"]') as HTMLElement;
  const nextMenu = controller.querySelector('li[class*="next-view"]') as HTMLElement;

  let viewPrev: string;
  let viewNext: string;

  const firstChild = 1 as number;
  const lastChild = container.childElementCount as number;
  switch (action) {
    case 'view-prev':
      viewPrev = `${carousel.classList[0].split('_')[1]}` as string;
      viewNext = arabicToRoman(romanToArabic(viewPrev) - 1) as string;
      if (romanToArabic(viewPrev) !== firstChild) {
        if (romanToArabic(viewPrev) === firstChild + 1) {
          prevMenu.classList.replace('highlight', 'downplay');
        } else {
          nextMenu.classList.replace('downplay', 'highlight');
        }
        carousel.classList.replace(
          `${carousel.classList[0].split('_')[0]}_${viewPrev}`,
          `${carousel.classList[0].split('_')[0]}_${viewNext}`,
        );
      }
      break;
    case 'view-next':
      viewPrev = `${carousel.classList[0].split('_')[1]}` as string;
      viewNext = arabicToRoman(romanToArabic(viewPrev) + 1) as string;
      if (romanToArabic(viewPrev) !== lastChild) {
        if (romanToArabic(viewPrev) === lastChild - 1) {
          nextMenu.classList.replace('highlight', 'downplay');
        } else {
          prevMenu.classList.replace('downplay', 'highlight');
        }
        carousel.classList.replace(
          `${carousel.classList[0].split('_')[0]}_${viewPrev}`,
          `${carousel.classList[0].split('_')[0]}_${viewNext}`,
        );
      }
      break;
  }
};

let updateMessage = () => {
  const disableElement: string = 'disabled-overlay';
  const overlayElement = document.getElementById('components-overlay') as HTMLElement;
  const overlayDescription = overlayElement.querySelector('article[class*="updates"] .description p') as HTMLElement;
  if (!overlayElement.classList.contains(disableElement)) {
    overlayElement.classList.add(disableElement);
    overlayElement.classList.replace('hidden', 'updates');
    setTimeout(() => {
      overlayElement.classList.replace('updates', 'hidden');
      setTimeout(() => {
        overlayElement.classList.remove(disableElement);
      }, 250);
    }, 1500);
    overlayDescription.textContent = 'Copied component to clipboard. Press Ctrl + V to paste code.';
  }
};
let updateButtons = (color: string) => {
  const wrapperDarkside = document.querySelectorAll(
    '#components-main .default-darkside-main_container button[class*="default-button"]',
  ) as NodeListOf<HTMLButtonElement>;
  const wrapperLightside = document.querySelectorAll(
    '#components-main .default-lightside-main_container button[class*="default-button"]',
  ) as NodeListOf<HTMLButtonElement>;

  for (let i = 0; i < 49; i++) {
    let prevDarkClass = wrapperDarkside[i].classList[1] as string;
    let prevLightClass = wrapperLightside[i].classList[1] as string;

    let nextDarkClass = `${wrapperDarkside[i].classList[1].split('_')[0]}_${wrapperDarkside[i].classList[1].split('_')[1]}_${wrapperDarkside[i].classList[1].split('_')[2]}_${color}_${wrapperDarkside[i].classList[1].split('_')[4]}`;
    let nextLightClass = `${wrapperLightside[i].classList[1].split('_')[0]}_${wrapperLightside[i].classList[1].split('_')[1]}_${wrapperLightside[i].classList[1].split('_')[2]}_${color}_${wrapperLightside[i].classList[1].split('_')[4]}`;

    wrapperDarkside[i].classList.replace(prevDarkClass, nextDarkClass);
    wrapperLightside[i].classList.replace(prevLightClass, nextLightClass);
  }
};

export default copyCode;
