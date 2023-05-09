import React from 'react'
import { styleReset } from 'react95'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original'

/* Original Windows95 font (optional) */

type React95Provider = {
  children: React.ReactElement
}

const React95Provider = ({children}:React95Provider) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Wrapper>
        <div>{children}</div>
      </Wrapper>
    </ThemeProvider>
  </>
)

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  /* padding: 5rem; */
  background: ${({ theme }) => theme.desktopBackground};
`

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-weight: bold;
    font-style: normal;
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`

export default React95Provider