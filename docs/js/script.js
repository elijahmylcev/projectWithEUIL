const name = 'Sheldon'

$('body').click(() => {
  $('h2').eq(0).html(`Hello ${name}`)
})
