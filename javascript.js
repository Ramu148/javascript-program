//First 

// let n;
// for(let n=0;n<100;n++)
// {
//     if(n%3==0 && n%5==0){
//         console.log("FIZZBUZZ");
//     }

//    else if(n%3==0){
//     console.log("FIZZ");
//     }
//     else if(n%5==0){
//         console.log("BUZZ");
//     }
//     else{
//         console.log(n);
//     }
//     }




    // third program

//   let arr=[12,53,74,43];
//   let arr1=arr.sort();
//   console.log("largest value is:"+ arr1[arr1.length-1]);



//    third program
// let str="demi";
// let str1=str.split("").reverse().join("");
// if(str==str1){
//     console.log("Palindrome");

// }
// else{
//     console.log("not");
// }


//fourth


// function occurences(str){
//     const count={};
//     for(let i=0;i<str.length;i++){
//         const char=str[i];
//         if(count[char]){
//             count[char]++;

//         }
//         else{
//             count[char]=1
            
//         }
//     }
//     return count;
    
// }
// const str="strong";
// console.log(occurences(str));


///sixth

function factorial(num){
    if(num==0){
        return 1;
    }
    else{
        return num*factorial(num-1);
    }
}
console.log(factorial(5));