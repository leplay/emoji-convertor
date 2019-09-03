# emoji-convertor

## Install
npm install emoji-convertor

## Usage
```javascript
const {
  nativeToUnified,
  nativeToName,
  unifiedToNative,
  nameToNative
} = require('./index')

console.log(nativeToUnified('🍔'))

console.log(nativeToName('🧻'))
console.log(nativeToName('👩‍👩‍👧‍👧'))
console.log(nativeToName('🍔'))

console.log(unifiedToNative('1F354'))
console.log(unifiedToNative('1f469-200d-1f469-200d-1f467-200d-1f467'))

console.log(nameToNative('sunglasses'))
```

## Data
[https://github.com/iamcal/emoji-data](https://github.com/iamcal/emoji-data)
