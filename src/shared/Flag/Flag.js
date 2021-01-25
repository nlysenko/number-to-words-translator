/**
 *
 * Flag
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { colorAzureRadiance } from 'shared/constants'

import flags from 'assets/img/flags.png'

const shadow = [`0 0 10px 3px ${colorAzureRadiance}`]

const useStyles = createUseStyles({
  flag: {
    display: 'block',
    width: 46,
    height: 34,
    cursor: 'pointer',
    background: [`url(${flags})`, 'no-repeat'],

    '&:hover': {
      boxShadow: shadow,
    },
  },

  hidden: {
    display: 'none',
  },
})

const useLangStyles = (lang) => {
  switch (lang) {
    case 'ru':
      return createUseStyles({
        enabled: {
          backgroundPosition: [[-145, -55]],
          boxShadow: shadow,
        },

        disabled: {
          backgroundPosition: [[-145, -7]],
        },
      })

    case 'en':
      return createUseStyles({
        enabled: {
          backgroundPosition: [[-1, -55]],
          boxShadow: shadow,
        },

        disabled: {
          backgroundPosition: [[-1, -7]],
        },
      })

    case 'en_us':
      return createUseStyles({
        enabled: {
          backgroundPosition: [[-73, -55]],
          boxShadow: shadow,
        },

        disabled: {
          backgroundPosition: [[-73, -7]],
        },
      })

    case 'uk':
      return createUseStyles({
        enabled: {
          backgroundPosition: [[-217, -55]],
          boxShadow: shadow,
        },

        disabled: {
          backgroundPosition: [[-217, -7]],
        },
      })

    default:
      break
  }
}

const Flag = (props) => {
  const { lang, enabled, toggleLang } = props

  const classes = useStyles()
  const language = useLangStyles(lang)()

  return (
    <label
      className={`${classes.flag} ${
        enabled ? language.enabled : language.disabled
      }`}
      htmlFor={lang}
    >
      <input
        className={classes.hidden}
        type="checkbox"
        id={lang}
        checked={enabled}
        onChange={toggleLang}
      />
    </label>
  )
}

export default Flag
