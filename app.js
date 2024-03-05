const countdown = () => {
    const countDate = new Date ("march 28, 2024 14:30:00").getTime()
   const now = new Date().getTime();
   const gap = countDate - now;


   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   const textDay = Math.floor(gap / day);
   const texthour = Math.floor((gap % day) / hour);
   const textminute = Math.floor((gap % hour) / minute);
   const textsecond  = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerHTML = textDay < 10 ? '0'+textDay : textDay;
  document.querySelector(".hour").innerHTML = texthour< 10 ? '0'+texthour : texthour;
  document.querySelector(".minute").innerHTML = textminute< 10 ? '0'+textminute : textminute;
  document.querySelector(".second").innerHTML = textsecond < 10 ? '0'+textsecond : textsecond;    
   
  // console.log (textDay);
   

};

setInterval(countdown, 1000); 