let p = document.querySelector("p");
const heading = document.querySelector("h1");

let textContent = p.innerText.replace(/\?/g, '🤔').replace(/!/g, '😲');

        // Split the text into sentences
        const sentences = textContent.split('.');



 //const sentences = p.innerText.split(". ");
let totalWords = 0;

const HighLightWords = sentences.map(sentence =>{
    const words = sentence.split(" ");
     totalWords += words.length;
    const formattedWords = words.map(el=>{
        if(el.length > 6)
        {
            return `<span class="highlight">${el}</span>`;
        }
        return el;
    })

    sentence = formattedWords.join(" ");

    return sentence;

})

//let sentences = p.innerText.replace(/\?/g, '🤔');

p.innerHTML = HighLightWords.join(`.<br>`);

const link = document.createElement("a");
link.href = "https://forcemipsum.com/";
link.textContent = "Source :(https://forcemipsum.com/)";
document.body.appendChild(link);

const total = document.createElement("h1");
total.innerText=`${totalWords}`;

heading.insertAdjacentElement("afterend",total);

console.log(totalWords);






