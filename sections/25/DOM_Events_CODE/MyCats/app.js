console.log('connected')

const form = document.querySelector('form');
const btn = document.querySelector('button');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');


form.addEventListener('submit', (e) => {
    // console.log(e)
    e.preventDefault();
    console.log("Preventing submission");
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
    input.value = '';
    
})

