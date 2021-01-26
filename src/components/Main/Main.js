/**
 *
 * Main
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { colorAzureRadiance } from 'shared/constants'

const useStyles = createUseStyles({
  main: {
    paddingTop: 140,

    '@media (max-width: 736px)': {
      paddingTop: 80,
    },
  },

  container: {
    padding: [0, 15],
    margin: [0, 'auto'],
    maxWidth: 768,
  },

  title: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: ['Nanum Gothic', 'sans-serif'],

    '@media (max-width: 736px)': {
      fontSize: 32,
    },
  },

  number_fild: {
    marginTop: 50,
    position: 'relative',
    height: 65,
  },

  control: {
    position: 'absolute',
    top: -9,
    left: 15,
    backgroundColor: 'white',
    display: 'inline-block',
    padding: [0, 7],
    font: {
      size: 14,
      family: ['Nanum Gothic', 'sans-serif'],
    },
  },

  number: {
    width: '100%',
    height: 52,
    fontFamily: ['Nanum Gothic', 'sans-serif'],
    padding: [5, 15],
    fontSize: 26,
    border: {
      width: 1,
      style: 'solid',
      color: 'black',
      radius: 3,
    },

    '&:focus': {
      outline: 'none',
      border: {
        color: colorAzureRadiance,
      },
      boxShadow: [`0 0 5px 1px ${colorAzureRadiance}`],
    },

    '&::placeholder': {
      fontFamily: ['Source Sans Pro', 'sans-serif'],
    },
  },
})

const Main = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1 className={classes.title}>Translate Number</h1>

        <div className={classes.number_fild}>
          <label className={classes.control} htmlFor="number">
            Number
          </label>

          <input
            className={classes.number}
            type="text"
            id="number"
            placeholder="Insert the number"
          />
        </div>
      </div>
    </main>
  )
}

export default Main
