// 'use strict';
function greet()
{
    console.log(this.name);
    // without strict mode it point to global object but in name is not defined
    // with strict it will give error
    // as we know use strict mode give undefine =>undefine.name=>error
}

greet();