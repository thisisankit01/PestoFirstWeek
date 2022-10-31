//addEventHandler() method - only this provides robust
const elementDiv = document.querySelector('div');
elementDiv.addEventListener('click',function(){
console.log('fire/trigger addEventListener')
},false);

//removeEventHandler( ) method
var sayHi = function(){console.log('Hi')};

//adding event listener using anonymous function - Anonymous Function is a function that does not have any name associated with it.
document.body.addEventListener('click',function(){// its is not possible to remove it easily because the function is not defined.it is simply cannot be removed.
  console.log('Dude');
},false);

//removing it
document.querySelector('div').removeEventListener('click',sayHi,false);

//adding evenet listener using function reference
document.querySelector('div').addEventListener('click',sayHi,false);
