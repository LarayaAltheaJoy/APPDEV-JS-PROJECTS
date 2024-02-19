const hex = [0,1,2,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]
const button = document.getElementById("btn")
const color = document.querySelector(".color")

//function for changing the colors for our HTML File
btn.addEventListener("click", () => {

    //target the body from the HTML
    let hexColor = '#'
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}
