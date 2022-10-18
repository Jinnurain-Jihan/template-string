// var name="jihan";
// var roll=10;
// var age=23;

// var myInfo="my name is "+name+" and my roll number is "+roll+" and  i am "+age+" years old.";

//  var  myInfo=`my name is ${name} 
//  and my roll number is ${roll} 
//  and i am ${age} years old`;

// console.log(myInfo);

var url="img/baby.jpg";
var title="kid's product";
var description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium.";
var product=`
    <div id="div">
        <img src='${url}'/>
        <h2>${title}</h2>
        <p>${description}</p>
        <button>Buy Now</button>
    </div
`

document.getElementById("root").innerHTML=product;
console.log(product);