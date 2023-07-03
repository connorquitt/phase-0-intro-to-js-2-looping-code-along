// Code your solutions in this file
for (let age = 30; age <40; age++) {
    console.log(`im ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i<gifts.length; i++) {
        console.log(`wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

const name = [];
const thankYouCards = [];

function writeCards(name, event) {
    for (let i=0; i<name.length; i++) {
       thankYouCards[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
    }
    return thankYouCards
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
}

countDown(10);