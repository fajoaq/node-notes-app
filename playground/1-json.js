const fs = require('fs');

/* const book = {
    title: "My Little Pony",
    author: "The dude"
};

const json = JSON.stringify(book);
fs.writeFileSync('1-json.json', json); */

/* const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

console.log(data.title); */

//Load and toString file
let jsonBuffer = fs.readFileSync('1-json.json');
const json = jsonBuffer.toString();

//Parse json and change data
const data = JSON.parse(json);
data.name = "Francis";
data.age = 34;

//Stringify and overwrite json file
const newJson = JSON.stringify(data);
fs.writeFileSync('1-json.json', newJson);


