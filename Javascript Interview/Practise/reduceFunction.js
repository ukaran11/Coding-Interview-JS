const people = [
  {name:"Utsav", age:40},
  {name:"Divya", age:30},
  {name:"Supriya", age:30},
  {name:"Gaurav", age:40},
  {name:"Abhishek", age:100},
]

const result = people.reduce((groupedPeople, people) => {
  let age = people.age;
  if(!groupedPeople[age]){
    groupedPeople[age] = []
  }
  groupedPeople[age].push(people)
  return groupedPeople
}, {})

console.log('result', result);