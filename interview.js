//Flatten the nested array
let result = [];
function flattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let flattened = flattenArray([1, 2, [3, 4], 5, [6, [7, 8]]]);
console.log(flattened);
