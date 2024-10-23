let dataStudent : {
    name: String,
    age: Number,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    class: String,
    isStudent: boolean,
    isPaid: boolean
} = {
    name: 'John Doe',
    age: 18,
    // These are also called nested objects
    address: {  
       city: 'Hyderabad',
       state: 'Sindh',
       street: 'Halepota Muhalla',
       zip: '17000' 
    },
    class: 'Nursery',
    isStudent: true,
    isPaid: true,
};

console.log('Your school data:', dataStudent);