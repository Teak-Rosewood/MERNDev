/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("One second thread resolved...");
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Two second thread resolved...");
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Three second thread resolved...");
        }, 3000)
    })
}

async function calculateTime() {
    let time = new Date().getTime();
    const a = await waitOneSecond();
    console.log(a);
    const b = await waitTwoSecond();
    console.log(b);
    const c = await waitThreeSecond();
    console.log(c);
    time = (new Date().getTime() - time) / 1000;
    console.log("Total time taken:",time);    
}

calculateTime();