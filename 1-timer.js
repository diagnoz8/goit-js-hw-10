import{e as f}from"./assets/error-Bt8Aaaby.js";/* empty css                      */import{f as y,i as C}from"./assets/vendor-njWUcVeN.js";let s;const e=document.querySelector("button[data-start]"),r=document.querySelector("#datetime-picker"),c=document.querySelector("span[data-days]"),i=document.querySelector("span[data-hours]"),d=document.querySelector("span[data-minutes]"),u=document.querySelector("span[data-seconds]");function l(){return new Date}e.dataset.start="unactive";e.disabled=!0;const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=t[0];o<l()?(C.show({title:"Error",message:"Please choose a date in the future",color:"#EF4040",titleColor:"#FFFFFF",titleSize:"16px",titleLineHeight:"24px",messageColor:"#FFFFFF",messageSize:"16px",messageLineHeight:"24px",iconUrl:f,iconColor:"#FFFFFF",theme:"dark",position:"topRight"}),e.dataset.start="unactive",e.disabled=!0):(e.dataset.start="active",e.disabled=!1,s=o)}};y("#datetime-picker",x);function S(t){const m=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),F=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:h,minutes:p,seconds:F}}e.addEventListener("click",()=>{e.dataset.start="unactive",e.disabled=!0,r.disabled=!0;const t=setInterval(()=>{let o=l(),n=S(s-o);c.textContent=a(`${n.days}`),i.textContent=a(`${n.hours}`),d.textContent=a(`${n.minutes}`),u.textContent=a(`${n.seconds}`),s<=o&&(clearInterval(t),c.textContent="00",i.textContent="00",d.textContent="00",u.textContent="00",r.disabled=!1)},1e3)});const a=t=>t.padStart(2,0);
//# sourceMappingURL=1-timer.js.map
