function countDown(days, hours, mins, secs, date) {
    const dateTimeNow = new Date().getTime();
    let dateCountDown = new Date(date).getTime();
    let difference = dateCountDown - dateTimeNow;

    const daysValue = document.querySelectorAll(days);
    const hoursValue = document.querySelectorAll(hours);
    const minutesValue = document.querySelectorAll(mins);
    const secondsValue = document.querySelectorAll(secs);

    const daysValueNumber = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursValueNumber = Math.floor(difference / (1000 * 60 * 60) % 24);
    const minutesValueNumber = Math.floor(difference / (1000 * 60) % 60)
    const secondsValueNumber = Math.floor(difference / (1000) % 60);

    if(daysValueNumber < 0) {
        const element = document.getElementById("frag");
         element.remove();
         document.getElementById("2xfrag").innerHTML += "<h3>EVENT ENDED"
    }
    daysValue.forEach(days => {
        days.innerHTML = daysValueNumber;
    });
    hoursValue.forEach(hours => {
        hours.innerHTML = hoursValueNumber;
    });
    minutesValue.forEach(minutes => {
        minutes.innerHTML = minutesValueNumber;
    });
    secondsValue.forEach(seconds => {
        seconds.innerHTML = secondsValueNumber;
    });
}

// TIMER 1 (ENDS: 2022/12/26 03:59:59) [Current Battlepass]
setInterval(function() {countDown('#days-t1', '#hours-t1', '#minutes-t1', '#seconds-t1','December 26, 2022 03:59:59')}, 1000);

// TIMER 2 (STARTS: 2022/12/26 05:00:00 | ENDS: 2023/01/23 03:59:59) [Next Battlepass]
setInterval(function() {countDown('#days-t2', '#hours-t2', '#minutes-t2', '#seconds-t2','December 26, 2022 05:00:00')}, 1000);

// TIMER 3 (ENDS: 2022/12/27 23:59:59) [Kuro Livestreaming, Rate Up]
setInterval(function() {countDown('#days-t3', '#hours-t3', '#minutes-t3', '#seconds-t3','December 27, 2022 23:59:59')}, 1000);

// TIMER 4 (STARTS: 2022/12/28 00:00:00) [The Divine Hershey's Kiss]
setInterval(function() {countDown('#days-t4', '#hours-t4', '#minutes-t4', '#seconds-t4','December 28, 2022 00:00:00')}, 1000);

// TIMER 5 (ENDS: 2022/12/28 04:59:59) [Christmas Packs, 2x Frag, 2x Vuln]
setInterval(function() {countDown('#days-t5', '#hours-t5', '#minutes-t5', '#seconds-t5','December 28, 2022 04:59:59')}, 1000);

// TIMER 6 (ENDS: 2023/01/10 23:59:59) [Christmas Skins, Furniture]
setInterval(function() {countDown('#days-t6', '#hours-t6', '#minutes-t6', '#seconds-t6','January 10, 2023 23:59:59')}, 1000);