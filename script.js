let hh = 0
let mm = 0
let ss = 0
let tempo = 10
let cron

function start() {
    cron = setInterval(() => {timer();}, tempo)
}

function pause() {
    clearInterval(cron)
}

function stop() {
    clearInterval(cron)
    hh = 0
    mm = 0
    ss = 0

    document.getElementById('counter').innerText = '00:00:00'
}

function timer() {
    ss++

    if(ss == 60){
        ss = 0
        mm++

        if(mm == 60){
            mm = 0
            hh++
        }
    }

    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    document.getElementById('counter').innerText = format
}


let hh2 = 0
let mm2 = 0
let ss2 = 0
let tempo2 = 10
let cron2

function start2() {
    cron2 = setInterval(() => {timer2();}, tempo2)
}

function pause2() {
    clearInterval(cron2)
}

function stop2() {
    clearInterval(cron2)
    hh2 = 0
    mm2= 0
    ss2 = 0

    document.getElementById('counter2').innerText = '00:00:00'
}

function timer2() {
    ss2++

    if(ss2 == 60){
        ss2 = 0
        mm2++

        if(mm2 == 60){
            mm2 = 0
            hh2++
        }
    }

    let format2 = (hh2 < 10 ? '0' + hh2 : hh2) + ':' + (mm2 < 10 ? '0' + mm2 : mm2) + ':' + (ss2 < 10 ? '0' + ss2 : ss2)
    document.getElementById('counter2').innerText = format2
}