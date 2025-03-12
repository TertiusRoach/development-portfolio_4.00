export function showDemos(pageName: 'landing' | string) {
  let closeRegister = document.querySelector('.register-close') as HTMLElement;
  let header = document.querySelector(`#${pageName}-header`) as HTMLElement;

  if (closeRegister && header) {
    var closeClick = () => {
      header.classList.toggle('expanded'); // Toggle '.expanded'
      header.classList.remove('collapsed'); // Remove '.collapsed'
    };

    closeRegister.addEventListener('click', closeClick);
    return () => closeRegister.removeEventListener('click', closeClick);
  }
}
export function defineButton(
  button: 'observe' | 'generate' | 'register' | 'login' | 'password',
  info: { blockName: string; pageName: string }
) {
  const { blockName, pageName } = info;
  //--|🠋 Always Return an Object 🠋|--//
  switch (button) {
    case 'register':
      return {
        fontSize: '<h3>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'text' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-plus.svg',
      };
    case 'login':
      return {
        fontSize: '<h6>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'left' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/sign-in-alt.svg',
      };
    case 'password':
      return {
        fontSize: '<h6>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'right' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'dark' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/95cb0b63850941f4de8b0d021e44f529819fe627/source/assets/svg-files/landing-page/user-lock.svg',
      };
    case 'observe':
      return {
        fontSize: '<p>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'icon' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6e8c50fc3d2d3a45cee89b33a4a81d8685a2888b/source/assets/svg-files/landing-page/eye.svg',
      };
    case 'generate':
      return {
        fontSize: '<p>' as '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
        layoutView: 'icon' as 'left' | 'right' | 'center' | 'icon' | 'text',
        shadingView: 'light' as 'dark' | 'medium' | 'light',

        className: button,
        blockName: blockName as 'main',
        pageName: 'overtime' as 'landing' | 'overtime' | 'ticketing' | 'hyperlink',
        imageLink:
          'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/6e8c50fc3d2d3a45cee89b33a4a81d8685a2888b/source/assets/svg-files/landing-page/sync-alt.svg',
      };
  }
}
export function generatePassword() {
  const passReset = document.querySelector('.reset-inputs #password') as HTMLInputElement;
  const passLogin = document.querySelector('.login-inputs #password') as HTMLInputElement;
  const passRegister = document.querySelector('.register-inputs #password') as HTMLInputElement;

  const getRandomLower = (): string => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  const getRandomUpper = (): string => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const getRandomNumber = (): string => String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  const getRandomSymbol = (): string => {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };
  const getRandomElements = (generator: () => string, count: number): string[] => Array.from({ length: count }, generator);

  //--|🠋 Determine random character counts within constraints with mostly lowercase letters 🠋|--//
  let length = Math.floor(Math.random() * 9) + 8; //--|🠈 It must be between 8 and 16 Characters 🠈|--//
  let upperCount = Math.floor(Math.random() * 3) + 1; //--|🠈 Contain at least 1 to 3 Numbers 🠈|--//
  let numberCount = Math.floor(Math.random() * 3) + 1; //--|🠈 1 to 3 numbers 🠈|--//
  let symbolCount = 1; //--|🠈 And One Special Character 🠈|--//

  //--|🠋 Fill the password parts 🠋|--//
  let upperChars = getRandomElements(getRandomUpper, upperCount);
  let numberChars = getRandomElements(getRandomNumber, numberCount);
  let symbolChars = getRandomElements(getRandomSymbol, symbolCount);
  let remainingLength = length - (upperCount + numberCount + symbolCount);
  let lowerChars = getRandomElements(getRandomLower, remainingLength);

  //--|🠋 Combine all characters and shuffle 🠋|--//
  let passwordArray = [...upperChars, ...numberChars, ...symbolChars, ...lowerChars];
  let shuffledPassword = passwordArray
    .sort(() => Math.random() - 0.5) //--|🠈 Fisher-Yates-like shuffle 🠈|--//
    .join('');

  passLogin.value = shuffledPassword;
  passReset.value = shuffledPassword;
  passRegister.value = shuffledPassword;
  return shuffledPassword;
}
