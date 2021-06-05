const hour = document.querySelector('.h'),
    min = document.querySelector('.m'), 
    sec = document.querySelector('.s'), 
    numberHour = document.querySelector('.hours'),
    numberMinutes = document.querySelector('.minutes')

function clock() {


    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

        if (time.getSeconds() == 59) {
  
        sec.style = `transform:rotate(${360}deg);transition: 1s linear`
        sec.style = `transform:rotate(${0}deg);transition: 0s linear`
        
    } else {
   
        sec.style = `transform:rotate(${second}deg);transition: 1s linear`

    }

    min.style = `transform: rotate(${minutes}deg);transition: 1s linear`
    hour.style = `transform:rotate(${hours}deg);transition: 1s linear`
   



    numberHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    numberMinutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    setTimeout(() => clock(), 1000);
}

clock();

const links = document.querySelectorAll('.tabsItem'),
 tabs = document.querySelectorAll('.tabsContentItem ');

 for (let i = 0; i < links.length; i++){
    links[i].addEventListener('click',function () {
        links[0].classList.remove('active');
        links[1].classList.remove('active');
        tabs[0].classList.remove('active');
        tabs[1].classList.remove('active');

    this.classList.add('active');
    tabs[i].classList.add('active');
    })
 }
     
 const watchBtn = document.querySelector('.stopwatch__btn'),
    secondWatch = document.querySelector('.stopwatch__seconds'),
    minutesWatch = document.querySelector('.stopwatch__minutes'),
    hoursWatch = document.querySelector('.stopwatch__hours');
 watchBtn.addEventListener('click',function(){
if(this.innerHTML == 'start' ) {
    this.innerHTML = 'stop';
    let i = 0 ;
    setTimeout(() => stopWatch(this,i), 15);
}else if ( this.innerHTML == 'stop'){
    this.innerHTML = 'clear' ;
}else if ( this.innerHTML === 'clear' ) {
    secondWatch.innerHTML = 0;
    minutesWatch.innerHTML = 0 ;
    hoursWatch.innerHTML = 0 ;
    this.innerHTML = 'start' 
}


 })
 function stopWatch(el,i) {
if(el.innerHTML == 'stop') {
if ( i == 59) {
    i = 0 ; 
    if(minutesWatch.innerHTML == 59){
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML++
    }else{
        minutesWatch.innerHTML++
    }
}else{
    i++;
    secondWatch.innerHTML = i ;
}
setTimeout(() => stopWatch(el,i) , 15);

}


 }