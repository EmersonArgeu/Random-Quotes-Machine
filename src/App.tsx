import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { CardQuote } from './components/CardQuote/index'
import { defaultTheme } from './styles/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CardQuote />
      <GlobalStyle />
    </ThemeProvider>
  )
}
