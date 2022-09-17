import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Game } from './pages/Game'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider {...{ theme }}>
      <Game />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
