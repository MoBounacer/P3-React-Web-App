let base = ['Water', 'Milk', 'Cola', 'Lemonade', 'Beer'];
let solute = ['Pea protein', 'Whey protein', 'Honey', 'Caffeine', 'Pre-Workout'];
let fruit = ['Banana', 'Avocado', 'Cherries', 'Mango', 'Coconut'];


const baseChoice = base[Math.floor(Math.random() * base.length)];

const soluteChoice = solute[Math.floor(Math.random() * solute.length)];

const fruitChoice = fruit[Math.floor(Math.random() * fruit.length)];

function mixedMessage() {
    if (onclick){
        document.getElementById("extra").innerHTML(`Your random drink consists of a base of ${baseChoice} with ${soluteChoice} blended with ${fruitChoice}.`);}
}