'use strict'

const voidElements = require('html-void-elements')

module.exports = (element) => {
  if (typeof element !== 'string') {
    throw new TypeError('is-void-element expected a string')
  }

  return voidElements.indexOf(element) !== -1
}
