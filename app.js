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


function createBoard(){
    for (let i=0; i < 10; i++){
       const card = document.createElement('img')
       card.setAttribute('src', 'images/card-back.jpg')
       card.setAttribute('data-id', i)
       gridDisplay.appendChild(card)
    }
}
console.log(gridDisplay);
createBoard()