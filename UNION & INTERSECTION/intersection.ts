// this allows you to combine multiple types into a single type. Denoted by & (ampersand)
type Details = {
    name: string;
    age: number;
};
type Office = {
    department: string;
    grade: number;
};

type Employee = Details & Office; // Here both are compulsory 

const employee: Employee = {
    name: 'Mazhar',
    age: 23,
    department: 'HR',
    grade: 19
};  // This is perfect example but what if we miss any value 

const employee2 : Employee = {
    name: 'Mazhar',
    age: 23,
    department: 'HR'
}; // This is giving error message because we have given here ampersand in type 'Employee' 
