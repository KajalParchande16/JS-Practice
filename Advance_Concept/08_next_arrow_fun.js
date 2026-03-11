
const user = {
    name: 'Rakesh',
    age: 23,

    greet: function () {
        console.log("grret function ", this);
        function meet() {
            console.log(this); //this will point to user object =>user invoked greet
        }
        meet(); //this point to global object
        // as we know if function invoked itself withou strict mode it will point global object
    }
}
user.greet();

