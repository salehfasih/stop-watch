var sec=0;
var min=0;
var msec=0;
 var interval;
  var minhead=document.getElementById("min");
  var secHead=document.getElementById("sec");
  var msechead=document.getElementById("msec");

  function timer(){
      msec++;
      msechead.innerHTML=msec;
      if(msec>=100){
          sec++;
          secHead.innerHTML=sec;
          msec=0;
      }
      else if(sec>=60){
          min++;
          sec=0;
          minhead.innerHTML=min;
      }

  }
  var e=document.getElementById("start");
  var d=document.getElementById("stop");

  function start(){

  interval=setInterval(timer,10);
  e.disabled=true;

  }

  function reset(){
      min=0;
      sec=0;
      msec=0;
      minhead.innerHTML=0;
      msechead.innerHTML=0;
      secHead.innerHTML=0;
      clearInterval(interval);
      e.disabled=false;
  }
  function stop(){
      clearInterval(interval);
      e.disabled=false;
  }
  

    