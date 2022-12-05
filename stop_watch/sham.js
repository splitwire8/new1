window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;
// define the veriable of all charectores
  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  // on click button the time handler(intervel)
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  // stop button function

  buttonReset.onclick = function() {
     clearInterval(Interval);
    //  reset
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    // manipulete html using properties
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

}