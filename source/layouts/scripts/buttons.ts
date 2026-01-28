//--|🠊 buttons.ts 🠈|--//
export function stripBrackets(thisText: string, wrapType: '[]' | '<>' | '()' | '{}' | '--' | '~~'): string {
  switch (wrapType) {
    case '[]':
      return thisText.replace(/[\[\]]/g, '');
    case '<>':
      return thisText.replace(/[<>]/g, '');
    case '()':
      return thisText.replace(/[()]/g, '');
    case '{}':
      return thisText.replace(/[{}]/g, '');
    case '--':
      return thisText.replace(/[--]/g, '');
    case '~~':
      return thisText.replace(/[~~]/g, '');
  }
}

/*
export function viewBlock(page: 'register' | 'login' | 'password' | 'verify' | 'reset' | 'launch' | 'blocked') {
  const carousel = document.querySelector('main .landing-carousel') as HTMLElement;
  const login = carousel.childNodes[1] as HTMLElement;
  const register = carousel.childNodes[0] as HTMLElement;
  const password = carousel.childNodes[2] as HTMLElement;
  const hideBlock = () => {
    //--|🠋 <header> 🠋|--//
    let launch = document.querySelector("header[id*='landing']") as HTMLElement;
    if (launch.classList.contains('expanded')) {
      launch.className = 'default-header collapsed'; //--|🠈 Hide Launch 🠈|--//
    }

    //--|🠋 <footer> 🠋|--//
    let blocked = document.querySelector("footer[id*='landing']") as HTMLElement;
    if (blocked.classList.contains('expanded')) {
      blocked.className = 'default-footer collapsed'; //--|🠈 Hide Blocked 🠈|--//
    }

    //--|🠋 <leftbar> 🠋|--//
    let verify = document.getElementById('landing-leftbar') as HTMLElement;
    if (verify.classList.contains('expanded')) {
      verify.className = 'default-leftbar collapsed'; //--|🠈 Hide Verify 🠈|--//
    }

    //--|🠋 <rightbar> 🠋|--//
    let reset = document.getElementById('landing-rightbar') as HTMLElement;
    if (reset.classList.contains('expanded')) {
      reset.className = 'default-rightbar collapsed'; //--|🠈 Hide Reset 🠈|--//
    }
  };
  const showBlock = (view: '<header>' | '<footer>' | '<leftbar>' | '<rightbar>') => {
    switch (view) {
      case '<header>':
        let launch = document.querySelector("header[id*='landing']") as HTMLElement;
        launch.className = 'default-header expanded'; //--|🠈 Show Launch 🠈|--//
        break;
      case '<footer>':
        let blocked = document.querySelector("footer[id*='landing']") as HTMLElement;
        blocked.className = 'default-footer expanded'; //--|🠈 Show Blocked 🠈|--//
        break;
      case '<leftbar>':
        let verify = document.querySelectorAll("aside[class*='leftbar']")[0] as HTMLElement;
        verify.className = 'default-leftbar expanded'; //--|🠈 Show Verify 🠈|--//
        break;
      case '<rightbar>':
        let reset = document.querySelectorAll("aside[class*='rightbar']")[0] as HTMLElement;
        reset.className = 'default-rightbar expanded'; //--|🠈 Show Reset 🠈|--//
        break;
    }
  };

  switch (page) {
    case 'register':
      hideBlock();

      login.className = 'login-section hidden';
      register.className = `${page}-section visible`;
      password.className = 'password-section hidden';

      carousel.style.transform = 'translateX(0vw)';
      break;
    case 'login':
      hideBlock();

      login.className = `${page}-section visible`;
      register.className = 'register-section hidden';
      password.className = 'password-section hidden';

      carousel.style.transform = 'translateX(-100vw)';
      break;
    case 'password':
      hideBlock();

      login.className = 'login-section hidden';
      register.className = 'register-section hidden';
      password.className = `${page}-section visible`;

      carousel.style.transform = 'translateX(-200vw)';
      break;
    case 'verify':
      showBlock('<leftbar>');
      break;
    case 'reset':
      showBlock('<rightbar>');
      break;
    case 'launch':
      showBlock('<header>');
      break;
    case 'blocked':
      showBlock('<footer>');
      break;
  }
}
*/
