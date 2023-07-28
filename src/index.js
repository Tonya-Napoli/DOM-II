import './less/index.less'

// Your code goes here!
console.log('hello world')

//1. Load Event
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!'


//2. The Copy Event
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text
    })
})

//3. click
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})




}