const user = {
    id: 123,
    name: {
        firstName: 'Abdul',
        middleName: 'Goni',
        lastName: 'Mia'
    },
    favoriteFood: {
        junkFood: {
            burger: 'burger',
            pizza: 'Pizza'
        },
        regular: {
            rice: 'rice',
            ruti: 'ruti',
        }
    },
    favoriteColor: {
        first: 'black',
        second: {
            primary: 'steelBlue',
            secondary: 'olive'
        }
    }
};


const { id, favoriteColor: { second: { secondary } }, favoriteFood: { junkFood: { burger } }, name: { firstName: nut } } = user;

console.log(nut);

const user2 = ['rahim', 'karim', 'abedul'];

const [, friend] = user2;
// console.log(friend);

