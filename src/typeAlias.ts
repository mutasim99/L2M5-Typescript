type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string,
    },
    gender: 'male' | 'female'
};

const user1: User = {
    id: 123,
    name: {
        firstName: 'Mutasim',
        lastName: 'Billah'
    },
    gender: 'male'
};

const user2: User = {
    id: 236,
    name: {
        firstName: 'tasnim',
        lastName: 'Billah'
    },
    gender:'male'
}