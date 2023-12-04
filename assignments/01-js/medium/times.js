/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    var a = new Date().getTime()
    var sum = 0;
    for(var i = 1; i <= n; i++)
        sum+=i;
    a = (new Date().getTime() - a) / 1000;
    console.log("1-"+n+": "+a+" seconds, sum: "+sum);
    return 0.01;
}

calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);