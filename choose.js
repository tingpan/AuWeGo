var choose_state = {

    create: function() {        
        bgm = this.game.add.audio('menuBgm',1,true);
        bgm.play('',0,1,true);
        bgm.volume=volumebgm;

        charactorState=0;
        var background = this.game.add.sprite(0, 0, 'choosePanel');
        chooseBox = this.game.add.sprite(230,160,'chooseBox');
        cookChoose =  this.game.add.button(210,130,'chooseCook',this.cookOnClick,this,2,2,2);
        studentChoose = this.game.add.button(600,130,'chooseStudent',this.studentOnClick,this,1,0,0);
        normal=this.game.add.button(1060,400,'normal',this.startNormal,this,1,0,2);
        hard=this.game.add.button(1060,460,'hard',this.startHard,this,1,0,2);
        nightmare=this.game.add.button(1060,520,'nightmare',this.startNightmare,this,1,0,2);   
        backbutton=this.game.add.button(990,580,'backButton',this.actionBack,this,1,0,2);
        backbutton.events.onInputOver.add(function(){buttonHover.play();}, this);
    },

    update: function(){
        if (chooseBox.body.x<230) {
            chooseBox.body.x=230;
        };
        if (chooseBox.body.x>610) {
            chooseBox.body.x=610;
        };

    },

    startNightmare:function(){
        bgm.stop();
        buttonPress.play();
        this.game.state.start('playExtreme');
        
    },

    startHard:function(){
        bgm.stop();
        buttonPress.play();
        this.game.state.start('playHard');
        
    },

    startNormal:function(){
        bgm.stop();
        buttonPress.play();
        this.game.state.start('playNormal');
        
    },

    studentOnClick:function(){
        studentChoose.setFrames(2,2,2);
        cookChoose.setFrames(1,0,0);
        buttonPress.play();
        chooseBox.body.velocity.x=800;
        charactorState=1;
    },
    cookOnClick:function(){
        cookChoose.setFrames(2,2,2);
        studentChoose.setFrames(1,0,0);
        buttonPress.play();
        chooseBox.body.velocity.x=-800;
        charactorState=0;

    },
    actionBack:function(){
        bgm.stop();
        buttonPress.play();
        this.game.state.start('menu');
    }


};

var record_state = {

create: function() {    
    catchData();
    bgm = this.game.add.audio('menuBgm',1,true);
    bgm.play('',0,1,true);
    bgm.volume=volumebgm;
    charactorState=0;
    var background = this.game.add.sprite(0, 0, 'recordPanel');
    var positionY=252;
    var positionX=420;
    var offset=52;
    this.game.add.text(positionX, positionY, sourceList[0], { fontSize: '32px', fill: '#eda558' });
    this.game.add.text(positionX, positionY+offset, sourceList[1], { fontSize: '32px', fill: '#909767' });
    this.game.add.text(positionX, positionY+offset*2, sourceList[2], { fontSize: '32px', fill: '#5d5a58' });


    this.game.add.text(positionX,positionY+offset*3+23 , sourceList[6], { fontSize: '32px', fill: '#eda558' });
    this.game.add.text(positionX, positionY+offset*4+23, sourceList[7], { fontSize: '32px', fill: '#909767' });
    this.game.add.text(positionX, positionY+offset*5+23, sourceList[8], { fontSize: '32px', fill: '#5d5a58' });
    
    this.game.add.text(positionX-50, positionY+offset*6+22, sourceList[9], { fontSize: '32px', fill: '#333333' });
    this.game.add.text(positionX-50, positionY+offset*7+22, sourceList[10], { fontSize: '32px', fill: '#333333' });
    startbutton = this.game.add.button(990, 500, 'startButton',this.actionOnClick, this, 1, 0, 2);
    backbutton=this.game.add.button(990,580,'backButton',this.actionBack,this,1,0,2);
    startbutton.events.onInputOver.add(function(){buttonHover.play();}, this);
    backbutton.events.onInputOver.add(function(){buttonHover.play();}, this);
    },

    update: function(){

    },

    actionOnClick:function(){
        bgm.stop();
        buttonPress.play();
        this.game.state.start('choose');
        
    },


    studentOnClick:function(){
        studentChoose.setFrames(2,2,2);
        cookChoose.setFrames(1,0,0);
        buttonPress.play();
        chooseBox.body.velocity.x=800;
        charactorState=1;
    },
    cookOnClick:function(){
        cookChoose.setFrames(2,2,2);
        studentChoose.setFrames(1,0,0);
        buttonPress.play();
        chooseBox.body.velocity.x=-800;
        charactorState=0;

    },
    actionBack:function(){
        bgm.stop();
        buttonPress.play();
        this.game.state.start('menu');
    }


};