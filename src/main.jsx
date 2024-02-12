import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {extendTheme,ChakraProvider, ColorModeScript, useColorMode} from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'


const config = {
  initialColorMode: "light",
  useSystemColorMode: false
}

const styles = {
  global: props => ({
    body:{
      bg: mode("#DED0B6","#393053")(props)
    }
  })
}

const components = {
  Button: {
    variants:{
      primary: props => ({
        bg: mode("#BBAB8C","#18122B")(props)
      }),
      changeMode: props => ({
        bg: mode("#6c44c4 ","#fccc84")(props)
      })
    }
  }}



const fonts = {
  body:"'Varela Round'",
  heading:"'Varela Round'"
}

const theme = extendTheme({config,styles,components, fonts})


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
      <App />
    </React.StrictMode>
  </ChakraProvider>
)
