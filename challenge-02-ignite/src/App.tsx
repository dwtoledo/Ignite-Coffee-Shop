import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      Ignite Challenge 02 - @dwtoledo
    </ThemeProvider>
  )
}
