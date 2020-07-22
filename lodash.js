//First Example using lodash find method
const users = [
    { 'user': 'joey',  'age': 32 },
    { 'user': 'ross',    'age': 41 },
    { 'user': 'chandler', 'age': 39 }
  ];
  
  const userOne=_.find(users, function (o) { return o.age < 40; })
  console.log(userOne);
//End


//Second example lodash filter method
const numbers = [10, 40, 230, 15, 18, 51, 1221];
const numberOne=_.filter(numbers, num => num % 3 === 0);
console.log(numberOne);
//End


//Third example lodash first and rest of an array
const names = ["first", "middle", "last", "suffix"];
const firstName = _.first(names);
const otherNames = _.rest(names);
console.log(firstName) // 'first'
console.log(otherNames) // [ 'middle', 'last', 'suffix' ]
//End


//Fourth example lodash for each method
_.each([1, 2, 3], (value, index) => {
    console.log(value)
  })
//End


//Fifth example ES6 unique element in array
var elements = [1,2,3,1,2,4,2,3,5,3];
_.uniq(elements)
//End