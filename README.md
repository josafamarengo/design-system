# Button Components

---

## Table of contents

- [General Info](#general-info)
- [Features](#features)
- [Technologies Used](#technologies-used-in-this-project)
- [Resources](#resources)
- [Demo](#demo)
  - [Screenshots](#screenshots)
  - [Live Site](#live-site)
  - [Run locally](#run-locally)
- [License](#license)
- [My Process](#my-process)
  - [What I learned](#what-i-learned)
  - [References](#references)
  - [Room for improvement](#room-for-improvement)
- [About Me](#author)

---

## General Info

This project is a reusable button with all the states in the design and a page displaying all the states.

## Features

- Optimal layout for the app depending device's screen size
- Search by name of the movie or serie
- Consuming The Movie Data Base's API

## Technologies used in this project:

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/JavaScript-20232a?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/HTML5-20232a?style=for-the-badge&logo=html5&logoColor=E34F26)
![](https://img.shields.io/badge/CSS3-20232a?style=for-the-badge&logo=css3&logoColor=1572b6)

## Resources:

- [The Movie Data Base API](https://www.themoviedb.org/documentation/api)

- [Google Fonts](https://fonts.google.com/)

## Demo

### Screenshots

![](https://via.placeholder.com/1200x600.png?text=Meu+Aplicativo)
![](https://via.placeholder.com/1200x600.png?text=Meu+Aplicativo)

### Live Site

To see the site click on button who says **NETLIFY**

[![Site](https://img.shields.io/badge/Netlify-20232a?style=for-the-badge&logo=netlify&logoColor=white)](https://streaming-site.netlify.app)

### Run locally

Clone this repo using:

```bash
git clone https://github.com/josafamarengo/streaming.git
```

or if you have a SSH token:

```bash
git clone git@github.com:josafamarengo/streaming.git
```

Go to the project directory

```bash
  cd streaming
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## License:

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://choosealicense.com/licenses/mit/)

## My Process

```bash
npm init -y
```

```bash
npm i -D react @types/react typescript
```

```bash
mkdir src

cd src

NUL>index.tsx
```

```bash
cd ..
```

```bash
npx tsc --init
```

```json
{
  // ========[ TSCONFIG ]===========

  "compilerOptions": {
    /* Language and Environment */
    "target": "es2016",
    /* "lib": ["DOM"], */
    "jsx": "react",

    /* Modules */
    "module": "commonjs",
    "moduleResolution": "node",
    "rootDirs": ["./src", "./stories"],

    /* Emit */
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,

    /* Type Checking */
    "strict": true,

    /* Completeness */

    "skipLibCheck": true
  }
}
```

```bash
mkdir components

cd components

mkdir Button

NUL>index.tsx

```

- @storybook/theming
- instalação do Styled-Components/Prettier/Stylelint
- Estilo global

### What I learned

### References

- [Bonieky Lacerda](https://www.youtube.com/watch?v=tBweoUiMsDg) - I used this video as the basis for my project.

### Room for Improvement

- Add trailer on each movie.
- Create a detail page for each movie.
- Add touch scrolling when using mobile devices.
- Add list, favorite and rating functionalities

## Author

### Pâmela Silveira

_Front End Developer_

<div align="right">
  <h3>
    <a href="#table-of-contents" >
      🔼 Go to top
    </a>
  </h3>
</div>

<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/pamm31">Pâmela Silveira</a>
</div>
