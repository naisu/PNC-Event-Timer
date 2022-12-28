function leadingZero(num) {
    num = num.toString();
    while (num.length < 2) num = "0" + num;
    return num;
}


function countDown(days, hours, mins, secs, date, id, itemId) {
    const dateTimeNow = new Date().getTime();
    let dateCountDown = new Date(date).getTime();
    let difference = dateCountDown - dateTimeNow;

    const daysValue = document.querySelectorAll(days);
    const hoursValue = document.querySelectorAll(hours);
    const minutesValue = document.querySelectorAll(mins);
    const secondsValue = document.querySelectorAll(secs);

    let daysValueNumber = leadingZero(Math.floor(difference / (1000 * 60 * 60 * 24)));
    let hoursValueNumber = leadingZero(Math.floor(difference / (1000 * 60 * 60) % 24));
    let minutesValueNumber = leadingZero(Math.floor(difference / (1000 * 60) % 60));
    let secondsValueNumber = leadingZero(Math.floor(difference / (1000) % 60));

    if (daysValueNumber < 0) {
        timerRemoveElements(id, itemId);
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

function countReset(hours, mins, secs) {
    const dateTimeNow = new Date().getTime();
    // PNC Server Reset : 05:00:00 AM UTC-8
    let serverTime = new Date().setUTCHours(13, 0, 0);
    let difference = serverTime - dateTimeNow;
    if (difference < 0) {
        // If the day has passed add + 24 hours to UTCHours to simulate next day
        let serverTime = new Date().setUTCHours(13+24, 0, 0);
        difference = serverTime - dateTimeNow;
    }


    const hoursValue = document.querySelector(hours);
    const minutesValue = document.querySelector(mins);
    const secondsValue = document.querySelector(secs);
    let hoursValueNumber = leadingZero(Math.floor(difference / (1000 * 60 * 60) % 24));
    let minutesValueNumber = leadingZero(Math.floor(difference / (1000 * 60) % 60));
    let secondsValueNumber = leadingZero(Math.floor(difference / (1000) % 60));
    hoursValue.innerHTML = hoursValueNumber + ":";
    minutesValue.innerHTML = minutesValueNumber + ":";
    secondsValue.innerHTML = secondsValueNumber;
}

function countServer() {
    const dateTimeNow = new Date();
    const hoursValue = document.querySelector('.st-hours');
    const minutesValue = document.querySelector('.st-minutes');
    const secondsValue = document.querySelector('.st-seconds');
    // Setting UTC time to PST/UTC-8
    let utcHour = dateTimeNow.getUTCHours() -8;
    if(utcHour < 0) {
        utcHour += 24;
    }
    hoursValue.innerHTML = leadingZero(utcHour) + ":";
    minutesValue.innerHTML = leadingZero(dateTimeNow.getUTCMinutes()) + ":";
    secondsValue.innerHTML = leadingZero(dateTimeNow.getUTCSeconds());
}

function timerRemoveElements(id, itemId) {
    const elements = document.querySelectorAll(itemId);

    elements.forEach(element => {
        element.remove();
    });

    if (elements.length > 0) {
        document.querySelectorAll(id).forEach(id => {
            id.innerHTML += `<div class= event-end>
                                <h1>EXPIRED</h1>
                            </div>`;
        });
    }
}

//Hours +8 to account for UTC-8

// TIMER 0 (ENDS: 2023/01/04 00:00:00) [Hatsuchiri Starts]
setInterval(function () { countDown('#days-t0', '#hours-t0', '#minutes-t0', '#seconds-t0', 'January 04, 2023 08:00:00 UTC+00:00', '.t0', '.t0-item') }, 1000);

// TIMER 1 (ENDS: 2023/01/18 23:59:59) [De Lacey]
setInterval(function () { countDown('#days-t1', '#hours-t1', '#minutes-t1', '#seconds-t1', 'January 19, 2023 08:00:00 UTC+00:00', '.t1', '.t1-item') }, 1000);

// TIMER 2 (ENDS: 2023/01/24 23:59:59 [Divine Hersey, Ocean Dancer, Hatsuchiri End]
setInterval(function () { countDown('#days-t2', '#hours-t2', '#minutes-t2', '#seconds-t2', 'January 25, 2023 08:00:00 UTC+00:00', '.t2', '.t2-item') }, 1000);

// TIMER 5 (ENDS: 2022/12/28 04:59:59) [Christmas Packs, 2x Frag, 2x Vuln]
setInterval(function () { countDown('#days-t5', '#hours-t5', '#minutes-t5', '#seconds-t5', 'December 28, 2022 13:00:00 UTC+00:00', '.t5', '.t5-item') }, 1000);

// TIMER 6 (ENDS: 2023/01/10 23:59:59) [Christmas Skins, Furniture, Evelyn]
setInterval(function () { countDown('#days-t6', '#hours-t6', '#minutes-t6', '#seconds-t6', 'January 11, 2023 08:00:00 UTC+00:00', '.t6', '.t6-item') }, 1000);

// TIMER 7 (ENDS: 2023/01/23 03:59:59) [Intium Mechanica]
setInterval(function () { countDown('#days-t7', '#hours-t7', '#minutes-t7', '#seconds-t7', 'January 23, 2023 12:00:00 UTC+00:00', '.t7', '.t7-item') }, 1000);

// TIMER 8 (ENDS: 2023/01/04 05:00:00) [Divine Heresy, Turquoise Dive, Medic, Special Offer Pack]
setInterval(function () { countDown('#days-t8', '#hours-t8', '#minutes-t8', '#seconds-t8', 'January 04, 2023 13:00:00 UTC+00:00', '.t8', '.t8-item') }, 1000);

// TIMER FOR SERVER / RESET
setInterval(function () { countReset(".sr-hours", ".sr-minutes", ".sr-seconds") }, 1000)
setInterval(function () { countServer() }, 1000)