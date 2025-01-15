let count = 60;
let started = false;

function start() {
  if (started) {return};
    let start_time = new Date(); 
    let stop_time = start_time.setMinutes(start_time.getMinutes() + count); 
    let countdown = setInterval(function() {
    let now = new Date().getTime();
    let remain = stop_time - now; 
    let min = Math.floor( (remain % (1000 * 60 * 60)) / (1000 * 60) );
    let sec = Math.floor( (remain % (1000 * 60)) / 1000 );
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    if (remain < 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Всё!";
     }
  }, 1000);
  started = true;
}
start()