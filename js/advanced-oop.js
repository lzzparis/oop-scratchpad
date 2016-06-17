$(document).ready(function(){

//Musician is a function 
var Musician = function(sounds) {
    this.sounds = sounds;
};

//Musician is still just a function, but naturally has the prototype property that we can modify
Musician.prototype.solo = function(length) {
    var solo = "";
    for (var i=0; i<length; i++) {
        solo += this.sounds[i % this.sounds.length] + " ";
    }
    console.log(solo);
};

var Guitarist = function() {
    Musician.call(this, ['Twang', 'Thrumb', 'Bling']);
    this.strings = 6;
};

// Musician.prototype.constructor === Musician

Guitarist.prototype = Object.create(Musician.prototype);
// Guitarist.prototype = Object.create( Musician);
 // Guitarist = Object.create( Musician);
Guitarist.prototype.constructor = Guitarist;

Guitarist.prototype.tune = function() {
    console.log('Be with you in a moment');
    console.log('Twoning sproing splang');
};

var Bassist = function() {
    Musician.call(this, ['Boink', 'Bow', 'Boom']);
    this.strings = 4;
};
Bassist.prototype = Object.create(Musician.prototype);
Bassist.prototype.constructor = Bassist;

var nigel = new Guitarist();
nigel.tune();
nigel.solo(8);

var derek = new Bassist();
derek.solo(4);

});