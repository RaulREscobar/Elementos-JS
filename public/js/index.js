function qs (element) {
    return document.querySelector(element)
}

 
let $main = qs('.container')
let $a = qs('a')
let $p = document.querySelectorAll('p')
let $h2 = qs('.subtitulo')
let $body = qs('body')

let userName = prompt("Ingrese su nombre");
userName.trim() !== "" ?( $h2.innerText += `${userName}` ) : ( $h2.innerText += "Invita@" )
//prompt('Ingrese su nombre') ?? 'invitado' esto remplaseria lo que hay arriba


$h2.style.textTransform = 'uppercase'
$a.style.color = '#E51B3E'

let background = confirm("¿Desea colocar un fondo de pantalla?")

//confirm("¿Desea colocar un fondo de pantalla?") ? $body.classList.add("fondo") : "" otra forma de hacer lo de abajo
background && $body.classList.add("fondo")

/* for (let i = 0; i < $p.length; i++) {
    if (i % 2 == 0) {
         $p[i].classList.add("destacadoPar") 
    }else{ 
         $p[i].classList.add("destacadoImpar") 
    }
    
}  otra forma de hacer un for */


$p.forEach(( p, i ) => {
    if( ( i + 1 ) % 2 == 0 ) {
        $p[i].classList.add("destacadoPar") 
    } else {
        $p[i].classList.add("destacadoImpar")
    }
})

$main.style.display = "block"
