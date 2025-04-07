//--|🠊 source/script/landing.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
// import '../layouts/styles/landing.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../modules/context/EmailContext';
import { PasswordProvider } from '../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Containers 🠋|--//
import LandingMain from '../containers/Main/LandingMain/LandingMain';
import LandingHeader from '../containers/Header/LandingHeader/LandingHeader';
import LandingFooter from '../containers/Footer/LandingFooter/LandingFooter';
import LandingOverlay from '../containers/Overlay/LandingOverlay/LandingOverlay';
import LandingLeftbar from '../containers/Leftbar/LandingLeftbar/LandingLeftbar';
import LandingRightbar from '../containers/Rightbar/LandingRightbar/LandingRightbar';
//--|🠉 Containers 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../../modules/utilities/getResolution';
import getOrientation from '../../modules/utilities/getOrientation';
import getIdentification from '../../modules/utilities/getIdentification';
//--|🠉 Utilities 🠉|--//
function Landing() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: 'landing' as 'landing',
  };

  return (
    <>
      <EmailProvider>
        <PasswordProvider>
          <LandingOverlay info={information} />
          <LandingLeftbar info={information} />
          <LandingRightbar info={information} />

          <LandingHeader info={information} />
          <LandingMain info={information} />
          <LandingFooter info={information} />
        </PasswordProvider>
      </EmailProvider>
    </>
  );
}
export default Landing;

export function viewBlock(page: 'register' | 'login' | 'password' | 'verify' | 'reset' | 'launch' | 'blocked') {
  const carousel = document.querySelector('main .landing-carousel') as HTMLElement;
  const unifyLayouts = (overlays: {
    header: HTMLElement;
    leftbar: HTMLElement;
    rightbar: HTMLElement;
    footer: HTMLElement;
  }) => {
    for (let [key, element] of Object.entries(overlays)) {
      if (element.classList.contains('expanded')) {
        toggleMargins(element, 'hide');
        /* console.log(`Collapsed ${key}`); // Optional logging for debugging */
      }
    }

    /*
    if (overlays.leftbar.className.includes('expanded')) {
      toggleMargins(overlays.leftbar, 'hide'); //--|🠈 Collapse Verify 🠈|--//
    }
    if (overlays.rightbar.className.includes('expanded')) {
      toggleMargins(overlays.rightbar, 'hide'); //--|🠈 Collapse Reset 🠈|--//
    }
    if (overlays.header.className.includes('expanded')) {
      toggleMargins(overlays.header, 'hide'); //--|🠈 Collapse Launch 🠈|--//
    }
    if (overlays.footer.className.includes('expanded')) {
      toggleMargins(overlays.footer, 'hide'); //--|🠈 Collapse Blocked 🠈|--//
    }
    */
  };
  const toggleMargins = (element: HTMLElement, view: 'show' | 'hide') => {
    //--|🠊 The <aside>, <header>, and <footer> elements will be collectively referred to as 'margins'. 🠈|--//
    element.classList.toggle('collapsed', view === 'hide');
    element.classList.toggle('expanded', view === 'show');
  };

  let register = carousel.childNodes[0] as HTMLElement;
  let login = carousel.childNodes[1] as HTMLElement;
  let password = carousel.childNodes[2] as HTMLElement;

  let launch = document.querySelector("header[id*='header']") as HTMLElement;
  let blocked = document.querySelector("footer[id*='footer']") as HTMLElement;

  let verify = document.querySelectorAll("aside[class*='leftbar']")[0] as HTMLElement;
  let reset = document.querySelectorAll("aside[class*='rightbar']")[0] as HTMLElement;

  unifyLayouts({ header: launch, leftbar: verify, rightbar: reset, footer: blocked });
  switch (page) {
    case 'register':
      carousel.style.transform = 'translateX(0vw)';

      register.className = `${page}-section visible`;
      login.className = `${page}-section hidden`;
      password.className = `${page}-section hidden`;
      break;
    case 'login':
      carousel.style.transform = 'translateX(-100vw)';

      register.className = `${page}-section hidden`;
      login.className = `${page}-section visible`;
      password.className = `${page}-section hidden`;
      break;
    case 'password':
      carousel.style.transform = 'translateX(-200vw)';

      register.className = `${page}-section hidden`;
      login.className = `${page}-section hidden`;
      password.className = `${page}-section visible`;
      break;
    case 'verify':
      toggleMargins(verify, 'show'); //--|🠈 Expand Verify 🠈|--//
      break;
    case 'reset':
      toggleMargins(reset, 'show'); //--|🠈 Expand Reset 🠈|--//
      break;
    case 'launch':
      toggleMargins(launch, 'show'); //--|🠈 Expand Launch 🠈|--//
      break;
    case 'blocked':
      toggleMargins(blocked, 'show'); //--|🠈 Expand Blocked 🠈|--//
      break;
  }
}
export function viewText(page: 'login' | 'register' | 'password' | 'verify' | 'reset' | 'launch' | 'blocked', text: string) {
  let element = document.querySelector(`.${page}-text`)?.firstChild as HTMLElement;
  element.innerText = text;
}
export function viewWord(form: 'register' | 'login' | 'reset') {
  let input = document.querySelector(`.${form}-inputs #password`) as HTMLInputElement;
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}

