//--|🠊 Form_password.ts 🠈|--\\
//--|🠊 AI Code: Review Please 2026-11-01 · Rewritten in the current syntax, the untouched original is in git: git show d3b4ec09:source/layouts/components/Form/password/ 🠈|--\\
import { abbrColor } from '../../components'; //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\
import type { TheseProps } from './Form.password'; //--|🠈 The props are written in the .tsx, this only reads them 🠈|--\\

//--|🠋 Functions 🠋|--\\
//--|🠊 color_def, e.g. mon_def 🠈|--\\
function createClass(style: TheseProps['style']): string {
  //--|🠊 Class Build for <FormPassword> 🠈|--\\
  const classColor = abbrColor(style.color); //--|🠈 AI Code: Review Please 2026-11-08 · The map lives in components.ts, shared by every component 🠈|--\\

  return `${classColor}_def`; //--|🠈 _def is a placeholder for now 🠈|--\\
}

//--|🠋 Button Sizes 🠋|--\\
export const defineButton = (button: 'login' | 'register'): { size: '<h6>' | '<p>'; view: '-right-' | '-icon-' } => {
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
    case 'register':
      return { size: '<h6>', view: '-right-' };
  }
};

/*--|🠋 Helpers: recovered from git show 7bbf3da8^:source/layouts/scripts/landing.ts, commented out while the <Form> is visual-only 🠉|--*/
/*
export function viewText(page: 'login' | 'register' | 'password' | 'verify' | 'reset' | 'launch' | 'blocked', text: string) {
  let element = document.querySelector(`.${page}-text`)?.firstChild as HTMLElement;
  element.innerText = text;
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
    console.log(`|--🠊 Warning: ${error.config?.method?.toUpperCase()} ${error.config?.url} answered ${status}, ${message}, Form/password/Form_password.ts 🠈--|`); //--|🠈 AI Code: Review Please 2026-11-12 · Was console.error('Axios Error Details:', {…}) 🠈|--\\
  } else {
    //--|🠋 If the error was not caused by Axios, it could be some other problem (like a coding mistake). 🠋|--\\
    return console.log(`|--🠊 Warning: ${error} did not come from axios, Form/password/Form_password.ts 🠈--|`); //--|🠈 AI Code: Review Please 2026-11-12 · Was console.error('Unexpected Error:', error) 🠈|--\\
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
/*--|🠋 Own helpers: from the old Form_password.ts, commented out while the <Form> is visual-only 🠉|--*/
/*
export function showDemos(pageName: 'landing' | string) {
  let closePassword = document.querySelector('.password-close') as HTMLElement;
  let header = document.querySelector(`#${pageName}-header`) as HTMLElement;

  if (closePassword && header) {
    var closeClick = () => {
      header.classList.toggle('expanded'); // Toggle '.expanded'
      header.classList.remove('collapsed'); // Remove '.collapsed'
    };

    closePassword.addEventListener('click', closeClick);
    return () => closePassword.removeEventListener('click', closeClick);
  }
}
*/
/*--|🠋 Server: moved from Form_password.js, the old route this <Form> posted to 🠉|--*/
/*
//--|🠋 POST: Form.password.js (2025-03-07) 🠋|--\\
server.post(`/${root}/password`, async (req, res) => {
  const { email, passwordHash } = req.body; //--|🠈 AI Code: Review Please 2026-11-01 · The <Form> now sends this as password (see handlePassword in Form.password.tsx), rename it here when the server is rewritten 🠈|--\\
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  async function updateRenewal(email) {
    const passwordCode = await createCode(4);
    await database.collection('enabled').updateOne(
      { email: email },
      {
        $set: {
          userIP: await trackPlace(req),
          updatedAt: await createDate('today'),

          passwordCode: passwordCode,
          passwordCodeExpiresAt: await createDate('tomorrow'),
        },
        $inc: { passwordChangeRequests: 1 },
      }
    );
    await sendEmail(email, passwordCode, 'password');
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

      restrictionExpiresAt: document.restrictionExpiresAt,
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
  async function enabled_blocked(email) {
    //--|🠋 Move User from 'enabled' to 'blocked' 🠋|--\\
    const enabled = await database.collection('enabled').findOne({ email });
    if (!enabled) return; //--|🠈 Exit if the user doesn't exist in 'enabled' 🠈|--\\

    const blocked = await database.collection('blocked').findOne({ email }); //--|🠈 Check if the user already exists in 'blocked' 🠈|--\\
    if (!blocked) {
      //--|🠋 Insert the document into 'blocked' collection 🠋|--\\
      await database.collection('blocked').insertOne({
        _id: enabled._id, //--|🠈 Preserve the same ObjectId 🠈|--\\
        email: enabled.email,
        passwordHash: enabled.passwordHash,

        role: enabled.role,
        status: 'blocked',
        firstName: enabled.firstName,
        lastName: enabled.lastName,

        userIP: enabled.userIP,
        createdAt: enabled.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,

        restrictionExpiresAt: await createDate('tomorrow'),
      });

      //--|🠋 Delete the user from the 'enabled' collection 🠋|--\\
      await database.collection('enabled').deleteOne({ email });
    }
  }

  try {
    if (!user) {
      return res.status(200).json({ view: 'register', data: null });
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
          if (user.passwordChangeRequests === 3) {
            await enabled_blocked(email);
            let blockedDocument = await database.collection('blocked').findOne({ email });
            return res.status(200).json({
              view: 'blocked',
              data: blockedDocument,
            });
          } else {
            let flagRenewal = await verifyDate(user.passwordCodeExpiresAt);
            switch (flagRenewal) {
              case 'expired':
                await updateRenewal(email);
                return res.status(200).json({ view: 'reset', data: user });
              default:
                return res.status(200).json({ view: 'reset', data: user });
            }
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
              view: 'login',
              data: user,
            });
          }
      }
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Login Errors 🠈|--\\
  }
});
*/
export default createClass;
