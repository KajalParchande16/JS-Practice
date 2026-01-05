let myStr="HarmanPreet     ";
// remove space & find the length of given string 

String.prototype.trueLength=function()
{
    console.log(`${this}`);
    console.log(`True length of ${this.trim()} is ${this.trim().length}`)
}

myStr.trueLength();
("Javascript tutorial    ").trueLength();