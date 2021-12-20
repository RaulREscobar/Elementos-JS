function qs (element) {
    return document.querySelector(element)
}

let $title = qs('.moviesAddTitulo')
let $form = qs('#formulario') 
let $article = qs('article')

$title.classList.add('titulo')
$title.innerText = ('AGREGAR PELÍCULAS')
$article.classList.add("fondoTransparente")
$form.classList.add('fondoCRUD')