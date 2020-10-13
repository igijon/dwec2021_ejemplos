console.log(this === window); //true

function test()
{
    console.log(this === window) //true
}

test(); //window.test();