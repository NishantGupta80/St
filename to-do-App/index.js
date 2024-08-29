const leftPane = document.querySelector(".left");
const rightPane = document.querySelector(".right");

const HeadingDiv = document.createElement("div");

const para1 = document.createElement("p");
para1.innerText = "Task List";
const para2 = document.createElement("p");
para2.innerText = "add Tasks to Your List By typing in to The Right Side of The App"
HeadingDiv.appendChild(para1);
HeadingDiv.appendChild(para2);


leftPane.appendChild(HeadingDiv);


const listDiv = document.createElement("div");



function AddTask(taskValue)
{
    if(taskValue.trim() === "") return;
  
    let ul = document.createElement("ul");
   ul.innerHTML = `<span>${taskValue}<span/> <input  id="checkBox" type="checkBox"/> <span class="cross">X</span> <span class="edit-btn">&#9998;</span> `;

   listDiv.appendChild(ul);
   leftPane.appendChild(listDiv);
   textArea.value="";
  ul.querySelector(".cross").addEventListener("click",()=>{
    ul.remove();
  })

  const box = ul.querySelector("#checkBox");

  box.addEventListener("click",function(){
    if(box.checked)
    {
      ul.style.textDecoration = "line-through";
      console.log("checked")
    }
    else
    {
      ul.style.textDecoration = "none";
      console.log("checked")
    }
   
  })

}

//AddTask("Take A bath");
const rightTextDiv = document.createElement("div");
const textArea = document.createElement("textarea");
const button = document.createElement("button");
button.innerText="Submit";
button.addEventListener("click",()=>AddTask(textArea.value));
rightTextDiv.appendChild(textArea);
rightTextDiv.appendChild(button);
rightPane.appendChild(rightTextDiv);

////Working till sumitting a task


//Now functioning of cross and Checkbox

