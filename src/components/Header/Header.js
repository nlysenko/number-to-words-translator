/**
 *
 * Header
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createUseStyles } from 'react-jss'

import { toggleRu, toggleEn, toggleEnUs, toggleUk } from 'app/redux/actions'

import Flag from 'shared/Flag/Flag'

const useStyles = createUseStyles({
  header: {
    position: 'fixed',
    height: 60,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },

  container: {
    padding: [0, 15],
    margin: [0, 'auto'],
    maxWidth: 768,
  },

  navbar: {
    height: 60,
    display: 'flex',
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
              <Flag lang="ru" enabled={props.ru} toggleLang={switchRuLang} />
            </li>

            <li className={classes.item}>
              <Flag lang="en" enabled={props.en} toggleLang={switchEnLang} />
            </li>

            <li className={classes.item}>
              <Flag
                lang="en_us"
                enabled={props.en_us}
                toggleLang={switchEnUsLang}
              />
            </li>

            <li className={classes.item}>
              <Flag lang="uk" enabled={props.uk} toggleLang={switchUkLang} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const mapStateToProps = function(state) {
  return {
    ru: state.lang.ru,
    en: state.lang.en,
    en_us: state.lang.en_us,
    uk: state.lang.uk,
  }
}

const mapDispatchToProps = {
  toggleRu: toggleRu,
  toggleEn: toggleEn,
  toggleEnUs: toggleEnUs,
  toggleUk: toggleUk,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
