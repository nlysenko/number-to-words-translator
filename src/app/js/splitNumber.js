/**
 *
 * splitNumber
 *
 */

const splitNumber = (number) => {
  return (number + '').split(/(?=(?:\d{3})+(?!\d))/)
}

export default splitNumber
