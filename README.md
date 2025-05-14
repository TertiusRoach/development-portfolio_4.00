# Tertius Roach's [ Trinity {Apps\]](https://tertiusroach.github.io/development-portfolio_4.00/public/index.html)

---

<details>
        <summary><strong>Documentation</strong></summary>
        <ul>
            <li>
                <a href="#logical-breakdown">|🠋 Logical Breakdown 🠋|</a>
                <!--
                <ul>
                    <li><a href="#visual-studio-code">|🠊 Visual Studio Code 🠈|</a></li>
                </ul> -->
            </li>
            <!-- <br> -->
            <li>
                <a href="#terminal-commands">|🠋 Development Commands 🠋|</a>
                <ul>
                    <li><a href="#visual-studio-code">|🠊 Visual Studio Code 🠈|</a></li>
                </ul>
            </li>
            <!-- <br> -->
            <li>
                <a href="#application-installation">|🠋 Application Installation 🠋|</a>
                <ul>
                    <li><a href="#installation-breakdown">|🠊 Installation Breakdown 🠈|</a></li>
                </ul>
            </li>
            <!-- <br> -->
            <li>
                <a href="#back-end-development">|🠋 Back-end Development 🠋|</a>
                <ul>
                    <li><a href="#folder-structure-reference">|🠊 Folder Structure Reference 🠈|</a></li>
                    <li><a href="#visual-states">|🠊 Visual States 🠈|</a></li>
                </ul>
            </li>
            <br>
            <li>
                <a href="#page-links">|🠊 Page Links 🠈|</a>
            </li>
        </ul>
</details>

---

# Logical Breakdown

This project employs a refined system of visual states to orchestrate user attention and establish a clear hierarchy within your **source layout containers** folder.
The aforementioned containers resides inside of `source/layouts/container/` and includes the following `${blockName}`.

- `Overlay`
- `Leftbar`
- `Rightbar`

- `Header`
- `Main`
- `Footer`

These containers utilize the following HTML tags: `<header>`, `<section>`, `<main>`, `<aside>` and `<footer>`.

- `Overlay <section id="${pageName}-overlay">`
- `Leftbar <aside id="${pageName}-leftbar">`
- `Rightbar <aside id="${pageName}-rightbar">`

- `Header <header id="${pageName}-rightbar">`
- `Main <main id="${pageName}-rightbar">`
- `Footer <footer id="${pageName}-rightbar">`

These `${blockName}` keywords avoids any asynchronous overlapping when it comes to CSS styling.

# Terminal Commands

//--|🠋 Launch front-end 🠈|--//

    Open Terminal & type in...

> npm run app

//--|🠋 Launch back-end 🠈|--//

    Go to 'root\source\modules\server'
    Open Terminal & type in...

> nodemon landing

//--|🠋 Compile project into public 🠈|--//

> npm run deploy

//--|🠋 Launch testing environment 🠈|--//

> npm run launch

//--|🠋 Close testing environment 🠈|--//

> npm run stop

# Application Installation

