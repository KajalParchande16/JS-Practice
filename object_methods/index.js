// Object methods

// assign
// create
// keys
// values
// entries
// fromEntries
// groupBy
// preventExtension
// isExtensible
// seal
// isSealed
// freeze
// isFrozen
// defineProperty
// defineProperties
// getOwnPropertyDescriptor
// getOwnPropertyDescriptors
// getOwnPropertyName
// getProtoTypeOf

let user={
    firstName:"Renuka",
    role:'blower'
}

let user2=user;
// user2.firstName="Shree";
// console.log(user2);
console.log(user);

// but we don;t want to change user so  use shallow copy
// ... or Object.assign()

let user3=Object.assign(user,user2);
user2.firstName="Shree";

console.log(user3);
