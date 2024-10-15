//  intro  event  this is work when is click  on button 
// most use click  event
// add evenet
// const btn=document.querySelector(".btn-headline")
// console.dir(btn)
//  btn.onclick=function(){
//     console.log(" yes you click me")
//  } but this not right way click apply method

//  we are using addEventListener
// const btn=document.querySelector(".btn-headline")
// function click()
// {
// comnsole.log(' you are the  best')}
// btn.addEventListener("click", click)
//  btn.addEventListener('click', function(){
// console.log(" i click ")
//  })
//   by arro function 
//  btn.addEventListener('click',()=>{
    // console.log(" this is arrow")
//  })


//  this keyword inside
 const btn=document.querySelector(".btn-headline")// IN ARROW FUNCTION THIS VALUEIS WINDOWS
 addEventListener('click',()=>{
    console.log(" click hu ")
    console.log(" again click hnhu")
    console.log(this)
 })

//  btn.addEventListener("click", click) AND regular function this value button itself
//   btn.addEventListener('click', function(){
//  console.log(" i click ")
//  console.log(this)

//   })