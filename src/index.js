const messages = [
    'Oscar', 'Sebastian', 'Jessica', 'Diego', 'Daniela', 'Rosa', 'Jose',
];


const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };;