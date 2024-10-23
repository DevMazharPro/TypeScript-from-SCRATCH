// the way of writing the code easier, 'already declared types. not to repeat'
type typePerson = {
  name: string;
  class: string;
  subjects: string[];
  grade: number;
};

const person: typePerson = {
  name: "Mazhar",
  class: "1st Year",
  subjects: ["Mathematics", "Physics", "Chemistry"],
  grade: 95,
};
// We don't need to declare types at everywhere we just simple write the type name we already created at first

const person2: typePerson = {
  name: "Faruk",
  class: "2nd Year",
  subjects: ["Biology", "English", "Computer Science"],
  grade: 88,
};
