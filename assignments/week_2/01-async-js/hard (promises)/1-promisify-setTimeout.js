/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function waitNseconds(n) {
    return new Promise(function(){
        setTimeout(function(){
            console.log("waited for:", n, "seconds");
        }, n*1000)
    })
}

async function main ()
{
    const val = await waitNseconds(4);
}

 main()