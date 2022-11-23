import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    /* border: 1px solid white; */
  }

  html {
      font-size: 62.5%;
      overflow:auto;
      scroll-behavior: smooth;
  }

  body {
    font-family: "Poppins", sans-serif;
    padding: 1rem;
    box-sizing: border-box;
    overflow: hidden;
  }
h1 {
  font-weight: 800;
  font-size: 4rem;
  line-height: 4.2rem;
  }

p {
  font-weight: 800;
  font-size: 2.1rem;
  line-height: 2.4rem;
  font-style: italic;
}
`;
