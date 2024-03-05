//counter variable declaration
let counter = 0;

//selecting value and button
const value = document.querySelector('#value')
const btns =  document.querySelectorAll('.btn')

console.log(btns)
btns.forEach((btn)=> {
    console.log(btn)

    btn.addEventListener('click' , (e) =>{
        console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if (styles.contains ('decrease')){
            counter --
        }else if(styles.contains('increase')){
            counter ++
        }else if (styles.contains('decrease5')) {
            counter -= 5;
        }else if (styles.contains('increase5')) {
            counter += 5;
        }else if (styles.contains('randomize')) {
            counter = Math.floor(Math.random() * 2000) - 1000
        }else{
            counter = 0
        }
        value.textContent=counter
        if(counter > 0){
            value.style.color="green"
        }else if(counter < 0){
            value.style.color="red"
        }else if(counter == 0){
            value.style.color="black"
        }
    })
})
