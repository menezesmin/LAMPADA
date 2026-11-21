var lamp = document.getElementById("lamp");
var button = document.getElementById("button");
var luz = false

lamp.addEventListener("click", lig_des);
button.addEventListener("click", lig_des);

function lig_des(){

    if(!luz){
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)";
        lamp.src = "assets/lamp_on.png";
        lamp.alt = "Lâmpada acesa"
        button.src = "assets/Interruptor_on.png"
        button.alt = "Interruptor ligado"
        luz = true
    }else{
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)";
        lamp.src = "assets/lamp_off.png";
        lamp.alt = "Lâmpada apaga"
        button.src = "assets/Interruptor_off.png"
        button.alt = "Interruptor desligado"
        luz = false
    }
}