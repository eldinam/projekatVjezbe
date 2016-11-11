var express = require('express');
var router = express.Router();
var pokemons = require('../pokemon.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/dajBroj', function (req, res, next) {
    var sjever = 50;
    var jug = 80;
    var istok = 20;
    var zapad = 40;
    var poke = (Math.random() * 4 + 1) >>> 0;

    res.send({
            pokemons: pokemons[poke].name,
            lat: 43.850282 + Math.random() * 0.03,
            lon: 18.392092 + Math.random() * 0.03
        }
    )
});



module.exports = router;
