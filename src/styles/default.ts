function getRandomRGB() {
  const red = Math.floor(Math.random() * 155)
  const green = Math.floor(Math.random() * 155)
  const blue = Math.floor(Math.random() * 155)

  return `rgb(${red}, ${green}, ${blue})`
}

export const defaultTheme = {
  randomTheme: `${getRandomRGB()}`,
  white: '#fff',
}
