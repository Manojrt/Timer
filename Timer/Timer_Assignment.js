var Hour = document.getElementById("Hour")
var Min = document.getElementById("Min")
var Sec = document.getElementById("Sec")
var Day = document.getElementById("Day")

setInterval(()=>{

    var hour_time = document.getElementById("hour_time")
    var a = new Date().getHours();
    
    var Time_mode = document.getElementById("Time_1").value


    if(Time_mode == "Normal Time" &&Time_mode<=12){
        var normal_time = a - 12;
    hour_time.textContent=normal_time;
    }

    else{
        hour_time.textContent=a;
    }

    // if(a<10){
    //     hour_time.textContent="0"+ normal_time;
    // }

    var min_time = document.getElementById("min_time")
    min_time.textContent=new Date().getMinutes();

    var sec_time = document.getElementById("sec_time")
    sec_time.textContent=new Date().getSeconds();
    // console.log(temp)

    var arr = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
    var cur_day = new Date().getDay();
    var current_day = document.getElementById("current_day")
    current_day.textContent=arr[cur_day]

    if(a==0 || a <12){
        var AM_PM_time = document.getElementById("AM_PM_time")
        AM_PM_time.textContent="AM"
    }
    else{
        var AM_PM_time = document.getElementById("AM_PM_time")
        AM_PM_time.textContent="PM"
    }

    // var current_date = document.getElementById("current_date")
    // current_date.textContent = new Date().getDate().
},0);
