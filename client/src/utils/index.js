module.exports = {
  formatDate: (date) => {
    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()
    let year = '' + date.getFullYear()
    let hour = '' + date.getHours() + 'h'
    let mins = '' + date.getMinutes() + 'm'

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day
    if (hour.length < 3) hour = '0' + hour
    if (mins.length < 3) mins = '0' + mins

    return [day, month, year].join('-')
  },

  formatDateFull: (date) => {
    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()
    let year = '' + date.getFullYear()
    let hour = '' + date.getHours() + 'h'
    let mins = '' + date.getMinutes() + 'm'

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day
    if (hour.length < 3) hour = '0' + hour
    if (mins.length < 3) mins = '0' + mins

    return [day, month, year].join('-') + '  |  ' + [hour, mins].join('')
  },
}
