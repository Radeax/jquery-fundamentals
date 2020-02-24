function getPokemon(id) {
    $.get('https://pokeapi.co/api/v2/pokemon/' + id, function (res) {
        // Get Stats
        let stats = {
            name: res.forms[0].name,
            height: (res.height / 3.048).toFixed(1) + ' ft',
            weight: (res.weight / 4.56).toFixed(1) + ' lbs'
        };

        $('h4').text(stats.name); // Pokemon Name
        $('#pokedex img').attr('src', 'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + id + '.png');
        $('#types').empty();
        res.types.forEach(obj => {
            $('#types').append('<li class="list-group-item text-capitalize">' + obj.type.name + '</li>');
        });
        $('#height').text(stats.height); // Pokemon Height
        $('#weight').text(stats.weight); // Pokemon Weight
    }, 'json');
}

function allPokemon() {
    for (let i = 1; i <= 151; i++) {
        $('#pokelist').append('<img id="' + i + '" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png">');
    }
}

$(document).ready(function () {
    allPokemon();

    let randomPokemon = Math.floor(Math.random() * 151 + 1);
    getPokemon(randomPokemon); // random Pokemon for inital load

    $('img').click(function () {
        const id = $(this).attr('id');
        getPokemon(id);
    });
});