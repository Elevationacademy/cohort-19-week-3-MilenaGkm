// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument




// let users = []

// const getData = function (argFunc) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         argFunc()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)





// const square = Number => console.log(Number * Number)
// square(4)

// const getFormalTitle = (title, name) => title + ' ' + name
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"



// const pushPull = function(argFunc){
//     argFunc()
// }

// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"



//  const time = new Date()

//   const getTime = function(argFunc){
//       argFunc(time)
//   }
  
//   const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
  
//   getTime(returnTime)
  


// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   }

//   const logData = function(data){
//       console.log(data);
//   }

  
//   displayData(alert, logData, "I like to party")
  



const getSum = (a, b, c) => a + b + c 

console.log(getSum(21,32,2))




const Family = function(){
    const members=[]

    const birth = function(argName){
        members.push(argName)
        console.log(members);
    }
    return birth
}


const giveBirth = Family()
giveBirth('milena')
giveBirth('weird dude')
giveBirth('some dude')
giveBirth('dude')








const StringFormatter = function(){
	
    const capitalizeFirst = function(arg){
        let upperCase = arg[0].toUpperCase()
        upperCase += arg.slice(1).toLowerCase()

        return upperCase
    }

    const skewerCase = function(argString){
        let noSpace = argString.replace(' ', '-')
        return noSpace
    }

    return {
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy"))
console.log(formatter.skewerCase("blue box"))
console.log(formatter.capitalizeFirst('bobby $harlila'))
console.log(formatter.skewerCase('bobby $harlila'))





const Bank = function(){
    let money = 500
    const depositCash = function(cash){
        money += cash
    }
    const checkBalance = function(){
        console.log(money);
    }
    return{
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950




