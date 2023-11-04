
let cardsArray = [
    {
        name: 'CSS',
        img: './img/image-1.jpg',
    },
    {
        name: 'HTML',
        img: './img/image-2.jpg',
    },
    {
        name: 'jQuery',
        img: './img/image-3.jpg',
    },
    {
        name: 'JS',
        img: './img/image-4.jpg',
    },
    {
        name: 'Node',
        img: './img/image-5.jpg',
    },
    {
        name: 'Python',
        img: './img/image-6.jpg',
    }
];

const parentDiv = document.querySelector('#card-section')

const game_card= cardsArray.concat(cardsArray)


const myNumbers=(array)=>{
    for(let i=array.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1))
        let temp=array[i]
         array[i]=array[j]
         array[j]=temp

    }
    return array
}
let shuffledChild = myNumbers(game_card)

let clickCount=0;
let firstCard="";
let secondCard="";

const card_matches=()=>{
    let card_selected=document.querySelectorAll('.card_selected')

    card_selected.forEach((ele)=>{
        ele.classList.add('card_match')
    })
}


const resetGame=()=>{
    firstCard="";
    secondCard="";
    clickCount=0;

    let card_selected=document.querySelectorAll('.card_selected')

    card_selected.forEach((ele)=>{
        ele.classList.remove('card_selected')
    })
}



 parentDiv.addEventListener("click",(e)=>{
  
    let curCard=e.target
    if(curCard.id==="card-section"){
        return false
    }
   
    clickCount ++
    if(clickCount<3){

        if(clickCount=== 1){
            firstCard=curCard.parentNode.dataset.name
            curCard.parentNode.classList.add("card_selected")
        }else{
            secondCard=curCard.parentNode.dataset.name
            curCard.parentNode.classList.add("card_selected")
        }
        if(firstCard!=="" && secondCard!==""){
            if(firstCard===secondCard){
                // curCard.classList.add("card_match")
                setTimeout(()=>{
                    card_matches()
                    resetGame()
                },1000)
               
            }
            else{
                setTimeout(()=>{
                    resetGame()
                },1000)
                
            }
        }
    }
  
  
 })




for(let i=0; i<shuffledChild.length; i++){

    const childDiv = document.createElement("div")
    childDiv.classList.add("card")
    childDiv.dataset.name=shuffledChild[i].name
    // childDiv.style.backgroundImage=`url(${shuffledChild[i].img})`
   const front_div=document.createElement("div") 
   front_div.classList.add("front-card")

   const back_div=document.createElement("div") 
   back_div.classList.add("back-card")

   back_div.style.backgroundImage=`url(${shuffledChild[i].img})`

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)

}


