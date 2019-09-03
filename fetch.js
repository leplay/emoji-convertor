const fs = require('fs')
const axios = require('axios')

const fetch = async function () {
  const remote = await axios.get('https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json')

  if (!remote.data || !remote.data.length) {
    console.log('Fetch error!')
    return
  }

  const unifiedMeta = {}
  const nameMeta = {}

  remote.data.forEach(function (item) {
    unifiedMeta[item.unified] = {
      // name: item.name,
      // category: item.category,
      shortName: item.short_name
    }
    nameMeta[item.short_name] = {
      // name: item.name,
      // category: item.category,
      unified: item.unified
    }
  })

  fs.writeFileSync('emoji-unified.json', JSON.stringify(unifiedMeta), 'utf-8')
  fs.writeFileSync('emoji-name.json', JSON.stringify(nameMeta), 'utf-8')
}

fetch()
