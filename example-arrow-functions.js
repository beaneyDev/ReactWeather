// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name)
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('beaney'));

// var person = {
//   name: 'Beaney',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ', name)
//     })
//   }
// };
//
// person.greet();

//Challenge Area
var add = (a, b) => a + b;
var addStatement = (a, b) => {
  return a + b
}

console.log(add(1, 3));
console.log(addStatement(9, 0));
