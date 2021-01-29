/**
 *
 * Main
 *
 */

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createUseStyles } from 'react-jss'

import { toggleEn, toggleEnUs, toggleRu, toggleUk } from 'app/redux/actions'

import Translation from 'shared/Translation/Translation'

import isValid from 'app/js/isValid'

import { colorAzureRadiance } from 'shared/constants'

const useStyles = createUseStyles({
  main: {
    paddingTop: 60,

    '@media (max-width: 736px)': {
      paddingTop: 40,
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

  wrapper: {
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
      fontFamily: ['Open Sans', 'sans-serif'],
    },
  },

  error: {
    color: 'red',
    paddingTop: 10,
  },

  result: {
    marginTop: 40,
  },
})

const Main = (props) => {
  const classes = useStyles()

  const [number, setNumber] = useState('')

  const { en, en_us, ru, uk } = props

  const switchEnLang = () => props.toggleEn()
  const switchEnUsLang = () => props.toggleEnUs()
  const switchRuLang = () => props.toggleRu()
  const switchUkLang = () => props.toggleUk()

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1 className={classes.title}>Translate Number</h1>

        <div className={classes.wrapper}>
          <label className={classes.control} htmlFor="number">
            Number
          </label>

          <input
            className={classes.number}
            type="text"
            id="number"
            autoFocus
            maxLength="24"
            placeholder="Insert the number"
            onInput={(event) => setNumber(event.target.value)}
          />

          {!isValid(number) ? (
            <p className={classes.error}>Invalid number format!</p>
          ) : (
            false
          )}
        </div>

        <div className={classes.result}>
          {en.enabled ? (
            <Translation
              number={number}
              languages={props}
              selectedLang="en"
              enabled={en.enabled}
              toggleLang={switchEnLang}
            />
          ) : (
            false
          )}

          {en_us.enabled ? (
            <Translation
              number={number}
              languages={props}
              selectedLang="en_us"
              enabled={en_us.enabled}
              toggleLang={switchEnUsLang}
            />
          ) : (
            false
          )}

          {ru.enabled ? (
            <Translation
              number={number}
              languages={props}
              selectedLang="ru"
              enabled={ru.enabled}
              toggleLang={switchRuLang}
            />
          ) : (
            false
          )}

          {uk.enabled ? (
            <Translation
              number={number}
              languages={props}
              selectedLang="uk"
              enabled={uk.enabled}
              toggleLang={switchUkLang}
            />
          ) : (
            false
          )}
        </div>
      </div>
    </main>
  )
}

const mapStateToProps = function(state) {
  return {
    en: state.en,
    en_us: state.en_us,
    ru: state.ru,
    uk: state.uk,
  }
}

const mapDispatchToProps = {
  toggleEn: toggleEn,
  toggleEnUs: toggleEnUs,
  toggleRu: toggleRu,
  toggleUk: toggleUk,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
