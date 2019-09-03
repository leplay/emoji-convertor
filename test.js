const {
  nativeToUnified,
  nativeToName,
  unifiedToNative,
  nameToNative
} = require('./index')

test('🧻', () => {
  expect(nativeToUnified('🧻')).toBe('1F9FB')
})

test('🧻', () => {
  expect(nativeToName('🧻')).toBe('roll_of_paper')
})

test('🧻', () => {
  expect(nativeToName('🧻', true)).toBe(':roll_of_paper:')
})

test('👩‍👩‍👧‍👧', () => {
  expect(nativeToName('👩‍👩‍👧‍👧')).toBe('woman-woman-girl-girl')
})

test('1F354', () => {
  expect(unifiedToNative('1F354')).toBe('🍔')
})

test('1f469-200d-1f469-200d-1f467-200d-1f467', () => {
  expect(unifiedToNative('1f469-200d-1f469-200d-1f467-200d-1f467')).toBe('👩‍👩‍👧‍👧')
})

test('sauropod', () => {
  expect(nameToNative('sauropod')).toBe('🦕')
})
