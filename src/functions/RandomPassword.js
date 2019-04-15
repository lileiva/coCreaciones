export default () => {
  const chars = 'ABCDEFGHIJKLMNOP1234567890'
  let pass = ''
  for (let x = 0; x < 8; x += 1) {
    const i = Math.floor(Math.random() * chars.length)
    pass += chars.charAt(i)
  }
  return pass
}
