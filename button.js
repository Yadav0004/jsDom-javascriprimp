// console.log('heelo ji ')
// const allbutton =document.querySelectorAll('.mybutton button')
// console.log(allbutton)
// const firstbtn= document.querySelector('#one')
//  firstbtn.addEventListener('click', function(){
//     console.log(" you click me")
//  })

 // loop  forOf
//    for( let button  of allbutton){
//     button.addEventListener("click", function(){
//         // console.log("you click me")
//         console.log( this)
//     })
//    }// i ave three button   and when ckick on first the ngive info about first and when ckick secoud the  give info  secound  etc
//    for( let button  of allbutton){
    // button.addEventListener("click", ()=>{ 
        // console.log("you click me")
        // console.log( this.textContent) this will give undefine
        // console. log(this)
    // })
//    }

//    for loop 
//  for( let i =0; i<allbutton.length; i++){
//     allbutton[i],addEventListener("click",function(){
//         console.log(this)
//     })
//  }

//  forEach
  
//  allbutton.forEach(function(l){
//     l.addEventListener("click",function(){
//         console.log( this)
//     })

    
//  })



// evenetobject
// const firstButton=document.querySelector("#one")
//  firstButton.addEventListener('click', function(){
//     console.log(this)
//  })
// but in arrow function this value change it is window object
//  const firstButton=document.querySelector("#one")
//  firstButton.addEventListener('click', ()=>{
//     console.log(this)
//  })
//  jab bhi add any element par evenet listern add hoga browser  execute code line by line
// browser have  webApi browser keep alart waht dose on click on the button 
//  whne click on button then user  event click kiya 
// browser  callback function give js engine with event information
//  ye information ak object k form thega jo hum stor kar saktevhai  as aggrunment  

//  const firstButton=document.querySelector('#one')
//  firstButton.addEventListener("click",function(event){
//     console.log(event)
//  })
//  for( let button of firstButton){
// button.addEventListener('click',(e)=>{
//     // console.log(e.target)
//     // console.log(e.currentTarget)


// })
//  }

 const allbutton=document.querySelectorAll(".mybutton button")
allbutton.forEach((button)=>{
    button.addEventListener('click',(e)=>{
         let num=0;
         for( let i=0; i<=100000000; i++){
            num+=i}
        console.log(e.currentTarget.textContent)
    })
}
)




