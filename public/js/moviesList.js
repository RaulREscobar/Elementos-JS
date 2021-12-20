function qs (element) {
    return document.querySelector(element)
}

let $body = qs('body')
let $h1 = qs(".moviesListTitulo")

let modoOscuro = confirm('¿Desea modo oscuro?')

if(modoOscuro) {
    $body.style.backgroundColor = '#7f7f7f'
    $body.classList.add('fondoMoviesList')
}

$h1.innerText += "LISTADO DE PELÍCULAS"
$h1.style.color = 'white'
$h1.style.backgroundColor = "teal"
$h1.style.padding = "20px"

/* if(modoOscuro){
    $body.style.backgroundColor = '#7f7f7f' guarda con las commillas dobles aca
    $body.classList.add('fondoMoviesList')
} */

