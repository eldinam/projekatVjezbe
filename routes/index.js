var express = require('express');
var router = express.Router();
var pokemons = require('../pokemon.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/dajBroj', function (req, res, next) {
    var sjever = 43.865506;
    var jug = 43.839387;
    var istok = 18.443676;
    var zapad = 18.348404;
    var poke = (Math.random() * 4 + 1) >>> 0;

    res.send({
            pokemons: pokemons[poke].name,
            //lat: 43.850282 + Math.random() * 0.03,
            //lon: 18.392092 + Math.random() * 0.03
            lat: Math.random() * (jug - sjever) + sjever,
            lon: Math.random() * (zapad - istok) + istok
        }
    )
});


module.exports = router;
