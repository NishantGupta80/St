
document.addEventListener("DOMContentLoaded", function() {
var subject=document.getElementById("sub");
var Tarea=document.getElementById("area");
var form=document.getElementById("frm");
var ContentsDiv=document.getElementById("AQ");
var left=document.getElementById("left");
var right=document.getElementById("right");

form.addEventListener("submit",function(event){
event.preventDefault();
   var PQ=document.createElement("div");
   PQ.className="pasteQ";
   PQ.innerHTML=`<h1 class="PS">${subject.value}</h1><p class="PP">${Tarea.value}</p>`;
   ContentsDiv.appendChild(PQ);
   subject.value="";
   Tarea.value="";
   var lq=document.querySelectorAll(".pasteQ");
   lq.forEach(function(questionText) {
      questionText.className=".PasteQ";
   questionText.addEventListener("click",function(){
   var Questiontag=document.createElement("p");
   Questiontag.innerHTML=`<span class="PS">Question</span>`;
   right.appendChild(Questiontag);
   right.appendChild(questionText);
   })
   })
})

});
