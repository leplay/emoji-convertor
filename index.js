const emojiRegex = require('emoji-regex')
const regex = emojiRegex()
let config = require('./emoji.json')

const unifiedMeta = {}
const nameMeta = {}

config.forEach(function (item) {
  unifiedMeta[item.unified] = {
    name: item.name,
    shortName: item.short_name,
    category: item.category
  }
  nameMeta[item.short_name] = {
    name: item.name,
    unified: item.unified,
    category: item.category
  }
})
config = null

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
