//Arrays

//without using map function()
function map(arr,f){
let newarr=[];
for (let index = 0; index < arr.length; index++) {
    newarr[index]=f(arr[index])
}
return newarr
}
function pluse(value){
return value**2
}
console.log(map([1,2,3 ],pluse));





