//components for Item1.html

const btn1 = 
document.getElementById("btn1")

btn1.addEventListener("click", () => {

    //get input from our user 
    let Name = document.getElementById("Name").value
    let Address = document.getElementById("Address").value
    let Telephone = document.getElementById("Telephone").value
    let Major = document.getElementById("Major").value

    //console.log(Name + Address + Telephone + Major)

    //output using template string

    let x = `
    Hello! ${Name}, I see that you are from ${Address} and you are also pursuing ${Major} and you can be contacted using ${Telephone}.
    `

    //output1 update

    document.getElementById("output1").innerHTML = x
})

const btn2 =
document.getElementById("btn2")
btn2.addEventListener("click", () => {

    let Sales = document.getElementById("Sales").value
    let profit = Sales * 0.23;

    let y = `
        The amount of profit from  ${Sales} is ${profit}.
    `
    document.getElementById("output2").innerHTML = y



})

const btn3 =
document.getElementById("btn3")
btn3.addEventListener("click", () => {

    let Speed = document.getElementById("Speed").value
    let Dist1 = Speed * 5;
    let Dist2 = Speed * 8;
    let Dist3 = Speed * 12;


    let z = `
    The distance the car will travel in 5 hours is = ${Dist1}. <br>
    The distance the car will travel in 8 hours is = ${Dist2}.<br>
    The distance the car will travel in 12 hours is = ${Dist3}.
    `
    document.getElementById("output3").innerHTML = z

})

const btn4 =
document.getElementById("btn4")
btn4.addEventListener("click", () => {

    let Miles = document.getElementById("Miles").value
    let Gallon = document.getElementById("Gallon").value

    let Mpg = Miles / Gallon;


    let q = `
    The car's total Miles per Gallon is = <b>${Mpg}<b>.
    `
    document.getElementById("output4").innerHTML = q

})

const btn5 =
document.getElementById("btn5")
btn5.addEventListener("click", () => {

    let Celsius = document.getElementById("Celc").value

    let F = Celsius*(9/5) + 32;


    let far = `
    ${Celsius}°C in Fahrenheit is = <b>${F} °F<b>.
    `
    document.getElementById("output5").innerHTML = far

})

const btn6 =
document.getElementById("btn6")
btn6.addEventListener("click", () => {

    let Cookie = document.getElementById("Cookie").value

    let Cal = Cookie * ((300 * 10) / 40);


    let cal = `
    Calories Consumed = <b>${Cal}<b>.
    `
    document.getElementById("output6").innerHTML = cal

})

const btn7 =
document.getElementById("btn7")
btn7.addEventListener("click", () => {

    let Male = parseInt(document.getElementById("Male").value)
    let Female = parseInt(document.getElementById("Female").value)
    let total = Male + Female;
    let Mtotal = (Male / total) * 100;
    let Ftotal = (Female / total) * 100;

    let reg = `
    Total Students = <b>${total}<b>. <br>
    Percentage of Female Students = ${Ftotal}%.<br>
    Percentage of Male Students = ${Mtotal}%.
    `
    document.getElementById("output7").innerHTML = reg

})