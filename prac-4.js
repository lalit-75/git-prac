// reduce

const arr = [1,2,3,4,5,6,7,8];

const maxi = arr.reduce(function(acc,curr){
    return acc = Math.max(curr,acc);
},0);

console.log(maxi);

//filter
const users = [
    {f:"rk",l:"K",age:30},
    {f:"sk",l:"B",age:55},
    {f:"ak",l:"S",age:70},
    {f:"ts",l:"F",age:29},
]
//to filter first names whose age<=30
const out = users.filter(function(user){
    if(user.age<=30){
        return user;
    }
}).map(user=>user.f);
console.log(out);