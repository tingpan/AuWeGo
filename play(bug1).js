var play_state = {

    // No more preload, since it is already done in the 'load' state

    create: function() {        
      alive=true;

      distance=0;
      coinNum=0;
      score=0;
      level=1;
      frame=0;
      counter=0;
      dframe=0;

        duckStatus=true;
        die=this.game.add.audio('die',1,false);
        bgm = this.game.add.audio('gamebgm',1,true);
        bgm.play('',0,1,true);
        bgm.volume=volumebgm;
       this.skys = game.add.group();

           this.skys.createMultiple(20,'sky');

           //名字没改,pipes其实是陆地
           this.buildings = game.add.group();
           this.buildings.createMultiple(20,'building');

    	   this.pipes = game.add.group();  
    	   this.pipes.createMultiple(20, 'ground');
           this.add_first_sky();
           this.add_first_pipe();
           this.add_first_building();  
           this.juxing=this.game.add.sprite(54,500,'juxing');
           this.juxing.scale.setTo(0.7,0.7);
           this.juxing.body.gravity.y=2500;
           this.juxing.alpha=0.0;

           //循环函数
           this.timer1 = this.game.time.events.loop(30725, this.add_one_sky, this);  
           this.timer2 = this.game.time.events.loop(7300, this.add_one_pipe, this); 
           this.timer3 = this.game.time.events.loop(5000,this.setCoins,this);
           this.timer5 = this.game.time.events.loop(35000,this.add_one_building,this);

           //反复出现的都加组
           coins = game.add.group();
           ducks = game.add.group();
           ducks.forEach(function(item){
            item.kill();
          });
        if (charactorState==0) {
           this.player=this.game.add.sprite(30,435,'cook');
        }
        else{
           this.player=this.game.add.sprite(30,435,'student');
       };
       //重力
    	   this.player.body.gravity.y=2500;
        //键盘监听
    	   var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	   space_key.onDown.add(this.jump, this);
        //定义动画
    	   this.player.animations.add('right',[0,1,2,3,4,5,6,7,8,9],15,true);
    	   this.player.animations.add('jump',[4],15,true);

           this.levelText=this.game.add.text(1150, 16, 'Level: ' + level, { fontSize: '32px', fill: 'red' });
           this.scoreText=this.game.add.text(16, 16, 'Score: ' + score, { fontSize: '32px', fill: '#FFFFFF' });
		   this.distanceText=this.game.add.text(16, 46, 'Distance: ' + distance + 'm', { fontSize: '32px', fill: '#FFFFFF' });
		   this.coinText=this.game.add.text(16, 76, 'Coin number: ' + coinNum, { fontSize: '32px', fill: '#FFFFFF' });
               	},

    update: function() {
    	this.stopfalling();
        //通过Y坐标判断播放跳跃动画还是跑步动画。
        if(this.player.body.y<360){
          this.player.animations.play('jump');
      }
      else{
          this.player.animations.play('right');
      }
        //鸭子，我的意见是RANDOM SEED可以设置成一个关于关卡的函数。然后通过调整鸭子的速度和数量调整关卡。
        //关卡还没有加，应该是根据分数有一个自动加关卡的系统。
        var counter=0;
          if(Math.random()*1000<10&&duckStatus&&alive){

           for(var indent=0;counter<level;indent+=Math.floor(Math.random()*4+2)*100)
           {
              var duck = ducks.create(1280,500,'duck');
              duck.animations.add('fly',[0,1,2,3],7,true);
              duck.animations.play('fly');
              duck.scale.setTo(0.6,0.6);
              duck.body.velocity.x=-500;
              duckStatus=false;
             var duck = ducks.create(1280,250,'duck');
             duck.animations.add('fly',[0,1,2,3],7,true);
             duck.animations.play('fly');
             duck.scale.setTo(0.6,0.6);
             duck.body.velocity.x=-500;
             duckStatus=false;
        counter++;
        dframe=frame;
      }
    }
        game.physics.overlap(this.juxing, coins,this.getCoins, null ,this);
        game.physics.overlap(this.juxing, ducks,this.hitDucks, null ,this);
		frame++;
		if(frame%24==23 && alive){
			distance++;}
		if(frame%720==719 && alive){
			score+=50;
        }
      if ((frame-dframe)%(10000+level*48)==0) {
        this.setDuckStates();
      };

        if (alive) {
          this.distanceText.destroy();
          this.distanceText=this.game.add.text(16, 46, 'Distance: ' + distance + 'm', { fontSize: '32px', fill: '#FFFFFF' });
          this.scoreText.destroy();
          this.scoreText=this.game.add.text(16, 16, 'Score: ' + score, { fontSize: '32px', fill: '#FFFFFF' });
          if(frame%1200==1199){
           level++;}
           this.levelText.destroy();
           this.levelText=this.game.add.text(1150, 16, 'Level: ' + level, { fontSize: '32px', fill: '#FFFFFF' });	
       };

    },

    actionBack:function(){
        buttonPress.play();
        bgm.stop();
        this.game.state.start('menu');
    },
    actionOnClick:function(){
        bgm.stop();
        buttonPress.play();
        this.game.state.start('choose');
        //bgm.stop();
    },

    add_first_pipe: function() {  
    var pipe = this.pipes.getFirstDead();
    pipe.reset(-185, 0);
    var pipe2 = this.pipes.getFirstDead();
    pipe2.reset(1280,0);
    pipe.body.velocity.x = -200; 
    pipe2.body.velocity.x = -200;
    pipe.outOfBoundsKill = true;
    pipe2.outOfBoundsKill = true; 
},


    add_first_sky: function() {  
    var pipe = this.skys.getFirstDead();
    pipe.reset(-1178, 0);
    var pipe2 = this.skys.getFirstDead();
    pipe2.reset(1280,0);
    pipe.body.velocity.x = -80; 
    pipe2.body.velocity.x = -80;
    pipe.outOfBoundsKill = true;
    pipe.outOfBoundsKill = true;
},

    add_one_pipe: function() {  
    var pipe3 = this.pipes.getFirstDead();
    pipe3.reset(1280, 0);
    pipe3.body.velocity.x = -200; 
    pipe3.outOfBoundsKill = true;
},

    add_one_sky: function() {  
    var pipe4 = this.skys.getFirstDead();
    pipe4.reset(1280, 0);
    pipe4.body.velocity.x = -80; 
    pipe4.outOfBoundsKill = true;
},

    add_one_building: function() {  
    var pipe5 = this.buildings.getFirstDead();
    pipe5.reset(1280, 0);
    pipe5.body.velocity.x = -130; 
    pipe5.outOfBoundsKill = true;
},

    add_first_building: function() {  
    var pipe6 = this.buildings.getFirstDead();
    pipe6.reset(1280,0);
    pipe6.body.velocity.x = -130;
    pipe6.outOfBoundsKill = true; 
},

	jump: function(){
        if(alive){
          if(this.ifjump<2){
            this.juxing.body.velocity.y=-1250;
             this.player.body.velocity.y=-1250;
             this.ifjump++;
             buttonPress.play();
         }
     }
	},

	stopfalling:function(){
        if(alive){
			if(this.player.body.y>435){
				this.player.body.y=435;
				this.ifjump=0;
			};
            if(this.juxing.body.y>500){
                this.juxing.body.y=500;
                this.ifjump=0;
            };
        }
	},

    getCoins:function(player,coin){
      if(alive){
        coin.kill();
        coinNum++;
        score++;
        this.coinText.destroy();
        this.coinText=this.game.add.text(16, 76, 'Coin number: ' + coinNum, { fontSize: '32px', fill: '#FFFFFF' });
      }
    },

    setCoins:function(){
        var randomRows=1+Math.random()*3;
        var randomCells=4+Math.random()*15;
        var randomX=1280
        var randomY=400-Math.random()*300;
        for(var j = 0;j<randomRows;j++){
            for(var i =0;i<randomCells;i++){
                var coin=coins.create(randomX+i*40,randomY+j*40,'coin');
                coin.body.velocity.x=-200;
            }
        }
    },
    setDuckStates:function(){
        duckStatus=true;
    },
    hitDucks:function(){
        if (alive) {
            this.game.time.events.remove(this.timer1);
            this.game.time.events.remove(this.timer2);
            this.game.time.events.remove(this.timer3);
            this.game.time.events.remove(this.timer5);
            this.pipes.forEach(function(item) {
                item.body.velocity.x=0;
            });
            this.buildings.forEach(function(item){
                item.body.velocity.x=0;
            })
            this.skys.forEach(function(item) {
                item.body.velocity.x=0;
            });
            coins.forEach(function(item) {
                item.body.velocity.x=0;
            });
            ducks.forEach(function(item){
                item.body.velocity.x=0;
            });

            die.play();
            gameoverbg=this.game.add.sprite(0,0,'gameoverbg');
            gameoverbg.alpha=0.8;
            gameover=this.game.add.sprite(0,0,'gameover');

            startbutton2 = this.game.add.button(260, 360, 'restartButton',this.actionOnClick, this, 1, 0, 2);
            backbutton2=this.game.add.button(1060,570,'backButton',this.actionBack,this,1,0,2);
            backbutton2.scale.setTo(0.7,0.7);
            backbutton2.events.onInputOver.add(function(){buttonHover.play();}, this);
            startbutton2.events.onInputOver.add(function(){buttonHover.play();}, this);
            this.game.add.text(750, 270, 'Score: ' + score, { fontSize: '32px', fill: '#FFFFFF' }); 
            this.game.add.text(750, 320, 'Coins: ' + coinNum, { fontSize: '32px', fill: '#FFFFFF' }); 
            this.game.add.text(750, 370, 'Distance: ' + distance, { fontSize: '32px', fill: '#FFFFFF' }); 
            this.game.add.text(750, 420, 'Level: ' + level, { fontSize: '32px', fill: '#FFFFFF' }); 
            saveData(distance,coinNum,score,level)
        };



        alive=false;
    }
};
