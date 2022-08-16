# My First Design System


## Table of contents

- [General Info](#general-info)
- [Technologies Used](#technologies-used-in-this-project)
- [License](#license)
- [My Process](#my-process)
  - [What I learned](#what-i-learned)
  - [References](#references)
- [About Me](#author)

---

## General Info

This project is a reusable components  and visual identidy, with all the states in the design and a page displaying all the states.

## Technologies used in this project:

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/TypeScript-20232a?style=for-the-badge&logo=typescript&logoColor=1572b6)
![](https://img.shields.io/badge/Storybook-20232a?style=for-the-badge&logo=storybook&logoColor=pink)

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

- [Storybook Docs](https://storybook.js.org/docs/react/get-started/introduction) - Storybook documentation.
- [Styled Components](https://styled-components.com/docs/basics#installation) - Styled Components documentation.
- [Prettier Docs](https://prettier.io/docs/en/install.html) - Prettier documentation.
- [Stylelint Docs](https://stylelint.io/user-guide/get-started/) - Stylelint documentation.
- [Como documentar códigos? Documentando Front End com Storybook!](https://www.youtube.com/watch?v=R41_Qedrzik) - Vídeo do canal Dev Soutinho.
- [UI Kit com Storybook e React JS](https://www.youtube.com/watch?v=5mHdsqIFMZE) - Vídeo do canal dogcode.
- [UI Kit com React e Storybook](https://www.youtube.com/watch?v=j0MCdrqN8nU) - Vídeo do canal Rocketseat.

## Author

### Josafá Marengo

_Front End Developer_

<div align="right">
  <h3>
    <a href="#table-of-contents" >
      🔼 Go to top
    </a>
  </h3>
</div>

<div align="center">
  <sub>Built with ❤︎ by <a href="https://josafa.com.br">Josafá Marengo</a>
</div>
