// const btn = document.querySelector('#v2');

// btn.onclick = function () {
//     console.log("YOU CLICKED ME!")
//     console.log("I HOPE IT WORKED!!")
// }

// function scream() {
//     console.log("AAAAAHHHHH");
//     console.log("STOP TOUCHING ME!")
// }

// btn.onmouseenter = scream;


// document.querySelector('h1').onclick = () => {
//     alert('you clicked the h1!')
// }


// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', function () {
//     alert("CLICKED!");
// })

// function twist() {
//     console.log("TWIST!")
// }
// function shout() {
//     console.log("SHOUT!")
// }

// const tasButton = document.querySelector('#tas');

// // tasButton.onclick = twist;
// // tasButton.onclick = shout;

// tasButton.addEventListener('click', twist)
// tasButton.addEventListener('click', shout)



//my code below


console.log('linked')

const btn = document.querySelector('#v2');
console.dir(btn)

btn.onclick = function () {
    console.log('You clicked me!');
    console.log("I hope it worked")
}

function scream() {
    console.log("Ahh!!")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
    console.log("You clicked on H1")
}

const btn3 = document.querySelector('#v3');


btn3.addEventListener('dblclick', function () {
    console.log('you double clicked on button 3')
    alert('button 3 double clicked')
})


function twist() {
    console.log("please twist")
}

function shout() {
    console.log("shouting!!!")
}

const tasButton = document.querySelector('#tas')

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist, { once: true})
tasButton.addEventListener('click', shout)

tasButton.addEventListener('click', (e) => {
    console.log(e)
})