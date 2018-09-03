var currencySymbolMap = require('./map')

module.exports = function getSymbolFromCurrency (currencyCode) {
  if (typeof currencyCode !== 'string') return currencyCode
  var code = currencyCode.toUpperCase()
  if (!currencySymbolMap.hasOwnProperty(code)) return currencyCode
  return currencySymbolMap[code]
}

module.exports.currencySymbolMap = currencySymbolMap
