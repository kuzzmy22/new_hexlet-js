import readlineSync from 'readline-sync';

const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    // Использование обратных кавычек (template literal) для интерполяции
    console.log(`Hello, ${name}!`); 
};

export default greetUser;
