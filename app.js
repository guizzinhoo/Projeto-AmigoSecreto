//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

listaAmigos = [];

function adicionarAmigo() {
    let sortear = document.querySelector('input').value;
    if (sortear !== '') {
        listaAmigos.push(sortear);
        document.querySelector('input').value = '';
        exibirLista();
    } else {
        alert('Por favor, insira um nome.');
    }
}

function sortearAmigo() {
    if (listaAmigos.length !== 0) {
        let sorteado = Math.floor(Math.random() * listaAmigos.length);  
        let exibirResultado = document.getElementById('resultado');
        exibirResultado.innerHTML = `Amigo sorteado: <strong>${listaAmigos[sorteado]}</strong>`;
    } else {
        alert('Por favor, insira um nome.');
    }
}

function exibirLista() {
    let exibirLista = document.getElementById('listaAmigos')
    exibirLista.innerHTML = ''
    for (let i in listaAmigos) {
        console.log(listaAmigos)
        exibirLista.innerHTML += `<li>${listaAmigos[i]}</li>`
    }
}
