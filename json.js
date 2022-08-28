const user = {
    id:1, name:'Gorib Amir', job:'actor'
};
// JavaSCript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner:'Alia',
    address:{
        street:'kocukhet vooter goli',
        city:'Ranbir',
        country:'BD'
    },
    products:['laptop','mic','monitor','keybord'],
    revenue: 45000,
    isOpen:true,
    isNew: false
};
console.log(shop);
const shopJson = JSON.stringify(shop); // object to JSON stringly converet
console.log(shopJson);

const shopObj = JSON.parse(shopJson); // JSON Stringly to object convert
console.log(shopObj);


/*
 JSON: JavaScript Object Notation is an open data interchange format that is both human and machine-readable.

*/