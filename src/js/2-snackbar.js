import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import errorIcon from '../img/error.png';
const form = document.querySelector(".form");
const fieldset = document.querySelector('fieldset');
const delayEl = document.querySelector('[name="delay"]')
const button = document.querySelector('button[type="submit"]')

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    const selected = fieldset.querySelector('input[name="state"]:checked');
    if (!selected) {
        iziToast.show({
            title: 'Caution',
            message: `You forgot important data`,
            color: '#FFA000',
            titleColor: '#FFFFFF',
            titleSize: '16px',
            titleLineHeight: '24px',
            messageColor: '#FFFFFF',
            messageSize: '16px',
            messageLineHeight: '24px',
            theme: 'dark',
            position: 'topRight', 
        })
        return
    }
    let delay = Number(delayEl.value);
    if (Number.isNaN(delay) || delay === 0 ) {
        iziToast.show({
            title: 'Caution',
            message: `You forgot important data`,
            color: '#FFA000',
            titleColor: '#FFFFFF',
            titleSize: '16px',
            titleLineHeight: '24px',
            messageColor: '#FFFFFF',
            messageSize: '16px',
            messageLineHeight: '24px',
            theme: 'dark',
            position: 'topRight', 
        })
        return
    }
        const promise = new Promise((resolve, reject) => {     
            setTimeout(() => {
                if (selected.value === "fulfilled") {
                    resolve(delay)
                }
                else{    
                    reject(delay)
                }
                
                
            }, delay);
          })
          .then((delay) =>
            iziToast.show({
            title: 'OK',
            message: `✅ Fulfilled promise in ${delay}ms`,
            color: '#59A10D',
            titleColor: '#FFFFFF',
            titleSize: '16px',
            titleLineHeight: '24px',
            messageColor: '#FFFFFF',
            messageSize: '16px',
            messageLineHeight: '24px',
            theme: 'dark',
            position: 'topRight', 
        }))
        .catch((delay) =>
            iziToast.show({
            title: 'Error',
            message: `❌Rejected promise in ${delay}ms`,
            color: '#EF4040',
            iconUrl: errorIcon,
            iconColor: '#FFFFFF',
            titleColor: '#FFFFFF',
            titleSize: '16px',
            titleLineHeight: '24px',
            messageColor: '#FFFFFF',
            messageSize: '16px',
            messageLineHeight: '24px',
            theme: 'dark',
            position: 'topRight', 
        }))
    

    
    
    })
