const board = document.querySelector('#board')
const colors = ['red', 'violet', 'green', 'orange', 'purple', 'tomato', 'yellow']
const SQUARES_NUMBER = 1500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10 px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`
}

function getRandColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}