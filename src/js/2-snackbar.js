import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form");
const fieldset = document.querySelector('fieldset');
const delayEl = document.querySelector('[name="delay"]')
const button = document.querySelector('button[type="submit"]')
let msg = ``;
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
                    msg = `✅ Fulfilled promise in ${delay}ms`;
                    resolve(msg)
                }
                else{
                   msg =`Rejected promise in ${delay}ms`
                    reject(msg)
                }
                
                
            }, delay);
          })
          .then((msg) =>
            iziToast.show({
            title: 'OK',
            message: `${msg}`,
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
        .catch((msg) =>
            iziToast.show({
            title: 'Error',
            message: `${msg}`,
            color: '#EF4040',
            iconUrl: '../img/error.png',
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