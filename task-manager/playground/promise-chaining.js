require('../src/db/mongoose');
const User = require('../src/db/models/user');

//5cd82b60552dfa3e4c975004


/*
User.findByIdAndUpdate('5cd82b60552dfa3e4c975004',{age:1}).then(user=>{
   console.log(user);
   return User.countDocuments({age: user.age});
}).then(amount=>{
    console.log(amount);
}).catch(e=>{
    console.log(e);
});
*/

const upadateAgeCount = async (id,age)=>{
const user = await User.findByIdAndUpdate(id,{age});
const count = await User.countDocuments({age});
return {user, count};
    };
upadateAgeCount('5cd82b60552dfa3e4c975004',2).then(result=>{
    console.log(result);
});