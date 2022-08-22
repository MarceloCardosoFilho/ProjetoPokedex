var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    e.preventDefault();

    let urlForm = "https://pokeapi.co/api/v2/pokemon/";
    let nome = document.getElementById("name");

    urlForm = urlForm + this.name.value;
    urlForm = urlForm.toLocaleLowerCase();

    let resposta = document.getElementById('content');

    let imagem = document.getElementById('imagemPokemon');

    let html = '';


    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data) {
            var altura = data.height

            console.log(data)
            html = '<b>Nome</b>: ' + maiuscula(data.name) + '<br>';
            html = html + '<b>Type</b>: ' +maiuscula(data.types[0].type.name) + '<br>';
            const  abilities = data.abilities.map((i) => i.ability.name);
                console.log(abilities)
                html = html + '<b>Abilites</b>: ' + abilities.join(', ') + '<br>';
            html = html + '<b>Height</b>: ' +(altura) + ' decimeters <br>';
            html = html + '<b>Weight</b>: ' +(data.weight) + ' hectogram <br>';
            resposta.innerHTML = html;
            
            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'> <img src='" + data.sprites.back_default + "'>"

            
        })
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}