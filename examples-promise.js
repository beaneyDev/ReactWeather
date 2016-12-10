// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Ashford', function (err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('succes', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 2000)
//   });
// }
//
// getTempPromise('Ashford').then(function (temp) {
//   console.log("winner winner!", temp);
// }, function(err) {
//   console.log("aw shucks!", err);
// })

//Challenge area
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === "number") {
      resolve(a + b);
    } else {
      reject("Not all numbers were provided.")
    }
  })
}

addPromise(4, 7).then(function(number) {
  console.log("Success:", number);
}, function(error) {
  console.log("Failure:", error);
})
