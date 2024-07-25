// JSon => key value


let obj = {
    name: "John",
    age: 30,
    city: "New York",
    favourite : ['apple', "banana", "mango"],
    info: {
        country: "USA",
        state: "NY",
    }
}

// console.log(obj);

// few diff in JSOn SYatx:

// "$5knlkascnoa"

let jsonObj = JSON.stringify(obj);

console.log(jsonObj, typeof jsonObj);


// convert json to js - object

let obj2 = JSON.parse(jsonObj);

console.log(obj2, typeof obj2);