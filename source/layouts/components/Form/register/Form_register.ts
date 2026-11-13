//--|🠊 Form_register.ts 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Rewritten in the current syntax, the untouched original is in git: git show d3b4ec09:source/layouts/components/Form/register/ 🠈|--\\
import { abbrColor } from '../../components'; //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\
import type { TheseProps } from './Form.register'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
//--|🠊 color_def, e.g. mon_def 🠈|--\\
function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <FormRegister> 🠈|--\\
  const classColor = abbrColor(style.color); //--|🠈 AI Code: Review Please 2026-11-08 · The map lives in components.ts, shared by every component 🠈|--\\

  return `${classColor}_def`; //--|🠈 _def is a placeholder for now 🠈|--\\
}

//--|🠋 Button Sizes 🠋|--\\
export const defineButton = (button: 'login' | 'password'): { size: '<h6>' | '<p>'; view: '-right-' | '-icon-' } => {
  //--|🠊 The old defineButton(): below 768px the secondary buttons shrink to an icon, checked once per render 🠈|--\\
  const portrait = window.innerWidth <= 768 && window.matchMedia('(orientation: portrait)').matches; //--|🠈 AI Code: Review Please 2026-11-01 · Was < 768: max-width: 768px includes 768, so the card had already shrunk 🠈|--\\
  const landscape = window.innerHeight <= 768 && window.matchMedia('(orientation: landscape)').matches; //--|🠈 AI Code: Review Please 2026-11-01 · Was < 768: max-height: 768px includes 768, so the card had already shrunk 🠈|--\\
  const tablet =
    window.matchMedia('(max-aspect-ratio: 15.99/9) and (min-aspect-ratio: 9/15.99)').matches &&
    Math.max(window.innerWidth, window.innerHeight) <= 1920; //--|🠈 AI Code: Review Please 2026-11-01 · Measured like showingBootstrap(): the long side, where tablet-squaring shrinks the card 🠈|--\\

  if (landscape === true || portrait === true || tablet === true) {
    return { size: '<p>', view: '-icon-' };
  }
  switch (button) {
    case 'login':
      return { size: '<h6>', view: '-right-' }; //--|🠈 Both were -right- in the old defineButton() 🠈|--\\
    case 'password':
      return { size: '<h6>', view: '-right-' };
  }
};

