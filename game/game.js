const playingField = document.getElementById("playing-field")
const ball = document.getElementById("block")
playingField.style.backgroundColor = "blue"
ball.style.backgroundColor = "violet"

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: Bobby $harlila"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)

const moveUp = function(){
  const up = parseInt(ball.style.top) || 0
  ball.style.top = (up - 15) + "px"
}

const moveDown = function(){
  const down = parseInt(ball.style.top) || 0
  ball.style.top = (down + 15) + "px"
}

moveRight = function(){
  const right = parseInt(ball.style.right) || 0
  ball.style.right = (right - 15) + "px"
}

moveLeft = function(){
  const left = parseInt(ball.style.right) || 0
  ball.style.right = (left + 15) + "px"
}