Click on the top right green button with the text of "<> Code" and "Open with [Visual Studio](https://visualstudio.microsoft.com/)".
Install [Visual Studio Code](https://code.visualstudio.com/) or an editor of your choice along with [Node.js](https://nodejs.org/en).

> Full Terminal Setup

    npm install sass
    npm install mongoose
    npm install -g react
    npm install mailtrap
    npm install -g nodemon
    npm install nodemailer
    npm install -g typescript
    npm install -g webpack-cli
    npm install --save-dev cors
    npm install --save-dev axios
    npm install --save-dev jquery
    npm install --save-dev bcrypt
    npm install --save-dev dotenv
    npm install --save-dev express
    npm install --save-dev mongodb
    npm install --save-dev webpack
    npm install --save-dev kill-port
    npm install --save-dev react-dom
    npm install --save-dev bootstrap
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
    npm install --save-dev dotenv-webpack
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

> Install Webpack, REACT, SASS, jQuery and Server Tools

    npm install sass
    npm install mongoose
    npm install nodemailer
    npm install --save-dev jquery
    npm install --save-dev webpack
    npm install --save-dev react-dom
    npm install --save-dev bootstrap
    npm install --save-dev kill-port
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

> Install Server Dependencies

    npm install -g nodemon
    npm install --save-dev cors
    npm install --save-dev axios
    npm install --save-dev bcrypt
    npm install --save-dev dotenv
    npm install --save-dev express
    npm install --save-dev mongodb

> Install Loaders for Compiling

    npm install --save-dev ts-loader
    npm install --save-dev css-loader
    npm install --save-dev sass-loader
    npm install --save-dev file-loader
    npm install --save-dev style-loader

> Install Babel & Security

    npm install --save-dev babel-loader
    npm install --save-dev babel-preset-es2015
    npm install --save-dev @babel/preset-react
    npm install --save-dev @babel/preset-typescript
    npm install --save-dev extract-text-webpack-plugin
    npm install --save-dev @babel/core @babel/preset-env

> Install Server for Databases

    npm install mailtrap
    npm install mongoose
    npm install nodemailer
    npm install -g nodemon
    npm install --save-dev cors
    npm install --save-dev axios
    npm install --save-dev bcrypt
    npm install --save-dev dotenv
    npm install --save-dev express
    npm install --save-dev mongodb
    npm install --save-dev dotenv-webpack

---

## Visual Studio Code

//--|🠋 Collapse all folders in Primary Side Bar 🠈|--//

> Open Command Pallette: Ctrl + Shift + P
> Type "Collapse Folders in Explorer" + Enter

//--|🠋 The caret should be in the root scope of the Text Interface 🠈|--//

> Collapse Sections: Ctrl + K + 0

//--|🠋 Open Settings 🠈|--//

> Collapse Sections: Ctrl + ,

//--|🠋 Use this to see the props / callbacks it needs 🠈|--//

> Select Dropdown: Ctrl + SpaceBar

//--|🠋 This opens up automatically on your browser, I think it depends on your settings. 🠈|--//

> Open Run and Debug: Ctrl + Shift + D & F5

//--|🠋 Stop Server Inside Terminal 🠈|--//

> Open Appropriate Terminal: Ctrl + C

# [Back-end](https://github.com/TertiusRoach/development-portfolio_4.00/blob/main/source/modules/server/README.md) Development

You can find the [source code here](https://github.com/TertiusRoach/development-portfolio_4.00/tree/main/source/modules/server) and the full [tutorial playlist here](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA) for a deeper dive into [MongoDB](https://en.wikipedia.org/wiki/MongoDB). This documentation provides a concise overview of the steps involved in coding, implementing, testing, and running a MongoDB database connected to your project.

---

## Orchestrating Visibility

The '&' icon looks like a dog scratching its anus.

`.active` & `.asleep`

`.visible` & `.hidden`

`.expanded` & `.collapsed`

`.highlight` & `.downplay`

## Track a Day

`.freelancing` & `.established`

> light & dark

## Log a Ticket

`.manager` & `.employee`

> dark & light

## Find a Link

`.supervisor` & `.technician`

> light & dark

---

# Vertical Layout

`.apple` & `.android`
`.google` & `.microsoft`
`.planet-fitness` & `.anytime-fitness`

---

## Reviewed Notes

//--|[🠊](https://www.compart.com/en/unicode/U+1F80A) _ [🠈](https://www.compart.com/en/unicode/U+1F808)|--//
//--|[🠋](https://www.compart.com/en/unicode/U+1F80B) _ [🠋](https://www.compart.com/en/unicode/U+1F80B)|--//
//--|[🠈](https://www.compart.com/en/unicode/U+1F808) _ [🠈](https://www.compart.com/en/unicode/U+1F808)|--//
//--|[🠉](https://www.compart.com/en/unicode/U+1F809) _ [🠉](https://www.compart.com/en/unicode/U+1F809)|--//

## Integrated HTML Navigation

## Page Links

[Index Page](https://tertiusroach.github.io/development-portfolio_4.00/public/index/index.html)

[My Portfolio](https://tertiusroach.github.io/development-portfolio_4.00/public/resume/index.html)

[Log a Ticket](https://tertiusroach.github.io/development-portfolio_4.00/public/ticket/index.html)

[Univer Track](https://tertiusroach.github.io/development-portfolio_4.00/public/university/index.html)

[Journal Fits](https://tertiusroach.github.io/development-portfolio_4.00/public/fitness/index.html)

## Folder Structure

```bash
root/
├── .vscode/
│   └── launch.json
├── public/ # Final product for users
│   ├── index.css
│   ├── index.js
│   └── index.html
├── source/
│   ├── assets/
│   │   ├── gif-files/
│   │   ├── svg-files/
│   │   └── png-files/
│   ├── layouts/
│   │   ├── containers/
│   │   ├── components/
│   │   ├── designs/
│   │   ├── styles/
│   │   └── pages/
│   ├── modules/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── server/
│   │   └── tools/
│   ├── utilities/
│   │   ├── ~flex-setup/
│   │   ├── ~grid-setup/
│   │   ├── animations/
│   │   ├── projects/
│   │   └── vendors/
│   ├── index.html
│   ├── index.scss
│   └── index.tsx
├── README.md
├── .gitignore
├── package.json
├── tsconfig.json
├── package-lock.json
└── webpack.config.js
```
