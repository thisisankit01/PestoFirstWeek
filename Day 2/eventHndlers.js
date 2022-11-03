//addEventHandler() method - only this provides robust(can be consumed by wide variety of user agents).
const elementDiv = document.querySelector('div');
elementDiv.addEventListener('click',sayHi,false);

//removeEventHandler( ) method
var sayHi = function(){console.log('Hi')};

//adding event listener using anonymous function - Anonymous Function is a function that does not have any name associated with it.
document.body.addEventListener('click',function(){// its is not possible to remove it easily because the function is not defined.it is simply cannot be removed.
  console.log('Dude');
},false);

//removing it
document.querySelector('div').removeEventListener('click',sayHi,false);

//adding event listener using function reference
document.querySelector('div').addEventListener('click',sayHi,false);
