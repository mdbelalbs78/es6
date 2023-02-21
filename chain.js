const users = [{
    id: 1,
    name: 'abul',
    job: 'doctor'
}]
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [{
            id: 1,
            name: 'babul',
            job: 'leader'
        },
        {
            id: 1,
            name: 'dabul',
            job: 'leader'
        },
    ]
}

const firstJob = (data.data[0].job);
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third flooor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}
// (user.address.street[1].third)
const userFloor = user.address.stret?.second;
console.log(userFloor);