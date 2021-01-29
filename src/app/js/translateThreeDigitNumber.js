/**
 *
 * translateThreeDigitNumber
 *
 */

import isValid from 'app/js/isValid'

const translateThreeDigitNumber = (number, lang, words) => {
  if (!isValid(number) || !(number > 0 && number < 1000)) {
    return ''
  }

  let translation = ''

  number = parseInt(number).toString()

  if (number < 20) {
    translation = words[0][number]
  } else if (number > 19 && number < 100) {
    translation = words[1][number[0]] + ' ' + words[0][number[1]]
  } else if (number > 99 && number % 100 < 20) {
    translation =
      words[2][number[0]] +
      (lang === 'en' && number % 100 !== 0 ? ' and ' : ' ') +
      words[0][number % 100]
  } else if (number > 99 && number % 100 > 19) {
    translation =
      words[2][number[0]] +
      (lang === 'en' ? ' and ' : ' ') +
      words[1][number[1]] +
      ' ' +
      words[0][number[2]]
  }

  return translation
}

export default translateThreeDigitNumber
