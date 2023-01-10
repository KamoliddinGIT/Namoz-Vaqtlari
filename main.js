const vaqt = document.querySelector('#time'),
    bomdod = document.querySelector('bomdod'),
    time = document.querySelector('#time'),
    weekday = document.querySelector('#weekday'),
    bomdod_time = document.querySelector('.bomdod_time'),
    peshin_time = document.querySelector('.peshin_time'),
    asr_time = document.querySelector('.asr_time'),
    shom_time = document.querySelector('.shom_time'),
    hufton_time = document.querySelector('.hufton_time'),
    tahajjud_time = document.querySelector('.tahajjud_time'),
    quyosh_time = document.querySelector('.quyosh_time')



fetch('https://islomapi.uz/api/present/day?region=Samarqand')
.then(res=>  res.json())
.then(data=> {
    function Zero(a) {
        if(a < 10) {
            return '0' + a
        }
        else {
            return a
        }
    }
    function Zero1(b) {
        if(b < 10) {
            return '0' + b
        }
        else {
            return b
        }
    }
    console.log(data)
  setInterval(()=>{
    let date = new Date()
    time.innerHTML = Zero(`${date.getHours()}:`) + Zero1(`${date.getMinutes()}:`) + Zero(`${date.getSeconds()}`)
    weekday.innerHTML = data.weekday
    // namoz vaqtlari--------****///

    bomdod_time.innerHTML = data.times.tong_saharlik
    peshin_time.innerHTML = data.times.peshin
    asr_time.innerHTML = data.times.asr
    shom_time.innerHTML = data.times.shom_iftor
    hufton_time.innerHTML = data.times.hufton
    quyosh_time.innerHTML = data.times.quyosh

    // TAHAJJUD NAMOZI VAQTI-------//
    const bomdod_minut = parseInt(bomdod_time.innerHTML.slice(0, 2)*60) + parseInt(bomdod_time.innerHTML.slice(0,2))
    const peshin_minut = parseInt(peshin_time.innerHTML.slice(0, 2)*60) + parseInt(peshin_time.innerHTML.slice(0, 2)/60)
    const asr_minut = parseInt(asr_time.innerHTML.slice(0, 2)*60) + parseInt(asr_time.innerHTML.slice(0, 2)/60)
    const shom_minut = parseInt(shom_time.innerHTML.slice(0, 2)*60) + parseInt(shom_time.innerHTML.slice(0, 2)/60)
    const hufton_minut = parseInt(hufton_time.innerHTML.slice(0, 2)*60) + parseInt(hufton_time.innerHTML.slice(0,2))

    const tahajjud_minut = parseInt(bomdod_minut) - ((24*60 - (hufton_minut - bomdod_minut))/3)
    tahajjud_time.innerHTML = 'TAHAJJUD VAQTI: ' + Zero(Math.trunc(tahajjud_minut/60)) + ":" + tahajjud_minut%60 + "-" 
    // console.log(tahajjud_minut);
    console.log(Math.trunc(tahajjud_minut));
    }, 1000)
})