let main_el = document.querySelector('.carousel');
let arrow_left_el = document.querySelector(".arrow-left");
let arrow_right_el = document.querySelector(".arrow-right");
let about_el = document.querySelector(".about");


console.log(main_el);
console.log(arrow_left_el);
console.log(arrow_right_el);

/*
const navigation_el=document.querySelector('.navigation-container');
console.log(navigation_el);
 navigation_el.addEventListener('click',()=>{ */
/*     const animation_el=document.querySelector('.navigation-container');
    const animation = [
        { transform: "translateY(0) " },
         { transform: "translateY(-150%)" },
       ];
     
       const animationTiming = {
         duration: 2000,
         iterations: 1,
       };
       const scrollOffset =
           {
               target: main_el, edge:'end',threshold:'1'
           };
       
       main_el.animate(animation, animationTiming,scrollOffset); 
})*/


///////CAROUSEL CONTENT //////
let arrLeft = arrow_left_el.addEventListener('click', () => {
    main_el.scrollLeft += 1900;
    console.log('scrolledLeft');
    // más megoldás kell pixel nélkül idval inkább
}
);
let arrRight = arrow_right_el.addEventListener('click', () => {
    main_el.scrollLeft -= 1900;
    console.log('scrolledRight');
   // arrow_right_el.style.display='none'; később ha már kész az app
});

////////REDIRECT PAGE //////////

/* window.location.href='https://david.vasadi.github.io';
window.location.href='./app.html'; online elereshez kell a href*/

let todo_el = document.querySelector(".todo-card");
todo_el.addEventListener('click', () => {
    window.location = './todo.html';
})


about_el.addEventListener('click', () => {
    window.location = './about.html';
})

cinema_el = document.querySelector(".cinema-card");
cinema_el.addEventListener('click',()=>{
    
    window.location = './cinema.html';
})
////////PROBA///////

/*const number_of_card=document.querySelectorAll('.card-slider').length;
let slideOfFset = 0;
console.log(number_of_card);

arrow_left_el.addEventListener('click',()=>{

      main_el.style.transition='transform  0.4s ease-in-out';

})


 const moveSlides = offset =>{
    const cardWidth =
    main_el.querySelector('.card').offsetWidth;
    main_el.style.transform= 'translateX(-${
    offset * cardWidth}
    px)';

} */




////////PROBA///////