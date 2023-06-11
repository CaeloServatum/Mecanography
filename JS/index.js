window.addEventListener('DOMContentLoaded',function(){

    
    const textDiv = document.querySelector(".text_square");
    const eyeButton = document.querySelector('.eye_Button');
    const timer = document.querySelector('.timer_Buttton');
    const time = document.querySelector('.timer_Buttton span');
    const scoreDiv = document.querySelector(".score_Square");
    const eye = document.querySelector(".fa-eye");
    const eyeSlash = document.querySelector(".fa-eye-slash");
    const input = document.querySelector('.main_Input input');
    const correctSquare = document.querySelector('.correct_Square p');
    const wrongSquare = document.querySelector('.wrong_Square p');
    const puntuacion = document.querySelector('.puntuacion')

    let counterStarted = false;
    let initialWord = 0;
    let timerCounter = 60;
    let selectedPharagraph;
    let correctWords = 0;
    let wrongWords = 0;

    

    input.addEventListener('keydown',function(e){

        if (counterStarted == false) {
            counterStarted = true;
            let timerInterval = setInterval(function(){
                timerCounter --;
                timer.children[0].textContent = "0:"+timerCounter;
                if(timerCounter == 0) {
                    puntuacion.textContent = 'tu puntuacion es: '+correctWords+' WPM'
                    puntuacion.classList.remove('d-none');
                    setTimeout(() => {
                        puntuacion.classList.add('d-none');
                    }, 5000);
                }
            },1000)
        }

     
        const textSpans = document.querySelectorAll(".text_square span");

       

        if(e.keyCode == 32) {

            if(textSpans[initialWord].textContent == e.target.value.trim()) {
                textSpans[initialWord].classList.add('correct')
                textSpans[initialWord].classList.remove('wrong')
                correctWords ++;
                correctSquare.textContent = correctWords
            } else {
                textSpans[initialWord].classList.add('wrong')
                textSpans[initialWord].classList.remove('correct')
                wrongWords ++;
                wrongSquare.textContent = wrongWords

            }

            e.target.value = '';
            initialWord++;
            textSpans[initialWord].classList.add('active');

            
        }
    })


    let words = [
        'La salchichita espacial es una comida muy especial para los gatitos espaciales por que tiene mucha carne espacial, es la que se necesita para que sus cuerpos espaciales aguanten el espacio espaciado por que los gatitos espaciales tienen muchas michi dificultades en su michiespacial vida.',
        'League of Legends (también conocido por sus siglas LoL), es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games. Inspirándose en Defense of the Ancients, los fundadores de Riot buscaron desarrollar un juego independiente del mismo género.',
        'Steven Universe es una serie de televisión estadounidense, en formato de animación, creada por Rebecca Sugar para Cartoon Network. Narra la historia de un niño llamado Steven, que vive en el pueblo ficticio de Beach City junto a tres guerreras alienígenas con superpoderes: Garnet, Amatista y Perla. A lo largo de los episodios, Steven aprenderá a controlar los poderes de su gema de cuarzo heredados de su madre y ayudará al resto de gemas en las misiones para defender a la humanidad.'
    ]

    createSpans()


   

    let localStorage = window.localStorage;
    // Variables Inicializada ♥
    let showTimer;
    let showScore;
    
    // ---- GETTING LOCAL STORAGE ----
    showScore = localStorage.getItem('showScore') || 'false';
    showScore = showScore === 'true';

    // validando si hay una llave 'showTimer' en el local storage
    showTimer = localStorage.getItem("showTimer") || "true"; // valor que se recibe del localStorage
    showTimer = showTimer === "true";
    // --------


    if(showTimer) {
        timer.children[0].classList.remove("d-none")
    } else {
        timer.children[0].classList.add("d-none")
    }

    if(showScore) {
        scoreDiv.classList.remove("d-none")
        eyeButton.children[0].classList.add('d-none');
        eyeButton.children[1].classList.remove('d-none');
    } else {
        scoreDiv.classList.add("d-none")
        eyeButton.children[0].classList.remove('d-none');
        eyeButton.children[1].classList.add('d-none');
        
    }
                                // Funcion implicita ♥
    eyeButton.addEventListener('click',function(){
        mostrar();
    })

    timer.addEventListener('click',function(){
        showTimer = !showTimer;
        localStorage.setItem('showTimer',showTimer)

    
        timer.children[0].classList.toggle('d-none');
    })

    function mostrar() {

        showScore = !showScore 
        localStorage.setItem('showScore',showScore)

        eyeButton.children[0].classList.toggle('d-none');
        eyeButton.children[1].classList.toggle('d-none');

        scoreDiv.classList.toggle("d-none");

    }


    function createSpans() {

        
        selectedPharagraph = words[Math.floor(Math.random(3) * 3)]

        console.log(selectedPharagraph)
    
        selectedPharagraph = selectedPharagraph.split(' ')
       
        selectedPharagraph.forEach(function(element){
    
            let span = document.createElement('span')
            span.textContent = element
            
    
            textDiv.appendChild(span)
        })
    
        textDiv.children[0].classList.add('active')
    }



    // function ponerColores (color,letra,aumentar) {

        //     text.style.backgroundColor = color;
        
        //     text.style.color = letra;
        
        //     // let pixeles = getComputedStyle(text.children[0]).fontSize;
        
        //     // pixeles = parseInt(pixeles.replace('px',''))
        
        //     // console.log(pixeles)
        
        //     let pixeles = getComputedStyle(text.children[0]).fontSize;
        
        //     pixeles = pixeles.split('px')
        
        //     pixeles = parseInt(pixeles[0])
        
        //     if(aumentar) {
        //       text.children[0].style.fontSize = pixeles + 1 + "px"
        //     } else {
        //       text.children[0].style.fontSize = pixeles - 1 + "px"
        //     }
// })

// const rojo = document.querySelector('#home')
// rojo.classList.add('clasesita')


// setTimeout(function() {
//   console.log("este timeout se ejecuta despues de 5 segundos")
//   rojo.classList.remove('nav_button')
// },5000)
//   const azul = document.querySelector('#azul')
//   const text = document.querySelector('.text_square')

//   rojo.addEventListener('click',function(){
//     ponerColores("#000","green",true)

//   })
 
//   azul.addEventListener('click',function(){

//     ponerColores("blue","red",false)

//   })

//   function ponerColores (color,letra,aumentar) {

//     text.style.backgroundColor = color;

//     text.style.color = letra;

//     // let pixeles = getComputedStyle(text.children[0]).fontSize;

//     // pixeles = parseInt(pixeles.replace('px',''))

//     // console.log(pixeles)

//     let pixeles = getComputedStyle(text.children[0]).fontSize;

//     pixeles = pixeles.split('px')

//     pixeles = parseInt(pixeles[0])

//     if(aumentar) {
//       text.children[0].style.fontSize = pixeles + 1 + "px"
//     } else {
//       text.children[0].style.fontSize = pixeles - 1 + "px"
//     }



})
