import { createGlobalStyle } from 'styled-components';

// https://piccalil.li/blog/a-modern-css-reset/

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-dark: 230 35% 7%;
    --clr-light: 231 77% 90%;
    --clr-white: 0 0% 100%;
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body,
  h1,
  h2, 
  h3, 
  h4, 
  h5, 
  h6, 
  p, 
  figure, 
  picture {
    margin: 0;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;
    min-height: 100vh;
    background: hsl(var(--clr-dark))
  }

  // Make images easier to work with

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  // Make forms easier to work with

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  // Remove animations form people who've turned them off

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /////////////////////
  // Utility Classes //
  /////////////////////
    
  .flex {
      display: flex;
      gap: var(--gap, 1rem)
  }

  .grid {
      display: grid;
      gap: var(--gap, 1rem)
  }

  .container {
    padding-inline: 2rem;
    margin-inline: auto;
    max-width: 80rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; // added line //
    border: 0;
  }

  .box {
    background: lightblue;
    padding: 3rem;
  }

  .cta {
    --gap: 5rem;
    background: pink;
    padding: 2rem,
    border-radius: 1rem;
  }

  // Colors //

  .bg-dark { background-color: hsl( var(--clr-dark) ); }

  .bg-accent { background-color: hsl( var(--clr-light) ); }
  
  .bg-white { background-color: hsl( var(--clr-white) ); }

  .text-dark { color: hsl( var(--clr-dark) ); }

  .text-accent { color: hsl( var(--clr-light) ); }

  .text-white { color: hsl( var(--clr-white) ); }

  .example-component {
    background-color: hsl( var(--clr-light) / .2 );
  }
`;

export default GlobalStyle;
