load_state = {  
    preload: function() { 
        game.load.audio('buttonHover','assets/ButtonHover.wav');
        game.load.audio('buttonPress','assets/ButtonPress.wav');
        game.load.audio('menuEffe', 'assets/menuEffe.wav');
        game.load.audio('menuBgm', 'assets/menubgm.wav');
        game.load.audio('gamebgm', 'assets/gamebgm.wav');
        game.load.audio('die','assets/die.wav');
        game.load.audio('levelUp','assets/levelup.wav');
        game.load.audio('gamebgmEX','assets/gameExtreme.wav');
        game.load.image('sky', 'assets/sky.jpg');
        game.load.image('skyNight','assets/skyextreme.jpg')
        game.load.image('ground', 'assets/ground.png');
        game.load.image('coin', 'assets/coin.png');
        game.load.image('juxing','assets/juxing.png');
        game.load.image('building','assets/building.png')
        game.load.spritesheet('duck','assets/duck.png',174,156);
        game.load.spritesheet('duckNight','assets/duckextreme.png',174,156);
        game.load.image('chooseBox','assets/choosebox.png');
        game.load.spritesheet('cook', 'assets/cook.png', 105, 180);   
        game.load.spritesheet('student','assets/student.png',105,180);
        game.load.image('menubg','assets/menubg.jpg');
        game.load.image('logoCook','assets/logo-people.png');
        game.load.image('logoDuck','assets/logo-duck.png');
        game.load.image('logo','assets/Logo.png');
        game.load.image('gameoverbg','assets/gameoverbg.png');
        game.load.image('gameover','assets/gameover.png');
        game.load.image('choosePanel','assets/choose-pane.jpg');
        game.load.image('recordPanel','assets/record-pane.jpg');
        game.load.spritesheet('normal','assets/normal.png',200,54);
        game.load.spritesheet('hard','assets/hard.png',200,54);
        game.load.spritesheet('nightmare','assets/nightmare.png',200,54);
        game.load.spritesheet('restartButton','assets/restartButton.png',275,74);
        game.load.spritesheet('backButton','assets/back-to-menu.png',275,74);
        game.load.spritesheet('viewRecord','assets/view-record.png',275,74);
        game.load.spritesheet('startButton','assets/StartButton.png',275,74);
        game.load.spritesheet('chooseStudent','assets/choose-student.png',349,503);
        game.load.spritesheet('chooseCook','assets/choose-cook.png',349,503);

    },

    create: function() {
        this.game.state.start('menu');
    }
};
