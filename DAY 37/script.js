//unshift
function customUnshift(arr, ...items) {
    for (let i = items.length - 1; i >= 0; i--) {
      arr.splice(0, 0, items[i]);
    }
    return arr.length;
  }
  
  const fruits = ['orange', 'mango', 'apple', 'guava'];
  console.log("array before inserting the element: ",fruits)
  const newLength = customUnshift(fruits,'cherry');
  console.log( "array after inserting the element:",fruits); 
  //forEach
  function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }
  
  
  customForEach(fruits, function(fruit, index) {
    console.log(fruit);
  });