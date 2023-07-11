let card = document.getElementsByClassName('card');
let cont = document.getElementById('container');

let modal = document.getElementById('modal');
let modal2 = document.getElementById('deleteBox');

let closeBtn = document.getElementById('close');

let cancelBtn = document.getElementById('cancel');

let deleteBtn = document.getElementById('delete');

closeBtn.addEventListener('click',()=>{
    modal.close();
})

cancelBtn.addEventListener('click',()=>{
    modal2.close();
})



function something(){
    modal.showModal();
}




var colors = [
    "#FFEB3B",
    "#2196F3",
    "#4CAF50",
    "#E91E63",
    "#FF9800",
    "#9C27B0",
    "#F44336",
    "#009688",
    "#9E9E9E",
    "#795548"
  ];
let deg = [2,-2,-3,3];

let newCard;
function addTodo(){
    let randomNumber = Math.floor(Math.random() * 10);
    let randomNumber2 = Math.floor(Math.random() * 4);

    let title = document.getElementById('heading');
    let desc = document.getElementById('desc');

    newCard = document.createElement('div');
    let heading = document.createElement('h2');
    let para = document.createElement('p');
    var dot = document.createElement('span');
    dot.classList.add('addDot');


    //Styling card dynamically
    newCard.style.height = "250px";
    newCard.style.transform = `rotate(${deg[randomNumber2]}deg)`;
    newCard.style.backfaceVisibility = "hidden";
    // newCard.style.width = "10%";
    newCard.style.border = "1px solid black";
    newCard.style.overflowY = "auto";
    newCard.style.overflowX = "hidden";
    newCard.style.padding = "10px 10px";
    newCard.style.marginLeft = "1rem";
    newCard.style.marginTop = "2rem";
    newCard.style.boxShadow = "-3px 3px 4px 0px";
    newCard.style.cursor = "pointer";

    newCard.style.backgroundColor = colors[randomNumber];
    heading.style.backgroundColor =  colors[randomNumber];
    para.style.backgroundColor =  colors[randomNumber];


    heading.style.fontFamily = "Grand Hotel, cursive";
    heading.style.color = "#000000";
    heading.style.zIndex = "2";
    
    para.style.marginTop = "1rem";
    para.style.color = "#fffff";
    para.style.fontSize = "medium";
    para.style.zIndex = "3";
    para.style.fontFamily = "Roboto, sans-serif";

    heading.innerText = title.value;
    para.innerText = desc.value;

    newCard.appendChild(heading)
    newCard.appendChild(para);
    newCard.appendChild(dot);

    //Delete Feature
    deleteNote(newCard);
    
    newCard.style.zIndex = "1";

    cont.append(newCard);

    

    modal.close();
}

const deleteNote = (card)=>{
    card.addEventListener('click',()=>{
        modal2.showModal();
        deleteBtn.addEventListener('click',()=>{
            card.style.display = "none";
            modal2.close();
        })
    })
}

// const displayNone = (card)=>{
//     deleteBtn.addEventListener('click',()=>{
//         card.style.display = "none";
//         modal2.close();
//     })
// }





  
