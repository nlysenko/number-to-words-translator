/**
 *
 * App
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Header from 'components/Header/Header'
import Main from 'components/Main/Main'

const useStyles = createUseStyles({
  '@import':
    'url(https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&family=Open+Sans&display=swap)',

  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },

    html: {
      boxSizing: 'border-box',
    },

    body: {
      color: 'black',
      fontSize: 16,
      fontFamily: ['Open Sans', 'sans-serif'],
      backgroundColor: 'white',
    },

    ul: {
      listStyle: 'none',
    },
  },
})

const App = () => {
  useStyles()

  return (
    <div className="app">
      <Header />

      <Main />
    </div>
  )
}

export default App
