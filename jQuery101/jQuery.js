$('h1').css('color', 'blue')
$('.red-div').css('color', 'red')
$('li:first-child').css('color', 'green')
$('li:last-child').css('color', 'pink')
$('#brown-div').css('color', 'brown')
$('#b1').addClass('box')
$('#b2').addClass('box')
$('#my-input').val('Terabyte')

// const color = $("div").data().color  
// console.log(color) //prints #2980b9

const item = $("div").data()
console.log("Item with barcode " + item.barcode + " will expire on " + item.expirationdate);


// same shit
// $('button').on('click', function () {
//   alert('clicked!')
// })
// // 1

// $('button').click(function () {
//   alert('clicked!')
// })
// // 2

// const clicked = function () {
//   alert('clicked!')
// }

// $('button').on('click', clicked)
// // 3


// const clicked = function () {
//   alert('clicked!')
// }

// $('button').click(clicked)
// // 4


$("#b1").hover(function () {
  $("#b1").css("background-color", "blue")
})


//const button = $("button").val
// $('button').click(function(){
//   alert($('#my-input').val())
// })


$('.box').hover(function(){
  $(this).css('background-color', 'blue')
})



$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')
//$("p").remove(".brown")




// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")

// console.log(item)
 //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!




 $(".feedme").on("click", function(){
  let divCopy = `<div class=feedme>${$(this).text()}</div>` //use template literals and $(this)
  
  $("body").append(divCopy)
})





// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" }
// ]

// for(let name of names){
//   $('body').append(`<div class=human> ${name.first} - ${name.last}</div>`)
// }



//.target removes targeted element
$('p').hover(function(e){
  $(e.target).remove()
})



$('button').click(function () {
  $("#blogs").append(`<div class=blog>${'some text'}</div>`)
})

$("button").click(function(){
  $(".blog").text("blargh") 
})



$("body").append(`<ul><li>Quimby</li></ul>`)
$("body").append(`<input id=nameInput placeholder='Human Name'></input`)
$("body").append(`<button id=humanb>add Human</button>`)

$("#humanb").click(function(){
  $("ul").append(`<li>${$(nameInput).val()}</li>`)
  $("#nameInput").val("")
})


$("ul").click(function(e){
  $(e.target).remove()
})
//OR
$("ul").click(function(){
  $(this).remove()
})


