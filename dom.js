var breakLength = "5";
var sessionLength = "25";
var timeoutID;
var minutes=sessionLength++;
var seconds;
var stopped=false;
function stopFunc(){
  stopped=true;

}
function decBr(){
  if(breakLength >= 2){
    --breakLength;
    document.getElementById("displayBreak").innerHTML=breakLength;
  }
}

function incBr(){
  ++breakLength;
  document.getElementById("displayBreak").innerHTML = breakLength;
}

function decSess(){
  if(sessionLength >= 10){
    --sessionLength;
    document.getElementById("displaySession").innerHTML = sessionLength;
    document.getElementById("minutes").innerHTML = sessionLength + " : ";
    minutes=sessionLength;
  }
}

function breakFunc(){
  document.getElementById("minutes").innerHTML = breakLength;
  minutes=breakLength;
  secManager();
}

function incSess(){
  ++sessionLength;
  document.getElementById("displaySession").innerHTML = sessionLength;
  document.getElementById("minutes").innerHTML = sessionLength + " : ";
  minutes=sessionLength+1;
}

var breakLength=document.getElementById("displayBreak").innerHTML;

var minutesOutput = document.getElementById("minutes");
var secondsOutput = document.getElementById("seconds");

function startTimer(){
  var timeoutID = setInterval(secManager,1000);
  minutesOutput.innerHTML= minutes + " : ";
  e.preventDefault();
}

function secManager(){
  if(stopped === true){
    location.reload();
    clearInterval(timeoutID);
   
  }
  else{
  if(minutes >= 0){
    if(seconds > 0){
      secondsOutput.innerHTML = --seconds;
    }
   else if(minutes === 0){
    
     breakFunc();
   }
    else{
      seconds=60;
      minutesOutput.innerHTML = --minutes+ " : ";
    }
  }
  }
}




