//--|🠊 Form_login.ts 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Rewritten in the current syntax, the untouched original is in git: git show d3b4ec09:source/layouts/components/Form/login/ 🠈|--\\
import { stripBrackets } from '../../../tools/conversions';
import type { TheseProps } from './Form.login'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
//--|🠊 color_def, e.g. mon_def 🠈|--\\
function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <FormLogin> 🠈|--\\
  const classColor = createColor(style.color);

  return `${classColor}_def`; //--|🠈 _def is a placeholder for now 🠈|--\\
}

//--|🠋 Generate Abbreviations 🠋|--\\
const createColor = (color: TheseProps['style']['color']): string => {
  const colorMap: Record<TheseProps['style']['color'], string> = {
    //--|🠊 Map of color options to class abbreviations 🠈|--\\
    '(mono)': 'mon',
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(purple)': 'pur',
    '(orange)': 'ora',
    '(pink)': 'pin',
    '(yellow)': 'yel',
    '(brown)': 'bro',
    '(turquoise)': 'tur',
  };
  const classColor = colorMap[color];

  if (!classColor) {
    //--|🠊 Optional: runtime check for invalid inputs 🠈|--\\
    throw new Error(`|🠊 Error: Invalid (${stripBrackets(color, '()')}) 🠈|`);
  }

  return classColor;
};

//--|🠋 Button Sizes 🠋|--\\
export const defineButton = (button: 'register' | 'password'): { size: '<h6>' | '<p>'; view: '-left-' | '-right-' | '-icon-' } => {
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
    case 'register':
      return { size: '<h6>', view: '-left-' };
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
    console.error('Axios Error Details:', {
      status, //--|🠈 The HTTP status code (like 404, 500) 🠈|--\\
      message, //--|🠈 The error message from the server 🠈|--\\
      url: error.config?.url, //--|🠈 The URL that was requested 🠈|--\\
      method: error.config?.method, //--|🠈 The HTTP method (GET, POST, etc.) 🠈|--\\
    });
  } else {
    //--|🠋 If the error was not caused by Axios, it could be some other problem (like a coding mistake). 🠋|--\\
    return console.error('Unexpected Error:', error);
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
/*--|🠋 Server: moved from Form_login.js, the old route this <Form> posted to 🠉|--*/
/*
//--|🠋 POST: Form.login.js (2025-03-07) 🠋|--\\
server.post(`/${root}/login`, async (req, res) => {
  const { email, passwordHash } = req.body; //--|🠈 AI Code: Review Please 2026-11-01 · The <Form> now sends this as password (see handleLogin in Form.login.tsx), rename it here when the server is rewritten 🠈|--\\
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));
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
  async function blocked_pending(email) {
    //--|🠋 Move User from 'blocked' to 'pending' 🠋|--\\
    const blocked = await database.collection('blocked').findOne({ email });
    if (!blocked) return; //--|🠈 Exit if the user doesn't exist in 'blocked' 🠈|--\\

    const pending = await database.collection('pending').findOne({ email }); //--|🠈 Check the correct collection 🠈|--\\
    const activationCode = await createCode(4); //--|🠈 Generate activation code once 🠈|--\\
    if (!pending) {
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
      return res.status(200).json({ view: 'register', data: null });
    } else {
      let flagPassword = await decryptValue(passwordHash, user.passwordHash);
      switch (user.status) {
        case 'pending':
          if (flagPassword === true) {
            let flagActivation = await verifyDate(user.activationCodeExpiresAt);
            switch (flagActivation) {
              case 'expired':
                await updateActivation(email);
                break;
            }
            return res.status(200).json({ view: 'verify', data: user });
          }
        case 'enabled':
          if (flagPassword) {
            await database
              .collection('enabled')
              .updateOne(
                { email: email },
                { $set: { userIP: await trackPlace(req), lastLogin: await createDate('today') } }
              );
            return res.status(200).json({ view: 'launch', data: user });
          } else {
            return res.status(200).json({ view: 'password', data: user });
          }
        case 'blocked':
          let flagDate = await verifyDate(user.restrictionExpiresAt);
          if (flagDate === 'blocked') {
            return res.status(200).json({
              view: 'blocked',
              data: user,
            });
          } else {
            await blocked_pending(email);
            switch (flagPassword) {
              case true:
                return res.status(200).json({
                  view: 'verify',
                  data: user,
                });
              case false:
                return res.status(200).json({
                  view: 'password',
                  data: user,
                });
            }
          }
      }
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Register Errors 🠈|--\\
  }
});
*/
export default createClass;
