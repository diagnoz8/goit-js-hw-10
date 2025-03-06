import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
let userSelectedDate;
const startBtn =  document.querySelector('button[data-start]');
const userInput = document.querySelector("#datetime-picker");
const days = document.querySelector('span[data-days]');
const hrs = document.querySelector('span[data-hours]');
const min = document.querySelector('span[data-minutes]');
const sec = document.querySelector('span[data-seconds]');

startBtn.dataset.start = "unactive";
 startBtn.disabled = true;
let currentDate;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        currentDate = new Date();
        if (selectedDate < currentDate) {
            iziToast.show({
                title: 'Error',
                message: 'Please choose a date in the future',
                color: '#EF4040',
                titleColor: '#FFFFFF',
                titleSize: '16px',
                titleLineHeight: '24px',
                messageColor: '#FFFFFF',
                messageSize: '16px',
                messageLineHeight: '24px',
                iconUrl: '../img/error.png',
                iconColor: '#FFFFFF',
                theme: 'dark',
                position: 'topRight', 
            });
            // window.alert("");
            startBtn.dataset.start = "unactive";
            startBtn.disabled = true;
        }
        else{
            startBtn.dataset.start = "active"
            startBtn.disabled = false;
            userSelectedDate = selectedDate;
        }
    //   console.log(selectedDates[0]);
    },
  };
flatpickr("#datetime-picker", options);



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
startBtn.addEventListener("click", () => {
    startBtn.dataset.start = "unactive";
    startBtn.disabled = true;
    userInput.disabled = true;
    let timeLeft = convertMs(userSelectedDate - ( currentDate = new Date()));
    const intervalId = setInterval(()=> {
            timeLeft = convertMs(userSelectedDate - ( currentDate = new Date()));
            days.textContent = addLeadingZero(`${timeLeft.days}`);
            hrs.textContent = addLeadingZero(`${timeLeft.hours}`);
            min.textContent = addLeadingZero(`${timeLeft.minutes}`);
            sec.textContent = addLeadingZero(`${timeLeft.seconds}`);
  

    if ( userSelectedDate - ( currentDate = new Date())<= 0){
        clearInterval(intervalId);
        days.textContent = `00`;
        hrs.textContent = `00`;
        min.textContent = `00`;
        sec.textContent = `00`;
    userInput.disabled = false;
}        
 
                  }
            , 1000)
     ;
       
    

    
    
} )

const addLeadingZero = (value) =>  value.padStart(2, 0);

 
  