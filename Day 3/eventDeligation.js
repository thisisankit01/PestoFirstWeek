//it is not possible to apply event handler to all td . for eg 1000tds
//to overcome that:-

document.querySelector('table').addEventListener('click',function(event){
  if(event.target.tagName.toLowerCase() === 'td'){ //The .toLowerCase() function only exists on strings.
//make sure we only run code when td is targetted
  console.log(
    event.target.textContent
  );// use event target to gain access to target of the event which is the td.
  }
},false //disabling capture phase
);