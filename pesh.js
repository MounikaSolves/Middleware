const students = [
    {id:1,name:'ravi',age:20},
    {id:2,name:'sita',age:22},
];
const new1 = {id:3,name:'tarun',age:21};
students.push(new1);
students.unshift(new1)
console.log("all students");
const read = 2;
const student = students.find((stud) =>stud.id = read);
if(student){
    console.log('student with id 2 ',student);
}
else{
    console.log('not found');
}