interface User {
    name: string;
    age: number;
    contact: number;
    address: string;
    readonly dbEmployeeId: number;
};

const user: User = {
    name: 'Faahad Lashari',
    age: 25,
    contact: 1234567890,
    address: 'City Hyderabad',
    dbEmployeeId: 12345,
}