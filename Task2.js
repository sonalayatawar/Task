let sumArray = function(array){

    let total =array.reduce((acc,curr)=>{
        return acc+curr;
    },0)
    return total;
}

let array = [1,2,3,4,5];
let total = sumArray(array);
console.log(total);