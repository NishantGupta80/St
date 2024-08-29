const search = document.getElementById("search");
const div = document.getElementById("suggestions");

function displaySuggestions(ele, url) {
    const p = document.createElement('p');
    p.innerText = ele;
    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.style.height = "100px";
    img.style.width = "100px";
    const div1 = document.createElement('div');
    div1.appendChild(p);
    div1.appendChild(img);
    div.appendChild(div1);
}

search.addEventListener('keyup', (ele) => {
    div.innerText = null;
    console.log(search.value);
    const searchkeyword = search.value;
    fetch(`https://dummyjson.com/products/search?q=${searchkeyword}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            data.products.forEach(element => {
                if (element.title.includes(searchkeyword) && searchkeyword) {
                    console.log(element.title);
                    displaySuggestions(element.title, element.images);
                }
                else if (!searchkeyword) {
                    div.innerText = null;
                }
            });
        })
})