//CRUD in HTML through js

//creating element


// create strong element and text node and add it to the DOM
document.getElementById('A').innerHTML = '<strong>Hi</strong>'; 

/*create a div element and text node to replace <span id='B'></div>
  (notice span#B is replaced)    */
  document.getElementById('B').outerHTML = '<div id= "B" class= "new">Whats Shaking </div>'

  //create a text node and update div#C with the text node 
  document.getElementById('C').textContent = 'Dude';


  console.log(document.body.innerHTML);
  /*
  <body>
  <div id="A"><strong>Hi</strong></div>
  <div id= "B" class= "new">Whats Shaking </div>
  <div id="C">Dude</div>
</body>
  */





//Add node objects to the DOM.
// 1. appendChild()

const div = document.getElementById("C");
div.appendChild(document.createElement('p'));

//2. insertBefore()- requires 2 parameters

var text1 = document.createTextNode('1'); //created a text "1".
var li = document.createElement('li'); // created <li></li>
li.appendChild(text1); // inserted text inside li <li>1</li>
var ul = document.querySelector('ul');

ul.insertBefore(li,ul.firstChild);
console.log(document.body.innerHTML);

/*
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
*/

//Removing and Replacing Nodes
// 1. removeChild()

 //remove element node
var divA= document.getElementById("A");
divA.parentNode.removeChild(divA);

//remove text node
var divB= document.getElementById("B").firstChild;
divB.parentNode.removeChild(divB);

/*
<div id="A">Hi</div>
<div id="B">Dude</div>
*/
 
//2. replaceChild();
const newNode = document.createTextNode("Water");
const element = document.getElementById("myList").children[0];

element.replaceChild(newNode, element.childNodes[0]);


//CSS
const divStyle = document.querySelector("div").style;


div.style.backgroundColor="Red";
div.style.width="100px";
div.style.height="100px";

//CRUD IN CSS

//setProperty (propertyName, value)
divStyle.setProperty('background-color','red');
divStyle.setProperty('border','1px Solid Black');

//getProperty (propertyName)
divStyle.getPropertyValue('background-color');
divStyle.getPropertyValue('border');

//removeProperty()
divStyle.removeProperty('background-color');
divStyle.removeProperty('border');

//getComputedStyle()
const computedStyle = getComputedStyle(div); // for eg shows em to px
console.log('computedStyle.width');


