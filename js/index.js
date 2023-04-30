

const animation = [
   { transform: "translateY(0) " },
    { transform: "translateY(-150%)" },
  ];

  const animationTiming = {
    duration: 2000,
    iterations: 1,
  };

const teljes = document.querySelector('*');
const click_btn=document.querySelector('.navigate-button');

click_btn.addEventListener('click',()=>{
   teljes.animate(animation, animationTiming);
});
