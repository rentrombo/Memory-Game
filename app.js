const cardArray = [
    {
        name: 'pride',
        img: 'images/pride.jpg' 
    },
    {
        name: 'america',
        img: 'images/america.jpg' 
    },
    {
        name: 'loveislove',
        img: 'images/loveislove.jpg' 
    },
    {
        name: 'turkey',
        img: 'images/turkey.jpg' 
    },
    {
        name: 'england',
        img: 'images/england.jpg' 
    },
    {
        name: 'mexico',
        img: 'images/mexico.jpg' 
    },
    {
        name: 'pride',
        img: 'images/pride.jpg' 
    },
    {
        name: 'america',
        img: 'images/america.jpg' 
    },
    {
        name: 'loveislove',
        img: 'images/loveislove.jpg' 
    },
    {
        name: 'turkey',
        img: 'images/turkey.jpg' 
    },
    {
        name: 'england',
        img: 'images/england.jpg' 
    },
    {
        name: 'mexico',
        img: 'images/mexico.jpg' 
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []
const cardsChosenIds = []

function createBoard(){
    for (let i=0; i < cardArray.length; i++){
       const card = document.createElement('img')
       card.setAttribute('src', 'images/card-back.jpg')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
       gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    console.log(cards)
    console.log('check for a match')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/correct.jpg')
    }
}

function flipCard() {

    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout( checkMatch, 500)
    }
}