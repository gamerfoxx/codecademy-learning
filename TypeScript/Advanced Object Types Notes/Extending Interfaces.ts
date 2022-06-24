interface Developer {
    code: () => void;
}

// Add your interface here

interface Human extends Developer {
    name: string;
    hobbies: string[];
}


const me: Human = {
    code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
    name: 'Corrina',
    hobbies: ['Building rockets']
}

me.code();