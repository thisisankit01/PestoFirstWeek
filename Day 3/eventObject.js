document 
.querySelector("#app")
.addEventListener("click",function(event){
  console.log("outer");
},true); //true - capture path not bubbling
         //false: not using capture path

document 
.querySelector("body #inner")
.addEventListener("click",function(event){
  console.log("inner");
},true);

document 
.querySelector("#inner > p")
.addEventListener("click",function(event){
  console.log("p");
},true);

//link 
document
.querySelector('a').addEventListener('click',function(event){
  event.preventDefault(); //link will not work but the console functions will work. //stopPropogation();
  console.log('a was clicked');
});