//---//

export function outputDisplay(element: HTMLElement) {
  console.log(element);

  if (element) {
    let computedStyle = window.getComputedStyle(element);
    let displayValue = computedStyle.display;

    console.log('Display value:', displayValue);
  } else {
    console.log("Element with ID 'mySection' not found.");
  }
}
export function retrieveEndpoint(
  route: 'register' | 'login' | 'password' | 'verify' | 'reset',
  address: 'http://localhost:3000' | string
) {
  //--|🠊 URL: Uniform Resource Locator 🠈|--//
  //--|🠋 Important: React only recognizes environment variables that start with REACT_APP_. 🠋|--//
  const BASE_URL = process.env.REACT_APP_BASE_URL || address; //--|🠈 Replace 'http://localhost:3000' with your server's domain: 'https://api.myapp.com' 🠈|--//
  return `${BASE_URL}/users/${route}`;
}
export function axiosError(error: unknown) {
  //--|🠉 First, we check if the error came from an Axios request. 🠉|--//
  //--|🠋 This is important because not all errors in JavaScript are Axios errors. 🠋|--//
  if (axios.isAxiosError(error)) {
    //--|🠋 We try to get the HTTP status code from the server's response. 🠋|--//
    const status = error.response?.status;
    //--|🠉 We also try to extract a meaningful error message from the response. 🠉|--//
    //--|🠋 If there's no specific message, we fall back to Axios's built-in error message. 🠋|--//
    const message = error.response?.data?.message || error.message;

    //--|🠋 Now we check the status code to decide what message to show the user. 🠋|--//
    switch (status) {
      case 404: //--|🠈 If the server is not found (wrong URL or down) 🠈|--//
        alert('status(404): Axios Error: Server not found. Please try again later.');
        break;
      case 401: //--|🠈 If the user is unauthorized (wrong username/password) 🠈|--//
        alert('status(401):Axios Error: Unauthorized access. Please check your credentials and try again.');
        break;
      case 500: //--|🠈 If the server itself has an error (internal server issue) 🠈|--//
        alert('status(500)): Axios Error: Internal Server Error. Please try again later.');
        break;
      default: //--|🠈 If it's some other error, we show a general network error message. 🠈|--//
        alert(`status(default):Axios Error: ${message || 'A network error occurred. Please check your connection.'}`);
    }

    //--|🠋 We log the error details in the console so developers can debug the issue. 🠋|--//
    console.error('Axios Error Details:', {
      status, //--|🠈 The HTTP status code (like 404, 500) 🠈|--//
      message, //--|🠈 The error message from the server 🠈|--//
      url: error.config?.url, //--|🠈 The URL that was requested 🠈|--//
      method: error.config?.method, //--|🠈 The HTTP method (GET, POST, etc.) 🠈|--//
    });
  } else {
    //--|🠋 If the error was not caused by Axios, it could be some other problem (like a coding mistake). 🠋|--//
    return console.error('Unexpected Error:', error);
  }
}

