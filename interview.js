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

console.log(flattenArray([1, 2, [3, 4], 5, [6, [7, 8]]]));

//Anagrams check
function anagrams(str1, str2) {
  return str1.split("").sort().join() == str2.split("").sort().join();
}

console.log(anagrams("listen", "silent"));

//Shallow copy and deep copy
let user = {
  name: "john",
  age: "28",
  job: "SDE-1",
};

//Shallow copy
let shallowUser = user;
console.log("user", user);
console.log("shallow user", shallowUser);
shallowUser.name = "johndoe";
console.log("user", user);
console.log("shallow user", shallowUser);

//Deep copy
let deepUser = JSON.parse(JSON.stringify(user));
console.log("user", user);
console.log("deep user", deepUser);
deepUser.name = "johndoe";
console.log("user", user);
console.log("deep user", deepUser);

//string chunks
function stringChunk(str, chunklength) {
  let chunks = [];
  for (let i = 0; i < str.length; i += chunklength) {
    chunks.push(str.slice(i, i + chunklength));
  }
  return chunks;
}

console.log(stringChunk("jawahar", 2));
