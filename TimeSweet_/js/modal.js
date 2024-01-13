const abrir=document.getElementById("abrir");
const contenedorModal=document.getElementById('contenedor_modal');
const cerrar=document.getElementById('cerrar');

abrir.addEventListener("click", ()=>{
  contenedorModal.classList.add('mostrar')  
})

cerrar.addEventListener("click", ()=>{
    contenedorModal.classList.remove('mostrar')  
  })

const abrir2=document.getElementById("abrir2");
const contenedorModal2=document.getElementById('contenedor_modal2');
const cerrar2=document.getElementById('cerrar2');

abrir2.addEventListener("click", ()=>{
  contenedorModal2.classList.add('mostrar')  
})

cerrar2.addEventListener("click", ()=>{
  contenedorModal2.classList.remove('mostrar')  
  })