const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const button = document.getElementById("btn")
const color = document.querySelector(".color")

//function for changing the colors for our HTML File
btn.addEventListener("click", () => {

//target the body from the HTML
console.log(document.body)

//get a random number for colors between 0-3
const randomNumber = getRandomNumber()
document.body.style.backgroundColor = colors[randomNumber]
color.textContent = colors[randomNumber]
})

getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}

