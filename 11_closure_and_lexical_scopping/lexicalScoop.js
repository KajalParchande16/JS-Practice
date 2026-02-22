function outer()
{
    let name="Harman";
    function inner()
    {
        let viceCapatin="Smriti"
        console.log(name);
    }
    function innerTwo()
    {
        console.log(name);
        console.log(viceCapatin);
    }
    inner();
    innerTwo();
}
outer();