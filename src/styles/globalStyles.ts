import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: var(--font-family-inter);
  }

  :root {
    --color-brand-100: #5B21FF;
    --color-brand-200: #242345;
    --color-grey-100: #333333;
    --color-grey-200: #555555;
    --color-grey-300: #DDDDDD;
    --color-grey-400: #EEEEEE;
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-okay: #45FF26;
    --color-alert: #FF3838;

    --radius: 8px;
  
    --font-family-inter: 'Inter', sans-serif;
    --font-family-montserrat: 'Montserrat', sans-serif;
    --font-family-racing-sans-one: 'Racing Sans One', cursive;

    --text-logo-size: 3rem;

    --text-title-size-100: 3.5rem;
    --text-title-size-200: 2.25rem;
    --text-title-size-300: 2rem;

    --text-button-size-100: 1.25rem;
    --text-button-size-200: 1rem;

    --text-size-100: 1.5rem;
    --text-size-200: 1.25rem;
    --text-size-300: 1rem;
    --text-size-400: .875rem;
    --text-size-500: .75rem;

    --text-status-size: 1.5rem;
    --text-placeholder-size: 1rem;

    --text-weight-100: 700;
    --text-weight-200: 700;
    --text-weight-300: 500;
    --text-weight-400: 400;
    --text-weight-500: 300;

  }

  body {
    padding: 0 20px;
  }
`;

export const MainContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
