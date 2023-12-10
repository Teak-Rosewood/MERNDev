/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("waiting for:", seconds, "seconds");
            resolve();
        }, seconds*1000);
    })
}

async function main (){
    console.log("before awating");
    const a = await sleep(3);
    console.log("Thread is now free")
}
main();