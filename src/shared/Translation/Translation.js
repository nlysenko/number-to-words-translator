/**
 *
 * Translation
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Flag from 'shared/Flag/Flag'

import translateNumber from 'app/js/translateNumber'

const useStyles = createUseStyles({
  translation: {
    marginTop: 25,
    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 420px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },

  result: {
    paddingLeft: 15,

    '@media (max-width: 420px)': {
      padding: [5, 0],
    },

    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
})

const Translation = (props) => {
  const { number, languages, selectedLang, enabled, toggleLang } = props

  const classes = useStyles()

  const result = translateNumber(number, languages, selectedLang)

  return result ? (
    <div className={classes.translation}>
      <div>
        <Flag lang={selectedLang} enabled={enabled} toggleLang={toggleLang} />
      </div>

      <div>
        <p className={classes.result}>{result}</p>
      </div>
    </div>
  ) : (
    false
  )
}

export default Translation