const dialogueMessages = (
  status: string,
  action:
    | 'created'
    | 'mismatch'
    | 'unverified'
    | 'halted'
    | 'authorized'
    | 'incorrect'
    | 'remembered'
    | 'renewed'
    | 'suspended'
    | 'recovered'
    | 'declined'
    | 'register'
) => {
  let dialogue: string; //--|🠈 Message for the User 🠈|--//
  //--|🠋 Step 4: Validate User Status 🠋|--//
  if (status === 'pending') {
    //--|🠉 If the user email exists inside the 'pending' collection 🠈|--//
    //--|🠋 Step 4.1: Perform Desired Action 🠋|--//
    switch (action) {
      case 'created': //--|🠈 If a new user is added/registered to the 'pending' collection the show the verify page. 🠈|--//
        //--|🠊 01. created: Form.register 🠈|--//
        //--|🠊 status(201): Accepted 🠈|--//
        dialogue = '//--|🠊 Your account has been created. Please verify your email to activate it. 🠈|--//';
        viewBlock('verify');
        viewText('verify', dialogue);
        break;
      case 'unverified': //--|🠈 If the user requests a password, registers or logs in without having validated the account first. 🠈|--//
        //--|🠊 02. unverified: Form.register + Form.login + Form.password 🠈|--//
        //--|🠊 status(403): Forbidden 🠈|--//
        dialogue = '//--|🠊 Your account is not verified. Please check your email for the activation link. 🠈|--//';
        viewBlock('verify');
        viewText('verify', dialogue);
        break;
      case 'mismatch': //--|🠈 If the "activationCode" entered by the user doesn't match the "email" associated with the document. 🠈|--//
        //--|🠊 03. mismatch: Form.verify 🠈|--//
        //--|🠊 status(400): Bad Request 🠈|--//
        dialogue = 'The verification code does not match our records. Please try again.';
        break;
      case 'halted': //--|🠈 If the user failed to enter the "activationCode" twelve times, move the user to the 'blocked' collection. 🠈|--//
        //--|🠊 04. halted: Form.verify 🠈|--//
        //--|🠊 status(403): Forbidden 🠈|--//
        dialogue = 'Too many incorrect activation attempts. Your account has been temporarily blocked.';
        break;
    }
  } else if (status === 'enabled') {
    //--|🠉 If the user email exists inside the 'enabled' collection 🠈|--//
    //--|🠋 Step 4.2: Perform Desired Action 🠋|--//
    switch (action) {
      case 'authorized': //--|🠈 If the "passwordHash" matches the "email" entered by the user. 🠈|--//
        //--|🠊 05. authorized: Form.login 🠈|--//
        //--|🠊 status(200): OK 🠈|--//
        dialogue = 'Login successful. Redirecting to your dashboard...';
        break;
      case 'incorrect': //--|🠈 If the "passwordHash" doesn't match the "email" entered by the user. 🠈|--//
        //--|🠊 06. incorrect: Form.login 🠈|--//
        //--|🠊 status(401): Unauthorized 🠈|--//
        dialogue = 'Incorrect password. Please try again or reset your password.';
        break;
      case 'remembered': //--|🠈 If the newly entered password matches the current "passwordHash". 🠈|--//
        //--|🠊 07. remembered: Form.password 🠈|--//
        //--|🠊 status(400): Bad Request 🠈|--//
        dialogue = 'New password matches the old one. Please choose a different password.';
        break;
      case 'renewed': //--|🠈 If the "passwordCode" matches the input of the user and a new password has been entered. 🠈|--//
        //--|🠊 08. renewed: Form.reset 🠈|--//
        //--|🠊 status(200): OK 🠈|--//
        dialogue = 'Your password has been successfully reset.';
        break;
      case 'suspended': //--|🠈 If the user requested a new "passwordCode" six times without using it, move the user to 'blocked'. 🠈|--//
        //--|🠊 09. suspended: Form.login + Form.password 🠈|--//
        //--|🠊 status(403): Forbidden 🠈|--//
        dialogue = 'Too many password reset requests. Your account has been temporarily blocked.';
        break;
    }
  } else if (status === 'blocked') {
    //--|🠉 If the user email exists inside the 'blocked' collection 🠈|--//
    //--|🠋 Step 4.3: Perform Desired Action 🠋|--//
    switch (action) {
      case 'recovered': //--|🠈 Move the user to 'pending' if "updatedAt" is older than seven days. 🠈|--//
        //--|🠊 10. recovered: Form.register + Form.login + Form.password 🠈|--//
        //--|🠊 status(202): Accepted 🠈|--//
        dialogue = 'Your account has been reinstated. Please verify your email to continue.';
        break;
      case 'declined': //--|🠈 Return this if the user is in the 'blocked' collection and "updatedAt" is less than seven days. 🠈|--//
        //--|🠊 11. declined: Form.register + Form.login + Form.password 🠈|--//
        //--|🠊 status(403): Forbidden 🠈|--//
        dialogue = 'Your account is blocked. Please wait before attempting to access it again.';
        break;
    }
  } else if (status === 'missing') {
    //--|🠉 If the user email doesn't exist inside 'pending', 'enabled', or 'blocked' collections 🠈|--//
    //--|🠋 Step 4.4: Perform Desired Action 🠋|--//
    switch (action) {
      case 'register': //--|🠈 If the user interacts with any page and "email" isn't in any database then return this. 🠈|--//
        //--|🠊 12. register: Form.login + Form.password 🠈|--//
        //--|🠊 status(404): Not Found 🠈|--//
        dialogue = '//--|🠊 No account found with this email. Would you like to register? 🠈|--//';
        viewBlock('register');
        viewText('register', dialogue);
        break;
    }
  } else {
    //--|🠊 status(500): Internal Server Error 🠈|--//
    dialogue = 'An unexpected error occurred. Please try again later.';
  }
};
