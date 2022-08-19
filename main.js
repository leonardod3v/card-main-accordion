//Variable to image (chevron)
let arrow1 = document.getElementById('a1')

//Function to be executed when chevron is clicked
arrow1.addEventListener('click', function() {


    let txt1 = document.getElementById('txt1')
    let q1 = document.getElementById('q1')

    if(txt1.style.display === 'none') {
        txt1.style.display = 'block'
        arrow1.style.transform = 'rotate(180deg)'
        q1.style.fontWeight = 700
        q1.style.color = 'hsl(238, 29%, 16%)'
    }
    else {
        txt1.style.display = 'none'
        arrow1.style.transform = 'rotate(0deg)'
        q1.style.fontWeight = 400
        //Calling hover back
        q1.style = 'hover'
    }
})

let arrow2 = document.getElementById('a2')
arrow2.addEventListener('click', function() {

    let txt2 = document.getElementById('txt2')
    let q2 = document.getElementById('q2')

    if(txt2.style.display === 'none') {
        txt2.style.display = 'block'
        arrow2.style.transform = 'rotate(180deg)'
        q2.style.fontWeight = 700
        q2.style.color = 'hsl(238, 29%, 16%)'
    }
    else {
        txt2.style.display = 'none'
        arrow2.style.transform = 'rotate(0deg)'
        q2.style.fontWeight = 400
        q2.style ='hover'
    }
})

let arrow3 = document.getElementById('a3')
arrow3.addEventListener('click', function() {

    let txt3 = document.getElementById('txt3')
    let q3 = document.getElementById('q3')

    if(txt3.style.display === 'none') {
        txt3.style.display = 'block'
        arrow3.style.transform = 'rotate(180deg)'
        q3.style.fontWeight = 700
        q3.style.color = 'hsl(238, 29%, 16%)'
    }
    else {
        txt3.style.display = 'none'
        arrow3.style.transform = 'rotate(0deg)'
        q3.style.fontWeight = 400
        q3.style = 'hover'
    }
})

let arrow4 = document.getElementById('a4')
arrow4.addEventListener('click', function() {

    let txt4 = document.getElementById('txt4')
    let q4 = document.getElementById('q4')

    if(txt4.style.display === 'none') {
        txt4.style.display = 'block'
        arrow4.style.transform = 'rotate(180deg)'
        q4.style.fontWeight = 700
        q4.style.color = 'hsl(238, 29%, 16%)'
    }
    else {
        txt4.style.display = 'none'
        arrow4.style.transform = 'rotate(0deg)'
        q4.style.fontWeight = 400
        q4.style = 'hover'
    }
})

let arrow5 = document.getElementById('a5')

arrow5.addEventListener('click', function() {

    let txt5 = document.getElementById('txt5')
    let q5 = document.getElementById('q5')

    if(txt5.style.display === 'none') {
        txt5.style.display = 'block'
        arrow5.style.transform = 'rotate(180deg)'
        q5.style.fontWeight = 700
        q5.style.color = 'hsl(238, 29%, 16%)'
    }
    else {
        txt5.style.display = 'none'
        arrow5.style.transform = 'rotate(0deg)'
        q5.style.fontWeight = 400
        q5.style = 'hover'
    }
})









