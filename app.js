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
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

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
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for a match')
    if(optionOneId === optionTwoId){
        alert('You have clicked the same image :(')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId[0]].setAttribute('src', 'images/correct.jpg')
        cards[optionTwoId[1]].setAttribute('src', 'images/correct.jpg')
        cards[optionOneId[0]].removeEventListener('click', flipCard)
        cards[optionTwoId[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId[0]].setAttribute('src', 'images/card-back.jpg')
        cards[optionTwoId[0]].setAttribute('src', 'images/card-back.jpg')
        alert('Sorry, try again.')
    }
    cardsChosen = []
    cardsChosenIds = []
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