# Installation

Open with [Visual Studio](https://visualstudio.microsoft.com/) by clicking on the green button with "<> Code" on it.
Install [Visual Studio Code](https://code.visualstudio.com/) or an editor of your choice along with [Node.js](https://nodejs.org/en)

> Full Terminal Setup

    npm install -g react
    npm install -g typescript
    npm install -g webpack-cli
    npm install -g webpack-dev-server
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
    npm install --save-dev ts-loader
    npm install --save-dev css-loader
    npm install --save-dev sass-loader
    npm install --save-dev file-loader
    npm install --save-dev style-loader
    npm install --save-dev babel-loader
    npm install --save-dev babel-preset-es2015
    npm install --save-dev @babel/preset-react
    npm install --save-dev @babel/preset-typescript
    npm install --save-dev extract-text-webpack-plugin
    npm install --save-dev @babel/core @babel/preset-env

---

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

# Keyboard Shortcuts

    Open Run and Debug: Ctrl + Shift + D & F5
    Collapse Sections: Ctrl + K + 0
    Select Dropdown: Ctrl + Spacebar

# Design Decoumentation

//--| [🠉](https://www.compart.com/en/unicode/U+1F809) |--//
//--| [🠊](https://www.compart.com/en/unicode/U+1F80A) |--//
//--| [🠋](https://www.compart.com/en/unicode/U+1F80B) |--//
//--| [🠈](https://www.compart.com/en/unicode/U+1F808) |--//

//--|🠉 _ 🠉|--//
//--|🠊 _ 🠈|--//
//--|🠋 _ 🠋|--//
//--|🠈 _ 🠈|--//

# Terminology classNames

    .active

    .enabled / .disabled

    .expanded / .collapsed

    .highlight / .downplay

# [Index Page](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)

# [My Portfolio](https://tertiusroach.github.io/development-portfolio_4.00/public/resume.html)

# [Log a Ticket](https://tertiusroach.github.io/development-portfolio_4.00/public/ticket.html)

# [Univer Track](https://tertiusroach.github.io/development-portfolio_4.00/public/university.html)

# [Journal Fits](https://tertiusroach.github.io/development-portfolio_4.00/public/fitness.html)

<!-- // https://tertiusroach.github.io/log-a-ticket_6.00/dist/index.html
// https://tertiusroach.github.io/university-tracker_2.00/dist/index.html -->
<details>
  <summary>Development Portfolio</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with"><h1>Built With JavaScript, TypeScript, HTML, REACT, SASS, Bootstrap and Node.js</h1></a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#Installation">Installation</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

# Folder Structure

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

    │ | │ └── IndextFooter/ # Contains the default files for the selected page

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

    │ │ ├── api/ # API service modules

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
