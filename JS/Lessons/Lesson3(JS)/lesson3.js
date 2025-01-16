// 1

var sum = 0;

// for (let i = 0; i < 100; i++) {
//     sum += i;
// }

// console.log(sum);





// 2

// for (let i = 0; i < 100; i++) {
//     if (i%2 == 1) {
//         sum += i;
//     }
    
// }

// console.log(sum);




//3

// for (let i = 0; i < 100; i++) {
//     if (i%2 == 0) {
//         sum += i;
//     }
    
// }

// console.log(sum);



//4

// var cut = 0;
// var tek = 0;

// for (let i = 0; i < 100; i++) {
//     if (i%2 == 0) {
//         cut += i;
//     }
//     else{
//         tek+=i;
//     }
    
// }

// console.log(cut);
// console.log(tek);




//5

// for (let i = 0; i < 100; i++) {
//     if (i % 3 == 0) {
//         sum += i;
//     }
// }

// console.log(sum);




//6

// for (let i = 0; i < 100; i++) {
//     if (i % 7 == 0) {
//         sum += i;
//     }
// }

// console.log(sum);





//7

// for (let i = 0; i < 100; i++) {
//     if (i % 3 == 0 && i % 7 == 0) {
//         sum += i;
//     }
// }

// console.log(sum);





//8

// for (let i = 0; i < 100; i++) {
//     if (i % 3 == 0 || i % 7 == 0) {
//         sum += i;
//     }
// }

// console.log(sum);


//9

var arr = [10,20,13,43,54,56,76,78,23,43];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         sum += arr[i];
//     }
    
// }

// console.log(sum);




//9


// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
    
// }
// sum /= arr.length;
// console.log(sum);



let word = "Aviasiya";

for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() == "a") {
        sum+=1;
    }
}

console.log(sum);


var day = 6;

// switch (day) {
//     case 1: console.log('Bazar ertesi');
//     break;
//     case 2: console.log('Cersenbe axsami');
//     break;  
//     case 3: console.log('Cersenbe');
//     break;
//     case 4: console.log('Cume axsami');
//     break; 
//     case 5: console.log('Cume');
//     break; 
//     case 6: console.log('Senbe');
//     break; 
//     case 7: console.log('Bazar');
//     break; 
//     default: console.log('Heftenin bele gunu yoxdur');
//     break;
// }