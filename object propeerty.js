const students = [
    {id: 21, name: "omar sunny"},
    {id: 31, name: "mannaaaaaa"},
    {id: 41, name: "moyuri"},
    {id: 71, name: "Dipjol"}
];
const names = students.map(s => s.name);
const id = students.map(i => i.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);
// console.log(names);
// console.log(id);