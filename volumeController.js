bgmSignal=0;
volumebgm=1;
volumeeff=1;

function bgmController(object){
    if(bgmSignal==0){
        bgmSignal=1;
        object.src="assets/bgmoff.png";
        bgm.volume=0;
        volumebgm=0;
        // bgm.stop();
    }else{
        bgmSignal=0;
        object.src="assets/bgmon.png";
        bgm.volume=1;
        volumebgm=1;
        // bgm.play('',0,1,true);
    }
}


seSignal=0;

function seController(object){
    if(seSignal==0){
        seSignal=1;
        object.src="assets/seoff.png";
        buttonHover.volume=0;
        buttonPress.volume=0;
        die.volume=0;
        levelaudio.volume=0;
        volumeeff=0;


    }else{
        seSignal=0;
        object.src="assets/seon.png";
        buttonHover.volume=1;
        buttonPress.volume=1;
        die.volume=1;
        levelaudio.volume=0.5;
        volumeff=1;
    }
}