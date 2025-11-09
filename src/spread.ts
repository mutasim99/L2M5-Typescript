const friends: string[] = ['abid', 'jabid'];

const friends2: string[] = ['kamal', 'jamal'];

const friends3: string[] = ['montu', 'jhontu'];

friends.push(...friends3);

const sendInvite = (...friends: string[]) => {
    friends.forEach(friend =>{
        return console.log(`send invite to: ${friend}`);
        
    })
    

};

sendInvite('chulbol', 'rajanogondha', 'atel', 'abal');
