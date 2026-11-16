const students = [
    {id: 1,name: "Ravi",age: 20},
    {id:2,name: "vamsi",age: 24}
];
const newStudent = {
    id: 3,
    name: "Anil",
    age:22
};
students.push(newStudent);
students.unshift({
    id: 4,
    name: "Kiran",
    age: 21
});
console.log("All Students:",students);
const searchId = 2;
const student = students.find(
    (stud) => stud.id === searchId
);
if(student){
    console.log(`Student with ID ${searchId}:`,student);
}
else{
    console.log(`Student with ID ${searchId} not found`);
}
const updateId = 3;
const studentToUpdate = students.find(
    (stud)=>stud.id === updateId
);
if(studentToUpdate){
    studentToUpdate.name = "Anil Kumar";
    studentToUpdate.age = 23;
    console.log("Student Updated:",studentToUpdate);
}
else{
    console.log('Student with ID ${updateId} not found');
}
const deleteId = 4;
const index = students.findIndex(
    (stud) => stud.id === deleteId);
if(index !== -1){
    students.splice(index, 1);
    console.log(`Student with ID ${deleteId} deleted`);
} else {
    console.log(`Student with ID ${deleteId} not found`);
}

console.log("Final Student Array:", students);
