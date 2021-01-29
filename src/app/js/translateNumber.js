/**
 *
 * translateNumber
 *
 */

import model from 'app/js/model'
import isValid from 'app/js/isValid'
import splitNumber from 'app/js/splitNumber'
import translateThreeDigitNumber from 'app/js/translateThreeDigitNumber'

const translateNumber = (num, languages, selectedLang) => {
  if (!isValid(num)) {
    return ''
  }

  let words = null
  let fixCases = null

  if (Object.keys(languages[selectedLang]).indexOf('words') !== -1) {
    words = languages[selectedLang].words

    if (selectedLang === 'ru') {
      fixCases = model.ru.fixCases
    } else if (selectedLang === 'uk') {
      fixCases = model.uk.fixCases
    }
  } else return ''

  let translation = ''
  let numArray = splitNumber(num)

  for (let i = 0; i < numArray.length; i++) {
    translation += translateThreeDigitNumber(numArray[i], selectedLang, words)
    translation +=
      numArray[i] !== '000' && numArray[i + 1]
        ? ' ' + words[3][numArray.length - i] + ' '
        : ''
    if (selectedLang === 'en') {
      translation +=
        numArray[i + 1] && numArray[i + 1] !== '000' && numArray[i + 1] < 100
          ? ' and '
          : ''
    }
  }

  if (fixCases) {
    translation = fixCases(translation)
  }

  return translation
}

export default translateNumber
