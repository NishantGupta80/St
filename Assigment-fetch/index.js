let data;
const main = document.getElementById("main");

async function fetchdata()
{
    const response = await fetch("https://reqres.in/api/users?page=2");
     data = await response.json();
    console.log(data);


    main.className="main";

 data.data.forEach(el =>{
    console.log("hello");
    const div = document.createElement("div");
    div.className="cards";
    div.innerHTML = `<h1>${el.first_name}</h1> <p>${el.email}</p> <img src="${el.avatar}"/>`;
    main.appendChild(div);
   // return div;
 })


}

 

fetchdata();