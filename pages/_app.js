import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import { SWRConfig } from 'swr'
import { AuthProvider } from '#lib/auth'
import theme from '#styles/theme'

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then(res => res.json()),
      }}
    >
      <ChakraProvider resetCSS theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </SWRConfig>
  )
}

export default MyApp
