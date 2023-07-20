import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      Ignite Challenge 02 - @dwtoledo
      <GlobalStyle />
    </ThemeProvider>
  )
}
