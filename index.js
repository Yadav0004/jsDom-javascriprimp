
//  How to Select Element 
//  Select element using  get element by id need in html tag  must have id
 //const mainHeadig =document.getElementById("main-heading") // this is not html  element it is object  becuse is make object and return object
// store in variale 

// select element using query selctoer work for id tag class
/*const mainHeading=document.querySelector('#main-heading')
console.log( mainHeading)
 querySelectorAll use for select multiple element
const header=document.querySelectorAll( 'h1 ')
document.querySelector("div.headline h2")
const mainHeading=document.querySelector("div.headline h2")
 mainHeading.style.color='red'
console.log( mainHeading .style)
console.log(header) */

// change text
// textContnte and innerText
 /*const mainHeading= document.getElementById('main-heading')
 console .log( mainHeading.textContent) */ // what you right  in your heading this show
// change the value
/*
 mainHeading.textContent=" this is also main content "
 console. log(mainHeading.textContent)
 console. log(mainHeading.innerText)
*/
 // ineer text

//  Change the Style

//get  and set Attribute

// const link= document.querySelector('a')
// //Atteribute class id palcholder type href  this type of things are attribute
// console.log(link.getAttribute("href"))
// const inputElement= document.querySelector(".from-todo input")
// console.log(inputElement.getAttribute("type"))

// Set Attribute or chnge value
/*const link= document.querySelector('a')
console.log(link.getAttribute("href"))
console.log(link.getAttribute("href").slice(1))// before#Home after Home

link.setAttribute("href","https://stark.ai/ai-mock-interview")
console.log(link.getAttribute('href'))
*/
//  Get multiple element using getElement By id
//  Get multiple element using items Using querySelector/
/*const navItems=document.getElementsByClassName("nav-item")// it is retun a array like object it is give html collection
console.log(navItems[2])
console .log(Array. isArray(navItems))

  const navItems2= document .querySelectorAll(".nav-item") //it will return a array like object and return  node list
  console.log(navItems2)
// we can not use for Each to iterate through Htnl collection 
//    simple foor loop 
//    for loop 
//    forEach loop
// and array like object use:- indexing .lenght proparty
const navItems=document.getElementsByTagName("nav-item")
 for( i=0; i<navItems.length; i++){
    // console.log([i])
    const navItem=navItems[i]
    navItem.Style.backgroundColor="#fff"
    navItem.Style.color='green'

 }
    const navItems=document.getElementsByTagName("nav-item")

  for( let  navItem of navItem){
    navItem.Style.backgroundColor="#fff"
    navItem.Style.color="red"
  }
   console.log(navItems)

//  change nav item  html collection in array 
let navItems=document.getElementsByTagName("a")
// console.log(navItems)
 const  navItem=Array.from(navItems) //after convert in array than you can apply all array method
navItem.forEach((navItem) => {
    navItem.style.backgroundColor="#fff"
    navItem.style.color="red"  
});

//querySelector  give node list
let navItems=document.getElementsByTagName("a") // in nodelist  somple for loop , for of loop , forEach loop
for( i=0; i<navItems.length; i++){
    // console.log([i])
    const navItem=navItems[i]
    navItem.style.backgroundColor="#fff"
    navItem.style.color='orange'

 } */

//  inner Html
/*
const headline= document.querySelector('.headline')
 headline.innerHTML="<h1> mai h1 hu</h1>"
 headline.innerHTML+="<button class=\'btn\'> learn more</button>"
 console.log( headline.innerHTML)*/
 // const sectionTodo= document.querySelector('.section-todo')
  // console.log(sectionTodo)
    // this is tell me how many class i dfine in  div  or particular Section 
// console.log(sectionTodo.classList)
// how to do  with js class name in html
// sectionTodo.classList.add('bg-drak')
//  how to remove
// sectionTodo.classList.remove('container')
//  how check  a class is eixst or not
//  const ans=sectionTodo.classList.contains('container')
//  console.log(ans)

//  toggle class  jo class phele hai remove karta hai if nahi to add karta hai 
//sectionTodo.classList.toggle('container')
//  const header=document.querySelector(".header")

  // how to add HTML FILE and in js
  //  new add
  // const todoList= document.querySelector('.todo-list')
  // todoList.innerHTML='<li> new todo</li>'
  //  this lone add new add old both 
  //todoList.innerHTML=todoList.innerHTML+"<li> this secound</li>" // this is performancee issue when use innerHTML
 
  //  when is should use it , when i sholud not


   // this  method use all devloper for creating new ELEMENT
  // doument .createElement()
  //append
  // prepend
  // remove
  // const newTodoItem=document.createElement('li')
  // add text node
  //const newTodoItemText=document.createTextNode(" the man with golden heart")
  //const todoList=document.querySelector('.todo-list') //by help of this line add on interface
  // newTodoItem.appendChild(newTodoItemText)
  //todoList.append(newTodoItem)// this is also for intrface line show
 // console.log(newTodoItem)


  //  now add intrface
  // const newTodoItem=document.createElement('li')
  //  newTodoItem.textContent="tech the student"
  //  const todoList=document.querySelector('.todo-list')
  //  todoList.append(newTodoItem)
  //  todoList.prepend(newTodoItem) add on starting

  // remove todo one
  //  const todo1=document.querySelector('.todo-list li')
  //  todo1.remove()
  //  console.log(todo1)

  //  before 
  // After
  // beforbegin
  // afterBegain
  // afterend
// const newTodoItem=document .createElement("li")
// newTodoItem.textContent="there is no car"
// const todoList=document.querySelector(".todo-list")
// // todoList.before(newTodoItem)
// todoList.after(newTodoItem)

// const todoList=document.querySelector(".todo-list")
// todoList.insertAdjacentElement("beforeend", "<li> thisis </li>")

//  clone Nod
//  const ul =document.querySelector('.todo-list')
//  const li=document.createElement("li")
//  li.textContent="nre ffk"
//  const li2=li.cloneNode(true)
//  ul.append(li)
//  ul.parentNode(li)




// some old methods to Support poor  to IE
// appendchild()
// insertBfore()
// replaceChild()
// removeChild()
// const ui=document.querySelector(".todo-list")
//  new Element
// const li=document. createElement('li')
// const referenceNode=document.querySelector('.first-todo')
// li.textContent='hello ji'
// ui.appendChild(li)
// ui.insertBefore(li, referenceNode)
// const referenceNode=document.querySelector('.first-todo')
// ui.replaceChi/ld(li,referenceNode)



//  Staic list vs live  lists
// querySelectorAll ye statice list dega
// get ElementsBySomthing live list denge
// const listItem= document.querySelectorAll(".todo-list li")
// const listItems=ui.getElementBytagName("li")
//  const newss=document.createElement('li')
//  newss.textContent="this isstaice"
//  const ui=document.querySelector(".todo-list")
//  ui.append(newss)
// console .log(listItem)

//  how to give the dimantion of array
//  const sectiontodo=document.querySelector(".section-todo")
//  const info=sectiontodo.getBoundingClientRect()
//  const info=sectiontodo.getBoundingClientRect().height
//  const info=sectiontodo.getBoundingClientRect().left
//  const info=sectiontodo.getBoundingClientRect().width
//  w use like this we can find spacfice information about CSS


//  console.log(info)