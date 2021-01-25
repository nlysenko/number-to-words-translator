/**
 *
 * App
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Header from 'components/Header/Header'

const useStyles = createUseStyles({
  '@import':
    'url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap)',

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
      fontFamily: ['Source Sans Pro', 'sans-serif'],
      backgroundColor: 'white',
    },

    ul: {
      listStyle: 'none',
    },

    input: {
      font: 'inherit',
    },
  },
})

const App = () => {
  useStyles()

  return (
    <div className="app">
      <Header />
    </div>
  )
}

export default App