/*--|🠋 Helpers: recovered from git show 7bbf3da8^:source/layouts/scripts/landing.ts, commented out while the <Form> is visual-only 🠉|--*/
/*
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
  //--|🠉 First, we check if the error came from an Axios request. 🠉|--\\
  //--|🠋 This is important because not all errors in JavaScript are Axios errors. 🠋|--\\
  if (axios.isAxiosError(error)) {
    //--|🠋 We try to get the HTTP status code from the server's response. 🠋|--\\
    const status = error.response?.status;
    //--|🠉 We also try to extract a meaningful error message from the response. 🠉|--\\
    //--|🠋 If there's no specific message, we fall back to Axios's built-in error message. 🠋|--\\
    const message = error.response?.data?.message || error.message;

    //--|🠋 Now we check the status code to decide what message to show the user. 🠋|--\\
    switch (status) {
      case 404: //--|🠈 If the server is not found (wrong URL or down) 🠈|--\\
        alert('status(404): Axios Error: Server not found. Please try again later.');
        break;
      case 401: //--|🠈 If the user is unauthorized (wrong username/password) 🠈|--\\
        alert('status(401):Axios Error: Unauthorized access. Please check your credentials and try again.');
        break;
      case 500: //--|🠈 If the server itself has an error (internal server issue) 🠈|--\\
        alert('status(500)): Axios Error: Internal Server Error. Please try again later.');
        break;
      default: //--|🠈 If it's some other error, we show a general network error message. 🠈|--\\
        alert(`status(default):Axios Error: ${message || 'A network error occurred. Please check your connection.'}`);
    }

    //--|🠋 We log the error details in the console so developers can debug the issue. 🠋|--\\
    console.log(`|--🠊 Warning: ${error.config?.method?.toUpperCase()} ${error.config?.url} answered ${status}, ${message}, Form/register/Form_register.ts 🠈--|`); //--|🠈 AI Code: Review Please 2026-11-12 · Was console.error('Axios Error Details:', {…}) 🠈|--\\
  } else {
    //--|🠋 If the error was not caused by Axios, it could be some other problem (like a coding mistake). 🠋|--\\
    return console.log(`|--🠊 Warning: ${error} did not come from axios, Form/register/Form_register.ts 🠈--|`); //--|🠈 AI Code: Review Please 2026-11-12 · Was console.error('Unexpected Error:', error) 🠈|--\\
  }
}
export function retrieveEndpoint(
  route: 'register' | 'login' | 'password' | 'verify' | 'reset',
  address: 'http://localhost:3000' | string,
) {
  //--|🠊 URL: Uniform Resource Locator 🠈|--\\
  //--|🠋 Important: React only recognizes environment variables that start with REACT_APP_. 🠋|--\\
  const BASE_URL = process.env.REACT_APP_BASE_URL || address; //--|🠈 Replace 'http://localhost:3000' with your server's domain: 'https://api.myapp.com' 🠈|--\\
  return `${BASE_URL}/users/${route}`;
}
*/
/*--|🠋 Own helpers: from the old Form_register.ts, commented out while the <Form> is visual-only 🠉|--*/
/*
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
export function generatePassword() {
  const passReset = document.querySelector('.reset-inputs #password') as HTMLInputElement;
  const passLogin = document.querySelector('.login-inputs #password') as HTMLInputElement;
  const passRegister = document.querySelector(
    '.register-inputs #password'
  ) as HTMLInputElement;

  const getRandomLower = (): string =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  const getRandomUpper = (): string =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const getRandomNumber = (): string =>
    String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  const getRandomSymbol = (): string => {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };
  const getRandomElements = (generator: () => string, count: number): string[] =>
    Array.from({ length: count }, generator);

  //--|🠋 Determine random character counts within constraints with mostly lowercase letters 🠋|--\\
  let length = Math.floor(Math.random() * 9) + 8; //--|🠈 It must be between 8 and 16 Characters 🠈|--\\
  let upperCount = Math.floor(Math.random() * 3) + 1; //--|🠈 Contain at least 1 to 3 Numbers 🠈|--\\
  let numberCount = Math.floor(Math.random() * 3) + 1; //--|🠈 1 to 3 numbers 🠈|--\\
  let symbolCount = 1; //--|🠈 And One Special Character 🠈|--\\

  //--|🠋 Fill the password parts 🠋|--\\
  let upperChars = getRandomElements(getRandomUpper, upperCount);
  let numberChars = getRandomElements(getRandomNumber, numberCount);
  let symbolChars = getRandomElements(getRandomSymbol, symbolCount);
  let remainingLength = length - (upperCount + numberCount + symbolCount);
  let lowerChars = getRandomElements(getRandomLower, remainingLength);

  //--|🠋 Combine all characters and shuffle 🠋|--\\
  let passwordArray = [...upperChars, ...numberChars, ...symbolChars, ...lowerChars];
  let shuffledPassword = passwordArray
    .sort(() => Math.random() - 0.5) //--|🠈 Fisher-Yates-like shuffle 🠈|--\\
    .join('');

  passLogin.value = shuffledPassword;
  passReset.value = shuffledPassword;
  passRegister.value = shuffledPassword;
  return shuffledPassword;
}
*/
/*--|🠋 Server: moved from Form_register.js, the old route this <Form> posted to 🠉|--*/
/*
//--|🠋 POST: Form.register.js (2025-03-07) 🠋|--\\
server.post(`/${root}/register`, async (req, res) => {
  const { firstName, lastName, email, passwordHash } = req.body; //--|🠈 AI Code: Review Please 2026-11-01 · The <Form> now sends this as password (see handleRegister in Form.register.tsx), rename it here when the server is rewritten 🠈|--\\
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));
  //--|🠋 CRUD 🠋|--\\
  async function createEntry(firstName, lastName, email, passwordHash) {
    const activationCode = await createCode(4); // Ensure activationCode is defined
    await database.collection('pending').insertOne({
      email: email,
      passwordHash: await encryptValue(passwordHash),

      role: 'user',
      status: 'pending',
      firstName: firstName,
      lastName: lastName,

      activationCode: activationCode,
      activationAttempts: 0,
      activationCodeExpiresAt: await createDate('tomorrow'),

      lastLogin: null,
      userIP: await trackPlace(req),
      updatedAt: null,
      createdAt: await createDate('today'),

      //--|🠊 AI Code: Review Please 2026-11-01 · Was a block comment, which would close the one around this file 🠈|--\\
      // passwordCode: null,
      // passwordCodeExpiresAt: null,
      // passwordChangeRequests: 0,
    });

    await sendEmail(email, activationCode, 'register');
  }
  async function readEntry(email) {
    const document =
      (await database.collection('enabled').findOne({ email })) ||
      (await database.collection('pending').findOne({ email })) ||
      (await database.collection('blocked').findOne({ email }));
    return {
      email: document.email,

      role: document.role,
      status: document.status,
      firstName: document.firstName,
      lastName: document.lastName,

      activationCode: document.activationCode,
      activationAttempts: document.activationAttempts,
      activationCodeExpiresAt: document.activationCodeExpiresAt,

      userIP: document.userIP,
      createdAt: document.createdAt,
      updatedAt: document.updatedAt,
      lastLogin: document.lastLogin,

      passwordCode: document.passwordCode,
      passwordCodeExpiresAt: document.passwordCodeExpiresAt,
      passwordChangeRequests: document.passwordChangeRequests,
    };
  }
  async function updateActivation(email) {
    let activationCode = await createCode(4); // Ensure activationCode is defined
    await database.collection('pending').updateOne(
      { email: email }, // Find the document by email
      {
        $set: {
          updatedAt: await createDate('today'),

          activationCode: activationCode,
          activationCodeExpiresAt: await createDate('tomorrow'),
        },
      }
    );
    await sendEmail(email, activationCode, 'register');
  }

  //--|🠋 Move Document between Collections 🠋|--\\
  async function blocked_pending(email) {
    //--|🠋 Move User from 'blocked' to 'pending' 🠋|--\\
    const blocked = await database.collection('blocked').findOne({ email });
    if (!blocked) return; //--|🠈 Exit if the user doesn't exist in 'blocked' 🠈|--\\

    const pending = await database.collection('pending').findOne({ email }); //--|🠈 Check the correct collection 🠈|--\\
    if (!pending) {
      const activationCode = await createCode(4); //--|🠈 Generate activation code once 🠈|--\\

      //--|🠋 Insert the document into 'pending' collection 🠋|--\\
      await database.collection('pending').insertOne({
        _id: blocked._id, //--|🠈 Preserve the same ObjectId 🠈|--\\
        email: blocked.email,
        passwordHash: blocked.passwordHash,

        role: blocked.role,
        status: 'pending',
        firstName: blocked.firstName,
        lastName: blocked.lastName,

        activationCode,
        activationAttempts: 0,
        activationCodeExpiresAt: await createDate('tomorrow'),

        userIP: blocked.userIP,
        createdAt: blocked.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,
      });

      //--|🠋 Delete the user from the 'blocked' collection 🠋|--\\
      await database.collection('blocked').deleteOne({ email });

      await sendEmail(email, activationCode, 'register');
    }
  }

  try {
    if (!user) {
      await createEntry(firstName, lastName, email, passwordHash);
      return res.status(200).json({
        view: 'verify',
        data: await readEntry(email),
      });
    } else {
      switch (user.status) {
        case 'pending':
          let flagActivation = await verifyDate(user.activationCodeExpiresAt);
          if (flagActivation === 'expired') {
            await updateActivation(email);
          }
          return res.status(200).json({
            view: 'verify',
            data: user,
          });
        case 'enabled':
          let flagPassword = await decryptValue(passwordHash, user.passwordHash);
          if (flagPassword) {
            return res.status(200).json({
              view: 'login',
              data: user,
            });
          } else {
            return res.status(200).json({
              view: 'password',
              data: user,
            });
          }
        case 'blocked':
          let flagRestriction = await verifyDate(user.restrictionExpiresAt);
          if (flagRestriction === 'blocked') {
            return res.status(200).json({
              view: 'blocked',
              data: user,
            });
          } else {
            await blocked_pending(email);
            return res.status(200).json({
              view: 'verify',
              data: user,
            });
          }
      }
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Register Errors 🠈|--\\
  }
});
*/
export default createClass;
