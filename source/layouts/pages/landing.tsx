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
import getResolution from '../../modules/tools/getResolution';
import getOrientation from '../../modules/tools/getOrientation';
import getIdentification from '../../modules/tools/getIdentification';
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
          {/* <LandingOverlay info={information} /> */}
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
export function viewText(page: 'login' | 'register' | 'password' | 'verify' | 'reset' | 'launch' | 'blocked', text: string) {
  let element = document.querySelector(`.${page}-text`)?.firstChild as HTMLElement;
  element.innerText = text;
}
export function viewPass(form: 'register' | 'login' | 'reset') {
  let input = document.querySelector(`.${form}-inputs #password`) as HTMLInputElement;
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
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
export function retrieveEndpoint(
  route: 'register' | 'login' | 'password' | 'verify' | 'reset',
  address: 'http://localhost:3000' | string
) {
  //--|🠊 URL: Uniform Resource Locator 🠈|--//
  //--|🠋 Important: React only recognizes environment variables that start with REACT_APP_. 🠋|--//
  const BASE_URL = process.env.REACT_APP_BASE_URL || address; //--|🠈 Replace 'http://localhost:3000' with your server's domain: 'https://api.myapp.com' 🠈|--//
  return `${BASE_URL}/users/${route}`;
}
