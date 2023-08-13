let div= document.querySelector('div');
let btn=document.querySelector('button');

div.addEventListener('click',()=>{
    alert('Hola! Soy el div');}
)
  ;
  btn.addEventListener('click', (x)=>{
    alert('Hola!');
    x.stopPropagation();
  })

