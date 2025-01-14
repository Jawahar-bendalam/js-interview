//Flatten the nested array
// let result = [];
// function flattenArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flattenArray(arr[i]);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(flattenArray([1, 2, [3, 4], 5, [6, [7, 8]]]));

// //Anagrams check
// function anagrams(str1, str2) {
//   return str1.split("").sort().join() == str2.split("").sort().join();
// }

// console.log(anagrams("listen", "silent"));

// //Shallow copy and deep copy
// let user = {
//   name: "john",
//   age: "28",
//   job: "SDE-1",
// };

// //Shallow copy
// let shallowUser = user;
// console.log("user", user);
// console.log("shallow user", shallowUser);
// shallowUser.name = "johndoe";
// console.log("user", user);
// console.log("shallow user", shallowUser);

// //Deep copy
// let deepUser = JSON.parse(JSON.stringify(user));
// console.log("user", user);
// console.log("deep user", deepUser);
// deepUser.name = "johndoe";
// console.log("user", user);
// console.log("deep user", deepUser);

// //string chunks
// function stringChunk(str, chunklength) {
//   let chunks = [];
//   for (let i = 0; i < str.length; i += chunklength) {
//     chunks.push(str.slice(i, i + chunklength));
//   }
//   return chunks;
// }

// console.log(stringChunk("jawahar", 2));

// //Retuen all key value pairs in a nested obj
// let keyValue = "";
// function keyVals(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       keyVals(obj[key]);
//     } else {
//       keyValue += key + ":";
//       keyValue += obj[key] + " ";
//     }
//   }
//   return keyValue;
// }

// const data = {
//   name: "jawa",
//   address: {
//     state: "AP",
//     country: "IND",
//   },
//   age: "28",
// };
// let output = keyVals(data);
// console.log(output);

//flatten array of nested objs
let userData = {
  name: "john",
  age: 28,
  address: {
    city: "visakhapatnam",
    state: "andhra pradesh",
  },
};

let result = {};
function flattenNestedObj(obj) {
  let keys = Object.keys(obj);
  for (let item of keys) {
    if (typeof obj[item] === "object") {
      flattenNestedObj(obj[item]);
    } else {
      result[item] = obj[item];
    }
  }
  return result;
}

let output = flattenNestedObj(userData);
console.log("output", output);
