var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
var key;
var count = 0;
for (key in student) {
  if (student.hasOwnProperty(key)) count++;
}
console.log(count);
