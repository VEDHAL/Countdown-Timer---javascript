const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")




function updatetime(){
const currentYear= new Date().getFullYear();

const newyear= new Date(`January 1 ${currentYear+1} 00:00:00`)
// console.log(newyear)

const currentDate= new Date();


const diff= newyear-currentDate;
const d= Math.floor(diff/1000/60/60/24);

const h=Math.floor((diff/1000/60/60)%24);


const m=Math.floor((diff/1000/60)%60);
// console.log(m)

const s=Math.floor((diff/1000)%60);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;

// console.log(d+" "+ h +" "+m+" "+s);

}
/*1000ms=1ss
60s=1m
60m=1hr
24hrs=1daay*/
setInterval(updatetime,1000);
