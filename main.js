const boton = document.getElementById('boton')
const valor = document.getElementById('valor')
const temp = document.getElementsByClassName('temp')
const resutado = document.getElementsByClassName('resultado')
const mercurio = document.querySelector('.termometro__mercurio')
let mer
console.log(mercurio)


boton.addEventListener('click',(e)=>{
    if(isNaN(valor.value) || valor.value ==''){
        alert('no es numero')
    }else{
        celsius = (valor.value - 32) * 5/9
        fahrenheit = (valor.value * 9/5) + 32
        if(temp[0].checked){
            resutado[0].innerHTML = (`${celsius.toFixed(2)}`)
            relleno = celsius*100/100
        }else if(temp[1].checked){
            resutado[0].innerHTML = (`${fahrenheit.toFixed(2)}`)
            relleno = fahrenheit*100/100


        }else{
                alert('no se selecciono ninguna medida')
        }
        if(relleno>100){

            mercurio.style.height=`100%`
        } else if(relleno>0){
            mercurio.style.height=`${relleno}%`

        } else {
            mercurio.style.height=`0%`
        }
    }
})