var inputArray=[1,2,3,4,5,6,7,6,7,6,8,9,10];
var newarr=[];
document.querySelector("h1").innerHTML=inputArray;
var input = document.createElement("input");
var div=document.getElementById("inputArea");
input.id="txtElement"
div.appendChild(input);
var btn=document.createElement("button");
btn.id="submit";
//btn=document.getElementById("submit");
btn.textContent="DELETE";
div.appendChild(btn);


 btn.addEventListener("click",handleClick);
  function handleClick(){
   if(newarr.length!==0)
   inputArray=newarr;
   newarr=inputArray.filter((x)=>{
      return x!=input.value;
     // inputArray=newarr;
   })
   document.querySelector("h1").innerHTML=newarr;
  }