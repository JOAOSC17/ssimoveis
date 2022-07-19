const menu = document.querySelector('.menu')
const lines = document.querySelectorAll('.menu>.line')
const animation = '.8s 0s 1 ease-in-out forwards'

menu.onclick = function () {
  this.classList.toggle('expanded')
  
  if(this.classList.contains('expanded')) {
    return lines.forEach(line => {
      line.style.animation = 'turn-x ' + animation
    })
  }
  return lines.forEach(line => {
      line.style.animation = 'turn-y ' + animation + ' reverse'
    })
}