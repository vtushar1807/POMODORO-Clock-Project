let dtime = 0;
let dtime1 = 0;
let sttime = 0;
let brtime = 0;
let click = 1;
let bclick = 0;
let timeInterval1 = 0;
let timeInterval2 = 0;
let sessionNo = 0;

let stDiv = document.getElementById('stDiv');
let plus1 = document.getElementById('plus1');
let sub1 = document.getElementById('sub1');

let brDiv = document.getElementById('brDiv');
let plus2 = document.getElementById('plus2');
let sub2 = document.getElementById('sub2');

let start = document.getElementById('start');
let reset = document.getElementById('reset');
let mainCont = document.getElementById('dtime');
let sessionTitle = document.getElementById('sessionTrack');

start.addEventListener("click", starttime);

function starttime() {
    reset.classList.remove('beforeStart');
    sessionTitle.innerText = `Session ${++sessionNo}`;

    clearInterval(timeInterval2);

    dtime = 0;
    dtime1 = 0;
    mainCont.innerText = "00 : 00";
    click = 0;

    if (sttime >= 1) {

        if (click == 0) {
            timeInterval1 = setInterval(() => {
                plus1.classList.add('disable');
                sub1.classList.add('disable');
                plus2.classList.add('disable');
                sub2.classList.add('disable');

                if (dtime < 9)
                    mainCont.innerText = `0${dtime1} : 0${++dtime}`;

                else {
                    if (dtime < 59)
                        mainCont.innerText = `0${dtime1} : ${++dtime}`;

                    else {
                        dtime = 0;
                        mainCont.innerText = `0${++dtime1} : 0${++dtime}`;
                    }
                }

                if (dtime1 == sttime) {
                    click = 1;
                    breaktimefun();
                }

            }, 1000);
        }
    }
};

reset.addEventListener("click", function () {

    mainCont.classList.remove('bktime');
    mainCont.innerText = "00 : 00";
    dtime = 0;
    dtime1 = 0;
    sttime = 0;
    brtime = 0;
    sessionTitle.innerText = `Session ${1}`;
    sessionNo = 0;

    clearInterval(timeInterval2);
    clearInterval(timeInterval1);

    click = 1;
    bclick = 0;

    plus1.classList.remove('disable');
    sub1.classList.remove('disable');
    plus2.classList.remove('disable');
    sub2.classList.remove('disable');
    reset.classList.add('beforeStart');

    stDiv.innerText = "00 min";
    brDiv.innerText = "00 min";

});

function breaktimefun() {

    sessionTitle.innerText = "Break !";
    dtime = 0;
    dtime1 = 0;
    mainCont.innerText = "00 : 00";
    mainCont.classList.add('bktime');
    bclick = 1;

    clearInterval(timeInterval1);
    if (bclick == 1) {
        timeInterval2 = setInterval(() => {
            if (dtime < 9)
                mainCont.innerText = `0${dtime1} : 0${++dtime}`;

            else {
                if (dtime < 59)
                    mainCont.innerText = `0${dtime1} : ${++dtime}`;

                else {
                    dtime = 0;
                    mainCont.innerText = `0${++dtime1} : 0${++dtime}`;
                }
            }

            if (dtime1 == brtime) {

                mainCont.classList.remove('bktime');
                bclick = 0;
                starttime();
            }
        }, 1000);
    }
}

plus1.addEventListener("click", function () {
    start.classList.remove('beforeStart');

    if (sttime < 9)
        stDiv.innerText = `0${++sttime}min`;

    else
        stDiv.innerText = `${++sttime}min`;
});

plus2.addEventListener("click", function () {

    if (brtime < 9)
        brDiv.innerText = `0${++brtime}min`;

    else
        brDiv.innerText = `${++brtime}min`;

});


sub1.addEventListener("click", function () {

    if (sttime > 0) {

        if (sttime <= 10)
            stDiv.innerText = `0${--sttime}min`;

        else
            stDiv.innerText = `${--sttime}min`;
    }
});

sub2.addEventListener("click", function () {

    if (brtime > 0) {
        if (brtime <= 10)
            brDiv.innerText = `0${--brtime}min`;

        else
            brDiv.innerText = `${--brtime}min`;
    }
});