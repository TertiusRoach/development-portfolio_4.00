# Run the Application after Installation

//--|🠋 Starts the testing environment. 🠈|--//

> npm run launch

//--|🠋 Compiles project into public. 🠈|--//

> npm run deploy

---

# Install for Local Development Testing

Click on the top right green button with the text of "<> Code" and "Open with [Visual Studio](https://visualstudio.microsoft.com/)".
Install [Visual Studio Code](https://code.visualstudio.com/) or an editor of your choice along with [Node.js](https://nodejs.org/en).

> Full Terminal Setup

    npm install -g react
    npm install -g typescript
    npm install -g webpack-cli
    npm install --save-dev sass
    npm install --save-dev jquery
    npm install --save-dev webpack
    npm install --save-dev react-dom
    npm install --save-dev bootstrap
    npm install --save-dev node-sass
    npm install --save-dev ts-loader
    npm install -g webpack-dev-server
    npm install --save-dev css-loader
    npm install --save-dev sass-loader
    npm install --save-dev file-loader
    npm install --save-dev webpack-cli
    npm install --save-dev style-loader
    npm install --save-dev babel-loader
    npm install --save-dev @types/react
    npm install --save-dev @types/jquery
    npm install --save-dev @types/react-dom
    npm install --save-dev react-responsive
    npm install --save-dev webpack-dev-server
    npm install --save-dev copy-webpack-plugin
    npm install --save-dev html-webpack-plugin
    npm install --save-dev babel-preset-es2015
    npm install --save-dev @babel/preset-react
    npm install --save-dev terser-webpack-plugin
    npm install --save-dev mini-css-extract-plugin
    npm install --save-dev @babel/preset-typescript
    npm install --save-dev extract-text-webpack-plugin
    npm install --save-dev css-minimizer-webpack-plugin
    npm install --save-dev @babel/core @babel/preset-env

## Installation Breakdown

Entry Point: source/index.tsx |🠊 source/layouts/containers/Main/IndexMain/IndexMain.tsx |🠊 layouts/components/Section/**default**/[Section.**default**.tsx](https://github.com/TertiusRoach/development-portfolio_4.00/blob/main/source/layouts/containers/Main/IndexMain/IndexMain.tsx) | \*.scss

> Verify [Node.js](https://nodejs.org/en) inside the terminal

    node --version

> Initialize Package

    npm init -y

> Install Webpack Globally (Onto Operating System)

    npm install -g react
    npm install -g typescript
    npm install -g webpack-cli
    npm install -g webpack-dev-server

> Install Webpack, REACT, SASS and jQuery Tools

    npm install --save-dev sass
    npm install --save-dev jquery
    npm install --save-dev webpack
    npm install --save-dev react-dom
    npm install --save-dev bootstrap
    npm install --save-dev node-sass
    npm install --save-dev webpack-cli
    npm install --save-dev @types/react
    npm install --save-dev @types/jquery
    npm install --save-dev @types/react-dom
    npm install --save-dev react-responsive
    npm install --save-dev webpack-dev-server
    npm install --save-dev copy-webpack-plugin
    npm install --save-dev html-webpack-plugin
    npm install --save-dev terser-webpack-plugin
    npm install --save-dev mini-css-extract-plugin
    npm install --save-dev css-minimizer-webpack-plugin

> Install Loaders

    npm install --save-dev ts-loader
    npm install --save-dev css-loader
    npm install --save-dev sass-loader
    npm install --save-dev file-loader
    npm install --save-dev style-loader

> Install Babel

    npm install --save-dev babel-loader
    npm install --save-dev babel-preset-es2015
    npm install --save-dev @babel/preset-react
    npm install --save-dev @babel/preset-typescript
    npm install --save-dev extract-text-webpack-plugin
    npm install --save-dev @babel/core @babel/preset-env

---

# Database Development for MongoDB

You can find the [source code here](https://github.com/TertiusRoach/development-portfolio_4.00/tree/main/source/layouts/containers/Main/LandingMain) and the full [tutorial playlist here](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA) for a deeper dive into [MongoDB](https://en.wikipedia.org/wiki/MongoDB). This documentation provides a concise overview of the steps involved in coding, implementing, testing, and running a MongoDB database connected to your project.

---

# Folder Structure to Reference Storage

This is the structure I will use going forward.

    root/

    │

    ├── .vscode/

    │ └── launch.json

    │

    ├── public/ # Final product for users

    │ ├── index.css # Compiled CSS file

    │ ├── index.js # Compiled JavaScript file

    │ └── index.html # Entry point for the application

    │

    ├── source/

    │ ├── assets/ # Images used by pages

    | |

    │ ├── layouts/

    │ | ├── components/ # Reusable HTML components

    │ | │ ├── Button/ # Contains <button> HTML elements

    │ | │ │ ├── fade/

    │ | │ │ │ ├── Button.fade.scss

    │ | │ │ │ └── Button.fade.tsx

    │ | │ │ ├── glow/

    │ | │ │ │ ├── Button.glow.scss

    │ | │ │ │ └── Button.glow.tsx

    │ | │ │ └── ...etc

    │ | │ ├── Section/ # Contains <section> HTML elements

    │ | │ │ ├── contact/

    │ | │ │ │ ├── Section.contact.scss

    │ | │ │ │ └── Section.contact.tsx

    │ | │ │ ├── home/

    │ | │ │ │ ├── Section.home.scss

    │ | │ │ │ └── Section.home.tsx

    │ | │ │ ├── skills/

    │ | │ │ │ ├── Section.skills.scss

    │ | │ │ │ └── Section.skills.tsx

    │ | │ │ └── ...etc/

    │ | │ └── ...etc/

    │ | └── containers/ # Reusable HTML containers

    │ | ├── Footer/ # <footer style="z-index: 3;">

    │ | │ └── IndexFooter/ # Contains the default files for the selected page

    │ | │ ├──DefaultFooter.scss

    │ | │ └──DefaultFooter.tsx

    │ | ├── Header/ # <header style="z-index: 4;">

    │ | │ └── IndexHeader/ # Contains DefaultHeader.scss and DefaultHeader.tsx

    │ | │ ├──DefaultHeader.scss

    │ | │ └──DefaultHeader.tsx

    │ | ├── Leftbar/ # <aside style="z-index: 2;">

    │ | │ └── IndexLeftbar/ # Contains DefaultLeftbar.scss and DefaultLeftbar.tsx

    │ | │ ├──DefaultLeftbar.scss

    │ | │ └──DefaultLeftbar.tsx

    │ | ├── Main/ # <main style="z-index: 0;">

    │ | │ └── IndexMain/ # Contains DefaultMain.scss and DefaultMain.tsx

    │ | │ ├──DefaultMain.scss

    │ | │ └──DefaultMain.tsx

    │ | ├── Overlay/ # <section style="z-index: 5">

    │ | │ └── IndexOverlay/ # Contains DefaultOverlay.scss and DefaultOverlay.tsx

    │ | │ ├──DefaultOverlay.scss

    │ | │ └──DefaultOverlay.tsx

    │ | └── Rightbar/ # <aside style="z-index: 1;">

    │ │ └── IndexRightbar/ # Contains DefaultRightbar.scss and DefaultRightbar.tsx

    │ | ├──DefaultRightbar.scss

    │ | └──DefaultRightbar.tsx

    │ │

    │ ├── modules/ # Reusable logic and utilities

    │ │ ├── routes/ # API service modules

    │ │ └── utilities/ # Utility functions

    │ │

    │ ├── pages/ # Dynamic React, Sass, and TypeScript pages

    │ │ └── index.html # Main HTML page

    │ │

    │ ├── scripts/ # TypeScript files for handling callbacks

    │ │ └── index.ts

    │ │

    | ├── server/

    │ | ├── data/ # Contains files that communicate with the database

    │ | └── hooks/ # Contains backend framework code (if applicable)

    | |

    │ ├── styles/ # Global styling for the application

    │ │ └── index.scss

    │ │

    │ ├── tools/ # Projects used as reference

    │ └── index.tsx # Entry point file linked to the HTML, calling scripts/ to load the application

    │

    ├── README.md

    ├── .gitignore

    ├── package.json

    ├── tsconfig.json

    ├── package-lock.json

    └── webpack.config.js

---

---

## Reviewed Notes

//--|[🠊](https://www.compart.com/en/unicode/U+1F80A) _ [🠈](https://www.compart.com/en/unicode/U+1F808)|--//
//--|[🠋](https://www.compart.com/en/unicode/U+1F80B) _ [🠋](https://www.compart.com/en/unicode/U+1F80B)|--//
//--|[🠈](https://www.compart.com/en/unicode/U+1F808) _ [🠈](https://www.compart.com/en/unicode/U+1F808)|--//
//--|[🠉](https://www.compart.com/en/unicode/U+1F809) _ [🠉](https://www.compart.com/en/unicode/U+1F809)|--//

## Class Toggles

    .active

    .enabled / .disabled

    .expanded / .collapsed

    .highlight / .downplay

## Keyboard Shortcuts

//--|🠋 The caret should be in the root scope of the Text Interface 🠈|--//

> Collapse Sections: Ctrl + K + 0

//--|🠋 Use this to see the props / callbacks it needs 🠈|--//

> Select Dropdown: Ctrl + SpaceBar

//--|🠋 This opens up automatically on your browser, I think it depends on your settings. 🠈|--//

> Open Run and Debug: Ctrl + Shift + D & F5

## Integrated HTML Navigation

<details>
  <summary>Development Portfolio</summary>
  <ol>
    <li>
      <ul>
        <li><a href="#Installation"><h1>Built With JavaScript, TypeScript, HTML, REACT, SASS, Bootstrap and Node.js</h1></a></li>
        <li><a href="#Breakdown"><h1>Built With JavaScript, TypeScript, HTML, REACT, SASS, Bootstrap and Node.js</h1></a></li>
      </ul>
    </li>
  </ol>
</details>

## Page Links

[Index Page](https://tertiusroach.github.io/development-portfolio_4.00/public/index/index.html)

[My Portfolio](https://tertiusroach.github.io/development-portfolio_4.00/public/resume/index.html)

[Log a Ticket](https://tertiusroach.github.io/development-portfolio_4.00/public/ticket/index.html)

[Univer Track](https://tertiusroach.github.io/development-portfolio_4.00/public/university/index.html)

[Journal Fits](https://tertiusroach.github.io/development-portfolio_4.00/public/fitness/index.html)

---

---
