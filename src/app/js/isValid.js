/**
 *
 * isValid
 *
 */

const isValid = (number) => {
  if (
    isNaN(+number) ||
    number[0] === '-' ||
    number[0] === ' ' ||
    number[0] === '+' ||
    number.toString().length > 24 ||
    /^0+/.test(number) ||
    number === null ||
    number === true ||
    number === false
  ) {
    return false
  } else {
    return true
  }
}

export default isValid
