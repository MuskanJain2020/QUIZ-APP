let dt = new Date (new Date().setTime(0))
let time = dt.getTime();
let seconds = Math.floor((time%(100*60))/1000)
let minutes = Math.floor((time%(100*60*60))/1000*60)
let mytime = setInterval(function(){
 if (seconds<59){
     seconds++
 }else{
     seconds = 0
     minutes++
 }

 console.log(seconds,minutes)

 let sec = seconds< 10?`0${seconds}`:`${seconds}`;
 let min = minutes< 10 ?`0${minutes}`:`${minutes}`;
 document.querySelector(".time").innerHTML =`${min}:${sec}`;
}, 1000 )

