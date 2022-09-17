import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu Mono', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple[200]};
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.purple[600]} 0%,
      ${({ theme }) => theme.colors.purple[500]} 100%
    );
  }
`
