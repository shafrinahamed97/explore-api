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
const shopJson = JSON.stringify(shop); // stringly to object create
console.log(shopJson);

const shopObj = JSON.parse(shopJson); // object to strignly create
console.log(shopObj);
