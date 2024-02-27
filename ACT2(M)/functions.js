//number 1
const calcu = 
document.getElementById("calcu")

calcu.addEventListener("click", () => {

    let Seconds = document.getElementById("Seconds").value
    let min = Seconds / 60;
    let hours = Seconds / 3600;
    let days = Seconds / 86400;

    if (Seconds >= 86400) {
        document.getElementById("output1").innerHTML =  `Number of days: ${days}`;
    } else if (Seconds >= 3600) {
        document.getElementById("output1").innerHTML =  `Number of hours: ${hours}`;
    } else if (Seconds >= 60) {
        document.getElementById("output1").innerHTML =  `Number of minutes: ${min}`;
    } else {
        document.getElementById("output1").innerHTML =  `Number of seconds: ${Seconds}`;
    }

}
)

//Number 2
const calcu2 = 
document.getElementById("calcu2")

calcu2.addEventListener("click", () => {

    let pounds = document.getElementById("weight").value
    

    if (pounds <= 2) {
        document.getElementById("output2").innerHTML =  `Your Charge is: $1.10`;
    } else if (pounds > 3 && pounds < 6) {
        document.getElementById("output2").innerHTML =  `Your Charge is: $2.20`;
    } else if (pounds  > 7 && pounds <= 10) {
        document.getElementById("output2").innerHTML =  `Your Charge is: $3.70`;
    } else {
        document.getElementById("output2").innerHTML =  `Your Charge is: $3.80`;
    }

}
)
//Number 3
const calcu3 = 
document.getElementById("calcu3")

calcu3.addEventListener("click", () => {

    let package = document.getElementById("package").value
    let price = 99;
    let discount = 0;
    let totalP = (package * price).toFixed(2);
    if (package >= 10 && package <= 19) {
        discount = 0.2
    } else if (package >= 20 && package <= 49) {
        discount = 0.3
    } else if (package >= 50 && package <= 99) {
        discount = 0.4
    } else if (packages >= 100){
        discount = 0.5
    }

    let totalD =  (totalP * discount).toFixed(2);
    let total = (package * price) - totalD ;
    let percent = discount * 100;
    let cal = `
    Total Amount for Packages = $${totalP}<br>
    Discount amount: $${totalD} or ${percent}%<br> Total amount after discount: $${total};
    `
    document.getElementById("output3").innerHTML = cal
}
)
//Number 4
const calcu4 = 
document.getElementById("calcu4")

calcu4.addEventListener("click", () => {

    let Mass = document.getElementById("mass").value
    let weight = Mass * 9.8;

    if (weight > 1000) {
        document.getElementById("output4").innerHTML = `The object's weight is ${weight} Newtons, and it is too heavy.`;
    } else if (weight < 10) {
        document.getElementById("output4").innerHTML = `The object's weight is ${weight} Newtons, and is too light.`;
    } else {
        document.getElementById("output4").innerHTML = `The object's weight is ${weight} Newtons.`;
    } 


}
)