


// function mostrarMouse(event){
//     console.log(`Eixo x é igual a ${event.pageX} e Eixo y é igual a ${event.pageY}`);
//     if( event.pageY == 5) {
//         console.log("NAO SAIA")
//     }
// }

// window.onmousemove= mostrarMouse;      



// localStorage.setItem('email', 'larileonso51@gmail.com');
// texto.innerHTML = 'seja bem vindo lary' (localStorage.nome)



let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto = document.querySelector("p");
let naoEVoce = document.querySelector("a");

function acessar(){
    localStorage.setItem('nome', caixaTexto.value);
    texto.innerHTML = `Seja bem vindo! ${localStorage.nome}`;
    naoEVoce.innerHTML = `nao e voce? ${localStorage.nome}`;
}

function limpar(){
    localStorage.removeItem('nome');
}

botao.onclick = acessar;
naoEVoce.onclick = limpar;

