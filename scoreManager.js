function saveData(distance,coin,score,level){
	var ajax;
	if (window.XMLHttpRequest){
  		ajax=new XMLHttpRequest();
  	}
	else{
 	 	ajax=new ActiveXObject("Microsoft.XMLHTTP");
  	}

  	var url="record.php";
  	var information="distance=" + distance + "&coin=" + coin + "&score=" + score + "&level=" + level;


  	ajax.open("GET","record.php?"+information,true);
	  ajax.send();


	// // The POST Method (But it does no work)
  	// ajax.open("POST", linkurl, true);
  	// ajax.setRequestHeader("content-length",information.length);
  	// ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");
  	// ajax.send(information);


  	ajax.onreadystatechange = function(){
  		if (ajax.readyState==4 && ajax.status==200){
	    	// alert("Congratulation! Your score has been recorded");
	    }
  	};  
}


function catchData(){
  var result="";
  $.ajax({
    type:"GET",
    url:"backLoad.php",
    data:"",
    async:false, 
    success:function(msg){
      result=msg;
    }
  });


  sourceList=result.split(",");
}

