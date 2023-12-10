function DisplayTime(){
    setTimeout(function timeout(){
        var d = new Date();
        console.log(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds());
        console.log(d.toLocaleTimeString());
        DisplayTime()
    }, 1000);
}
DisplayTime();