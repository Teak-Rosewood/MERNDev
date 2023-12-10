function counter (n){
    let i = 1;
    const a = setInterval(() => {
        if(i <= n){
            console.log("Counter:", i);
            i++;
        }
        else
            clearInterval(a);
    }, 1000);
}

counter(5);