// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
function isArray(arr){
    newArr=[];
let arr=arr.slice(0,4);
let arr1=arr.slice(-2);
arr.forEach(num=>{
let previous =num*num;
console.log[previous];
newArr.push(previous);

})

arr1.forEach(num=>{
let isarr=num+10;
console.log(isarr);

})
console.log(newArr);
return newArr;
}





// Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

let arrNumber=[1,2,3,4,5,6,7,8,9,10]
let i=0
while(i<arrNumber.length){
if(arrNumber[i]===arrNumber[3]){
    break;
}
console.log(arrNumber[i]);i++;
}



 

// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
function isArray(arr){
for(let num=0;num<arr.length;num++){
 console.log(arr[num]);
}

}


// Write a function that accepts an array of strings and console.logs each element using a for loop.
function isArray(){
    let arr=['banana','berries','apple']
    for (element of arr){
        console.log({element});
    }
        
    }
isArray();
// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string
function isString(str){
let reversed= '';
let i=str.length-1;
while(i>=0){
    reversed+=str[i];
    i--;
}
    return reversed;
};

let string="Morning";

console.log(isString(string));





 




