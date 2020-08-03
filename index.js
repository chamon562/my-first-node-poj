// console.log('Hello World')
// let i = 1

const moment = require("moment");


// const count = () =>{
//     console.log (i)
//     i = i*2
// }
// const myTimer = setInterval(count, 1000)
// const today = new Date()
// console.log(today)
//moment() is a function and to call it put the () 
// const moment = require('moment')
// console.log(moment().format('MMM Do YYYY'))
//how to print your birthday say the day. 

// let a = moment().subtract(1, 'day');
// let b = moment().add(1, 'day')
// moment.max(a, b);

// let fetchFriends = [
//     {name: 'Dan', birthday: '11.12.1977'}, 
//     {name: 'Mary', birthday: '11.12.1986'}, 
//     {name: 'Stephan', birthday: '11.01.1993'}
// ]

// let friends = fetchFriends;
// let friendsBirthDays = friends.map(function(friends){
//     return moment(friends.birthday, 'DD. MM. YYYY');
// })

// moment.max(friendsBirthDays);

console.log(moment('03-17-1985', 'MM DD YYYY').format('dddd [the] Do [of] MMMM [in the year] YYYY'))
