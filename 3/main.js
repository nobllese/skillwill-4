const users = [
    {name: 'Lasha', age: 30},
    {name: 'Saba', age: 20},
    {name: 'Tekla', age: 17},
    {name: 'Giga', age: 24},
    {name: 'Mari', age: 35}
];

const newArray = (users) => {
    return users.sort((a, b) => a.age - b.age);
};

console.log(newArray(users));

