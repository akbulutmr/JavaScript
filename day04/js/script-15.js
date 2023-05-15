//quertySelector eslesen ilk elemani secer

const headEl = document.querySelector("h1");
console.log(headEl);

const aboutUsEl =document.querySelector("#aboutUs")
console.log(aboutUsE1)

const spanELl = document.querySelector("#aboutUs span");
console.log(spanELl);

const menuEl =document.querySelector("ul.menu");
console.log(menuEl)

const menuItem3El = document.querySelector("ul.menu li:nth-child(3)");
console.log(menuItem3El)

headEl.innerText ="hello Javascript"
console.log(headEl)

//querySelectorAll eslesen tum elemanlari getirir.

const spanELs = document.querySelectorAll("#aboutUs>span");
console.log(spanELs)



//listenin ikinvi elemanini alip,son elemanina ekleyen kod
const listItemText =document.querySelector(".menu li:nth-child(2)").innerText;
console.log(listenItemText)
document.querySelector(".menu li:last-child").innerText += listItemText;