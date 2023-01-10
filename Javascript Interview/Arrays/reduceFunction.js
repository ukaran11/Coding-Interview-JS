const people = [
    {name:"Utsav", age:40},
    {name:"Divya", age:30},
    {name:"Supriya", age:30},
    {name:"Gaurav", age:40},
    {name:"Abhishek", age:100},
]

const result = people.reduce((groupedPeople, person)=> {
    const age = person.age
    console.log(groupedPeople[age]);
    if (!groupedPeople[age]) {
        groupedPeople[age] = []
    } 
    console.log(groupedPeople[age]);
    groupedPeople[age].push(person)
    return groupedPeople

}, {})

console.log(result);

//-------------------------EXAMPLE 1----------------------------//
// items = [
//     {name:"Book", price:10},
//     {name:"Chicken", price:10},
//     {name:"Monitor", price:10},
//     {name:"Table", price:10},
//     {name:"Chair", price:10},
// ]

// const totalPrice = items.reduce((total, item) => {
//     return total + item.price
// },0)

// console.log(totalPrice)
//---------------------------------------------------------------//
