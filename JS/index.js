window.addEventListener('DOMContentLoaded',function(){

    const eye = document.querySelector('.fa-eye')
    const eyeSlash = document.querySelector('.fa-eye-slash')
    const timer = document.querySelector('.timer_Buttton p')

    console.log(eye);
    console.log(eyeSlash);
    console.log(timer);

    eye.addEventListener('click',function(){ 
        if (eye.style.display == flex) {
            esconder("hidden")
        } else {
            esconder("none")
        }
    eyeSlash.addEventListener('click',function(){
        eyeSlash.style.display = flex;
    })
    timer.addEventListener('click',function(){
        timer.style.display = none;
    })

    function esconder(estado){
        eye.style.display = estado;
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
})

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
