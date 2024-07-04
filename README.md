# Folder Structure

`
plaintext
root/

    ├── .vscode/

    │   └── launch.json

    │

    ├── public/ # Final product for users

    │   ├── index.css # Compiled CSS file

    │   ├── index.js # Compiled JavaScript file

    │   └── index.html # Entry point for the application

    │

    ├── source/

    │   ├── assets/ # Images used by pages

    |   |

    │   ├── layouts/

    │   |   ├── components/ # Reusable HTML components

    │   |   │   ├── Button/ # Contains <button> HTML elements

    │   |   │   │   ├── fade/

    │   |   │   │   │   ├── Button.fade.scss

    │   |   │   │   │   └── Button.fade.tsx

    │   |   │   │   ├── glow/

    │   |   │   │   │   ├── Button.glow.scss

    │   |   │   │   │   └── Button.glow.tsx

    │   |   │   │   └── ...etc

    │   |   │   ├── Section/ # Contains <section> HTML elements

    │   |   │   │   ├── contact/

    │   |   │   │   │   ├── Section.contact.scss

    │   |   │   │   │   └── Section.contact.tsx

    │   |   │   │   ├── home/

    │   |   │   │   │   ├── Section.home.scss

    │   |   │   │   │   └── Section.home.tsx

    │   |   │   │   ├── skills/

    │   |   │   │   │   ├── Section.skills.scss

    │   |   │   │   │   └── Section.skills.tsx

    │   |   │   │   └── ...etc/

    │   |   │   └── ...etc/

    │   |   └── containers/ # Reusable HTML containers

    │   |       ├── Footer/ # <footer style="z-index: 3;">

    │   |       │   └── IndextFooter/ # Contains the default files for the selected page

    │   |       │       ├──DefaultFooter.scss

    │   |       │       └──DefaultFooter.tsx

    │   |       ├── Header/ # <header style="z-index: 4;">

    │   |       │   └── IndexHeader/ # Contains DefaultHeader.scss and DefaultHeader.tsx

    │   |       │       ├──DefaultHeader.scss

    │   |       │       └──DefaultHeader.tsx

    │   |       ├── Leftbar/ # <aside style="z-index: 2;">

    │   |       │   └── IndexLeftbar/ # Contains DefaultLeftbar.scss and DefaultLeftbar.tsx

    │   |       │       ├──DefaultLeftbar.scss

    │   |       │       └──DefaultLeftbar.tsx

    │   |       ├── Main/ # <main style="z-index: 0;">

    │   |       │   └── IndexMain/ # Contains DefaultMain.scss and DefaultMain.tsx

    │   |       │       ├──DefaultMain.scss

    │   |       │       └──DefaultMain.tsx

    │   |       ├── Overlay/ # <section style="z-index: 5">

    │   |       │   └── IndexOverlay/ # Contains DefaultOverlay.scss and DefaultOverlay.tsx

    │   |       │       ├──DefaultOverlay.scss

    │   |       │       └──DefaultOverlay.tsx

    │   |       └── Rightbar/ # <aside style="z-index: 1;">

    │   │           └── IndexRightbar/ # Contains DefaultRightbar.scss and DefaultRightbar.tsx

    │   |               ├──DefaultRightbar.scss

    │   |               └──DefaultRightbar.tsx

    │   │

    │   ├── modules/ # Reusable logic and utilities

    │   │   ├── api/ # API service modules

    │   │   └── utilities/ # Utility functions

    │   │

    │   ├── pages/ # Dynamic React, Sass, and TypeScript pages

    │   │   └── index.html # Main HTML page

    │   │

    │   ├── scripts/ # TypeScript files for handling callbacks

    │   │   └── index.ts

    │   │

    |   ├── server/

    │   |   ├── data/ # Contains files that communicate with the database

    │   |   └── hooks/ # Contains backend framework code (if applicable)

    |   |

    │   ├── styles/ # Global styling for the application

    │   │   └── index.scss

    │   │

    │   ├── tools/ # Projects used as reference

    │   └── index.tsx # Entry point file linked to the HTML, calling scripts/ to load the application

    │

    ├── README.md

    ├── .gitignore

    ├── package.json

    ├── tsconfig.json

    ├── package-lock.json

    └── webpack.config.js`
