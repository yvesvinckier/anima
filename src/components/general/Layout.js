import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/global'
import theme from '../../styles/theme'

import Nav from './Nav'
import WhiteHeader from './Header'

class Layout extends React.Component {
  render() {
    const children = this.props.children
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet>
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
          <WhiteHeader />
          <Nav />
          <main>{children}</main>
          <GlobalStyle />
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
