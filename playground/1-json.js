const fs =require('fs');
const Person = {
    name:"Alex",
    planet:"Earth",
    age:19
};
fs.writeFileSync('1-json.json',JSON.stringify(Person));

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const personJSON = JSON.parse(dataJson);

personJSON.name = 'Ira';
fs.writeFileSync('1-json.json',JSON.stringify(personJSON));