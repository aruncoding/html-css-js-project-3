// var companies = setInterval(companies, 0.1)
// var road = setInterval(road, 0.1)
// var air = setInterval(air, 0.00001)
// var sea = setInterval(sea, 0.1)
// let count1 = 1;
// let count2 = 1;
// let count3 = 1;
// let count4 = 1;

// function companies(){
//     count1++;
//     document.querySelector('.first-number').innerHTML = count1;
//     //stop at given condition
//     if(count1==2917){
//         clearInterval(companies)
//     }
// }

// function road(){
//     count2++;
//     document.querySelector('.second-number').innerHTML = count2;
//     //stop at given condition
//     if(count2==3918){
//         clearInterval(road)
//     }
// }

// function air(){
//     count3++;
//     document.querySelector('.third-number').innerHTML = count3;
//     //stop at given condition
//     if(count3==38928){
//         clearInterval(air)
//     }
// }

// function sea(){
//     count4++;
//     document.querySelector('.fourth-number').innerHTML = count4;
//     //stop at given condition
//     if(count4==7192){
//         clearInterval(sea)
//     }
// }



let btn = document.querySelector('.btn-feedback');
let content = document.querySelector('.hide-content');

btn.addEventListener('click', ()=>{
    if(content.style.display ==='block'){
        content.style.display='none';
        btn.style.background = 'white';//white color
        btn.style.color = '#514d4d';
    }
    else{
        content.style.display ='block';
        btn.style.background = 'rgb(7, 13, 89)';//blue color
        btn.style.color = 'white';
    }
})

let btn1 = document.querySelector('.btn-feedback1');
let content1 = document.querySelector('.hide-content1');

btn1.addEventListener('click', ()=>{
    if(content1.style.display ==='block'){
        content1.style.display='none';
        btn1.style.background = 'white';//white color
        btn1.style.color = '#514d4d';
       
    }
    else{
        content1.style.display ='block';
        btn1.style.background = 'rgb(7, 13, 89)';//blue color
        btn1.style.color = 'white';
    }
})

let btn2 = document.querySelector('.btn-feedback2');
let content2 = document.querySelector('.hide-content2');

btn2.addEventListener('click', ()=>{
    if(content2.style.display ==='block'){
        content2.style.display='none';
        btn2.style.background = 'white';//white color
        btn2.style.color = '#514d4d';
        
    }
    else{
        content2.style.display ='block';
        btn2.style.background = 'rgb(7, 13, 89)';//blue color
        btn2.style.color = 'white';
    }
})

//scroll about javascript
//about-content javascript code for slide from left to right
window.addEventListener('scroll', reveal)

function reveal(){
    var reveals = document.getElementsByClassName('reveal');

    for (var i =0; i<reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 100;

        if(revealTop < windowheight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


//about-image javascript code for slide from right to left
window.addEventListener('scroll', aeveal)

function aeveal(){
    var aeveals = document.getElementsByClassName('aeveal');

    for (var i =0; i<aeveals.length; i++){

        var windowheight = window.innerHeight;
        var aevealTop = aeveals[i].getBoundingClientRect().top;
        var aevealPoint = 100;

        if(aevealTop < windowheight - aevealPoint){
            aeveals[i].classList.add('activa');
        }
        else{
            aeveals[i].classList.remove('activa');
        }
    }
}


//delivere slide from down
window.addEventListener('scroll', delivere)

function delivere(){
    var deliveres = document.getElementsByClassName('delivere');

    for (var i =0; i<deliveres.length; i++){

        var windowheight = window.innerHeight;
        var delivereTop = deliveres[i].getBoundingClientRect().top;
        var deliverePoint = 100;

        if(delivereTop < windowheight - deliverePoint){
            deliveres[i].classList.add('sctiva');
        }
        else{
            deliveres[i].classList.remove('sctiva');
        }
    }
}

//gallery section slide 
window.addEventListener('scroll', galler)

function galler(){
    var gallers = document.getElementsByClassName('galler');

    for (var i =0; i<gallers.length; i++){

        var windowheight = window.innerHeight;
        var gallerTop = gallers[i].getBoundingClientRect().top;
        var gallerPoint = 100;

        if(gallerTop < windowheight - gallerPoint){
            gallers[i].classList.add('pctiva');
        }
        else{
            gallers[i].classList.remove('pctiva');
        }
    }
}


//toogle menu bar

// burger = document.querySelector('.burger');
// nurabar = document.querySelector('.meno');
// menu = document.querySelector('.navbar-menu');
// // var peno = document.querySelector('.navbar')

// burger.addEventListener('click', () =>{
//     nurabar.classList.toggle('v-resp')
//     menu.classList.toggle('h-resp')
//     // peno.classList.toggle('p-resp')

// })