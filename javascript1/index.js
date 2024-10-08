const images=document.getElementById("myimage");

const button=document.getElementById('show-button');
     button.addEventListener("click",()=>{
        images.style.display="block"
        button.textContent="image is now visible"
     })