const form = document.querySelector(".formulario-orçamento")
const mascara = document.querySelector(".mascara-formulario")

function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    console.log(form)
}

function esconderform(){
     form.style.left = "-160px"
     form.style.transform ="translateX(-50%)"
     mascara.style.visibility = "hidden"

    console.log(form)
}





