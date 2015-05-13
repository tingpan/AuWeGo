bgmSignal=0;
volumebgm=1;
var menu_state = {

    create: function() {        
        //music是谷歌娘的AIYOWEGO
        die=this.game.add.audio('die',1,false);
        levelaudio=this.game.add.audio('levelUp',1,false);
        levelaudio.volume=0.5;
        buttonHover = this.game.add.audio('buttonHover',1,true);
        buttonPress = this.game.add.audio('buttonPress',1,true);
        music = this.game.add.audio('menuEffe',1,true);
        //背景音乐（不加var的是全局变量，在其他JS可以直接调用）
        bgm = this.game.add.audio('menuBgm',1,true);
        bgm.play('',0,1,true);
        bgm.volume=volumebgm;
        levelaudio.volume=volumeeff;
        die.volume=volumeeff;
        buttonPress.volume=volumeeff;
        buttonHover.volume=volumeeff;
        //按钮音效
        var background = this.game.add.sprite(0, 0, 'menubg');
        //加载图形
        logoDuck = this.game.add.sprite(0,-400,'logoDuck');
        logo = this.game.add.sprite(-1000,0,'logo');
        logoCook = this.game.add.sprite(0,-1290,'logoCook');
        //加载按钮
        startbutton = this.game.add.button(990, 500, 'startButton',this.actionOnClick, this, 1, 0, 2);
        recordbutton=this.game.add.button(990,580,'viewRecord',this.actionOnView,this,1,0,2);
        buttonStatus=0;
        //设置速度
        logoDuck.body.velocity.y=855;
        logo.body.velocity.x=3500;
        startbutton.events.onInputOver.add(function(){buttonHover.play();}, this);
        recordbutton.events.onInputOver.add(function(){buttonHover.play();}, this);
    },

    update: function(){
        //设置一些动画（发现太累了，以后还是不要加动画比较好！）
 
        if (logo.body.x>0) {
            logo.body.velocity.x=0;
        };
        if (logoDuck.body.velocity.y>0) {
            logoDuck.body.velocity.y-=15;
        };
        if (logoDuck.body.y>0) {
            logoDuck.body.y=0;
        };
        if (logo.body.velocity.x>0) {
            logo.body.velocity.x-=10;
        };
        if (logoCook.body.y<0) {
            logoCook.body.y-=(logoCook.body.y/15);
        };
        if (logo.body.velocity.x<400&&buttonStatus==0) {
            music.play();
        };
    },
    
    //跳转frame
    actionOnClick:function(){
        bgm.stop();
        buttonPress.play();
        this.game.state.start('choose');
    },

    actionOnView:function(){
        bgm.stop();
        buttonPress.play();
        this.game.state.start('record');
    },

};