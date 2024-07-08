
// document.querySelector('button').addEventListener('click', () => {
//     if(document.querySelector('h1').innerHTML==='Myshyk'){
//         document.querySelector('h1').innerHTML = 'aidin'
//     } else {
//         document.querySelector('h1').innerHTML = 'Myshyk'
//     }

// })

// document.querySelector('.sort').addEventListener('click', () => { 
//     if(document.querySelector('.sort').className === 'sort') { 
//         document.querySelector('.sort').classList.add('active') 
//     } else { 
//         document.querySelector('.sort').classList.remove('active') 
//     } 
// }) 
 
// const sortPopup = document.querySelector('.sort-popup'); 
// const sortList = [ 
//     'популярности', 
//     'цене', 
//     'алфавиту', 
// ] 
 
// for (let i = 0; i < sortList.length; i++) { 
//     if(i==0){ 
//         sortPopup.innerHTML += <li class="active"> ${sortList[i]} </li> 
//     }else{ 
//     sortPopup.innerHTML += <li> ${sortList[i]} </li> 
//     } 
// } 
// const text = [
//     'кошка',
//     'собака',
//     'нурба',
// ]

// for (let i = 0; i < text.length; i++) {
//     console.log(text[i].includes ('ко'))
// }

const list = document.querySelector("ul"); 
const btn = document.querySelector("button"); 
const input = document.querySelector("input"); 
const items = ["bananana", "potato", "Эrgesh"]; 
 
const renderItems = () => { 
  list.innerHTML = ""; 
 
  items.forEach((item) => { 
    list.innerHTML += <li> ${item} </li>; 
  }); 
}; 
 
renderItems(); 
 
btn.addEventListener("click", () => { 
  if (input.value !== "") { 
    if (!(input.value - 2)) { 
        items.push(input.value); 
    } 
  } 
 
  input.value = ""; 
  renderItems(); 
});
 
 
// data types - 8 
// string ---- 'csdcsd'; "cadcasd"; cascsdac; 'a' + true/123/null/undefined; String(123123); 123123.toString() 
// number ---- 123456; 12.345; 2 + 2; 2 - 2; '123123' - 0; Number('123123'); +'123123'; 
// null ---- null 
// undefined ---- undefined 
// boolean ---- true/false; Boolean(0); !!'1234' 
// object 
// symbol 
// bigInt 
 
// structure data 
// [] 
// {}