export const getDateInputFormat = function (timestamp) {
  const dateObj = new Date (timestamp)

  const year = dateObj.getFullYear()
  const month = dateObj.getMonth()
  const day = dateObj.getDate()

  let output = `${year}`
      output = month < 10 ? output+=`-0${month+1}` : output+=`-${month+1}`
      output = day < 10 ? output+=`-0${day}` : output+=`-${day}`

  return output
}