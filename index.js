setInterval(()=>{
    //First create object of Date()
    let now=new Date();
    let hr=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
   // console.log(min);

   let hr_rotation=((hr / 12) * 360) + ((min/60)*30);
   let sec_rotation= 6*sec;
   let min_rotation=6*min;
   hour.style.transform = `rotate(${-hr_rotation}deg)`;
   minute.style.transform = `rotate(${-min_rotation}deg)`;
   second.style.transform = `rotate(${-sec_rotation}deg)`;

   let hours=document.getElementById("hr");
   let minutes=document.getElementById("min");
   let seconds=document.getElementById("sec");
   let ampm=document.getElementById("ampm");

   let h=now.getHours();
   let m=now.getMinutes();
   let s=now.getSeconds();

   let am=h>=12?"PM":"AM";
   if(h>12){
    h=h-12;
   }


   h=(h<10)?"0"+h:h;
   m=(m<10)?"0"+m:m;
   s=(s<10)?"0"+s:s;

   hours.innerHTML=h;
   minutes.innerHTML=m;
   seconds.innerHTML=s;
   ampm.innerHTML=am;







},1000);
