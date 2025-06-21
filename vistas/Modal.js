const btnOpenModal=document.getElementById('open-modal')
const btnCerrarModal=document.getElementById('cerrar-modal')
const modal=document.getElementById('modal')
const btnOpenCrear = document.getElementById('crear')
const modal2 = document.getElementById('modal2')
const btnCerrar=document.getElementById('cerrar')

btnOpenModal.addEventListener("click", ()=>{
  modal.show()
})

btnCerrarModal.addEventListener("click", ()=>
{
  modal.close()
})
btnOpenCrear.addEventListener('click', ()=>{
  modal2.show()
  modal.close()
})
window.onload = btnOpenModal