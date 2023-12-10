function counter(seconds, i){
    if(i <= seconds)
    {
        setTimeout(() =>{
            console.log("counter:", i);
            counter(seconds, i+1);
        },1000)
    }
}
counter(10, 1);