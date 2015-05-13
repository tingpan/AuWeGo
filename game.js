// Initialize Phaser
var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game_div');

// Our 'score' global variable
var frame=0;
var score = 0;
var coinNum = 0;
var level=1;
var distance=0;
var firstGame=1;



game.state.add('load', load_state);  
game.state.add('menu', menu_state);  
game.state.add('playNormal', playNormal_state); 
game.state.add('playHard',playHard_state); 
game.state.add('playExtreme',playExtreme_state);
game.state.add('choose',choose_state);
game.state.add('record',record_state);
game.state.start('load');  
