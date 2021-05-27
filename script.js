const swiper = new Swiper('.swiper-container', {
  
  direction: 'horizontal',
  loop: true,
  speed: 800,

  autoplay:{
    delay: 3000
  },

  effect:'fade' ,


  pagination: {
    el: '.swiper-pagination',
    clickable : true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// マウスストーカー
let mouseStalker = document.querySelector('.mouse-stalker')

let stalker={
  x: 0,
  y: 0
}
let mouse={
  x: 0,
  y: 0
}

document.addEventListener('DOMContentLoaded', setup)

document.addEventListener('mousemove', mousemove)

function setup(){
  // mouseStalker = document.querySelector('.mouse-stalker')
  mouseStalker
  update()
}
function mousemove(e){
  mouse.x = e.clientX
  mouse.y = e.clientY
}
function update(){
  stalker.x += (mouse.x - stalker.x) * 0.8
  stalker.y += (mouse.y - stalker.y) * 0.8


  let x = Math.round(stalker.x *10)/10
  let y = Math.round(stalker.y *10)/10
  
  mouseStalker.style.transform = 'translate3d(' + x + 'px,' +y + 'px, 0)'

  requestAnimationFrame(update)
}


// 文字アニ
const text = document.querySelectorAll(".slider-text");
for(let i= 0; i<text.length; i++){
  const targetText = text[i],
  texts = targetText.textContent,
  textsArray = [];

  targetText.textContent =  " ";  

  for(let j =0; j< texts.split("").length; j++){
    if(texts.split("")[j]===" "){
      textsArray.push(" ");
    }else{
    textsArray.push('<span style="animation-delay:'+(j*0.1)+'s;">'+texts.split("")[j]+'</span>')
    }
  }
 for(let k=0; k<textsArray.length; k++){
  targetText.innerHTML += textsArray[k]
 }
}

const target = document.querySelectorAll(".content");

document.addEventListener("scroll", function(){

  for(let i=0; i< target.length; i++){
      const getElementDistance = target[i].getBoundingClientRect().top+ target[i].clientHeight*0.4
     
      if(window.innerHeight>getElementDistance){
        target[i].classList.add("show");
      }
  }
});


