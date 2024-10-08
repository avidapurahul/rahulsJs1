const imagepng=document.getElementById('image_png')

const hidebutton=document.getElementById("hide_button")

hidebutton.addEventListener("click",()=>{
    if(imagepng.style.display !=="none"){
        imagepng.style.display='none'
        hidebutton.textContent="show above element"
        hidebutton.classList.add('show above element')
    }else{
        imagepng.style.display="block"
        hidebutton.textContent="hide above element"
        hidebutton.classList.remove('show above element')
    }
})