const reservations ={
    Bob: {claimed: false},
    Ted: {claimed: true}
}
  

const checkReservation = function(){
    const name = document.getElementById("name").value
    
    if(reservations[name] && !reservations[name].claimed){
      alert("Welcome in, " + name)
      reservations[name].claimed = true
    }else if(reservations[name] && reservations[name].claimed){
      alert("Hmm, someone already claimed this reservation")
    }else if(!reservations[name]){
      alert("You have no reservation")
      reservations[name] = {claimed: true} 
    }
}
  





const getRandomColor = function(){
    const niceColors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
    const randomPosition = Math.floor(Math.random() * niceColors.length)
    return niceColors[randomPosition]
}
  

for(let i = 1; i < 8; i++){
    const newBox = document.createElement('div')
    newBox.setAttribute('class', 'box')
    newBox.style.backgroundColor = getRandomColor()
    newBox.onmouseenter = function(){
      const randomColor = getRandomColor()
      newBox.style.backgroundColor = randomColor
    }
    document.getElementById('container').appendChild(newBox)
}
  