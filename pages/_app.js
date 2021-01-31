import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  h1, h2, h3, h4, h5, h6{
    color: ${({ theme }) => theme.colors.contrastText};
  }
  .ant-modal-body {
    overflow-y: auto;
    height: 420px;
    background: transparent;
}
.ant-modal-header, 
.ant-modal-title{
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-bottom: none;  
}
.ant-modal-close-x{
  color: ${({ theme }) => theme.colors.contrastText};
}
.ant-modal-content{
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.contrastText};
}

::-webkit-scrollbar-thumb {
  background: #888; 
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
.ant-card-body {
    padding: 14px;
}
.ant-card-meta-title{
  color: ${({ theme }) => theme.colors.contrastText};
  margin-top: 5px;
  font-size: 1.5em;
}
`

const theme = db.theme;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="react.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App