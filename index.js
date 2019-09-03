const emojiRegex = require('emoji-regex')
const regex = emojiRegex()
const unifiedMeta = require('./emoji-unified')
const nameMeta = require('./emoji-name')

const nativeToUnified = function (nativeEmoji) {
  const matchEmoji = nativeEmoji.match(regex)
  if (!matchEmoji || matchEmoji[0] !== nativeEmoji) {
    return null
  }
  const result = []
  for (const ch of nativeEmoji) {
    result.push(ch.codePointAt(0).toString(16))
  }
  return result.join('-').toUpperCase()
}

const nativeToName = function (nativeEmoji, colon) {
  const unified = nativeToUnified(nativeEmoji)
  if (!unified) return null
  const name = unifiedMeta[unified.toUpperCase()].shortName
  return `${colon ? ':' : ''}${name}${colon ? ':' : ''}`
}

const unifiedToNative = function (unified) {
  let arr = unified.split('-')
  arr = arr.map(o => '0x' + o.toUpperCase())
  return String.fromCodePoint.apply(null, arr)
}

const nameToNative = function (name) {
  if (!name) return null
  const unified = nameMeta[name.replace(':', '')].unified
  const emoji = unifiedToNative(unified)
  return emoji
}

module.exports = {
  nativeToUnified,
  nativeToName,
  unifiedToNative,
  nameToNative
}
