/**
 *
 * Header
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createUseStyles } from 'react-jss'

import { toggleEn, toggleEnUs, toggleRu, toggleUk } from 'app/redux/actions'

import Flag from 'shared/Flag/Flag'

const useStyles = createUseStyles({
  header: {
    height: 80,
  },

  container: {
    padding: [0, 15],
    margin: [0, 'auto'],
    maxWidth: 768,
  },

  navbar: {
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  list: {
    display: 'flex',
  },

  item: {
    padding: [0, 40],

    '@media (max-width: 736px)': {
      padding: [0, 15],
    },

    '@media (max-width: 320px)': {
      padding: [0, 7],
    },
  },
})

const Header = (props) => {
  const switchRuLang = () => props.toggleRu()
  const switchEnLang = () => props.toggleEn()
  const switchEnUsLang = () => props.toggleEnUs()
  const switchUkLang = () => props.toggleUk()

  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <nav className={classes.navbar}>
          <ul className={classes.list}>
            <li className={classes.item}>
              <Flag
                lang="en"
                enabled={props.enIsEnabled}
                toggleLang={switchEnLang}
              />
            </li>

            <li className={classes.item}>
              <Flag
                lang="en_us"
                enabled={props.enUsIsEnabled}
                toggleLang={switchEnUsLang}
              />
            </li>

            <li className={classes.item}>
              <Flag
                lang="ru"
                enabled={props.ruIsEnabled}
                toggleLang={switchRuLang}
              />
            </li>

            <li className={classes.item}>
              <Flag
                lang="uk"
                enabled={props.ukIsEnabled}
                toggleLang={switchUkLang}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const mapStateToProps = function(state) {
  return {
    enIsEnabled: state.en.enabled,
    enUsIsEnabled: state.en_us.enabled,
    ruIsEnabled: state.ru.enabled,
    ukIsEnabled: state.uk.enabled,
  }
}

const mapDispatchToProps = {
  toggleEn: toggleEn,
  toggleEnUs: toggleEnUs,
  toggleRu: toggleRu,
  toggleUk: toggleUk,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
