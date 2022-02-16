const time = document.querySelector(".js-clock");

function countDown(){
    const date = new Date()
    let xmas_date = new Date(`${new Date().getFullYear()}-12-25T00:00:00`);
    let diff = new Date(xmas_date - date);
    if (diff < 0){
        xmas_date = new Date(`${new Date().getFullYear()+1}-12-25T00:00:00`);
        diff = new Date(xmas_date - date);
    }
    const sec = Math.floor(diff/1000);
    const min = Math.floor(sec/60);
    const hour = Math.floor(min/60);
    const day = Math.floor(hour/24);

    const sec2 = sec%60 < 10 ? `0${sec % 60}` : `${sec % 60}`;
    const min2 = min%60 < 10 ? `0${min % 60 }` : `${min % 60}`;
    const hour2 = hour%24 < 10 ? `0${hour % 24}` : `${hour % 24}`;
    const day2 = day < 10 ? `0${day}` : `${day}`;

    const clock = `${day2}d ${hour2}h ${min2}m ${sec2}s`;
    time.innerHTML = clock;
}

countDown();
setInterval(countDown, 1000);