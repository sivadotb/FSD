var createParagrahElement = function (parent,label, content, arr){
    var p = document.createElement("p");
    p.style="width:auto";
    var span = document.createElement("span");
    span.style="width:auto";
    span.innerHTML=label;
    p.innerHTML=content + arr.toString();
    parent.append(span);
    parent.append(p);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var arrStrings = [];
console.log(nums.toString());

//Anonymous function for Title case convertions 
var titleCase = function (string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 return sentence.join(" ");
 }

 //IIFE for Title case convertions 
var responseTitleCase = (function (string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 return sentence.join(" ");
 })("convert string to title case with javascript");


 //Anonymous function for Sum of Array
 var sum = function (arr){
    var sum = 0;
    for(var i = 0; i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
 }

 //IIFE function for Sum of Array
var sumResult = (function (arr){
    var sum = 0;
    for(var i = 0; i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
 })(nums);

//Anonymous function for Odd number filter
var oddFilter = function(arr){
    var oddArray = [];
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        if(arr[i] % 2 != 0){
             oddArray.push(arr[i]);
        }
    }
    console.log(oddArray);
    return oddArray;
}

//IIFE for Odd Numbers filter
var oddNumbers = (function(arr){
    var oddArray = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] % 2 != 0){
             oddArray.push(arr[i]);
        }
    }
    return oddArray;
})(nums);


function isPrime(a){
    var flg = true;
    for(var i=2;i<=a-1;i++){
        if(a % i == 0){
            flg=false;
            break;
        }
    }
    return flg;
}

//Anonymous function for prime numbers
var primeNumbers = function (arr){
    var primeNumbers = [];
    for(var i=0; i<arr.length;i++){
        if(isPrime(arr[i])){
            primeNumbers.push(arr[i]);
        }
    }
    return primeNumbers;
}

//IIFE for prime numbers
var primeResult = (function (arr){
    var primeNumbers = [];
    for(var i=0; i<arr.length;i++){
        if(isPrime(arr[i])){
            primeNumbers.push(arr[i]);
        }
    }
    return primeNumbers;
})(nums);

//Anonymous function to get palindrome strings from array of strings
var getPalindromeStrings = function(arrStrings){
    var palindromeStrings = [];
    for(var i = 0; i<arr.length;i++){
        if(isPalindrome[arr[i]]){
            palindromeStrings.push(arr[i]);
        }
    }
    return palindromeStrings;
}

//IIFE function to get palindrome strings from array of strings
var palindromeStringsResult = (function(arrStrings){
    var palindromeStrings = [];
    for(var i = 0; i<arrStrings.length;i++){
        if(isPalindrome[arrStrings[i]]){
            palindromeStrings.push(arrStrings[i]);
        }
    }
    return palindromeStrings;
})(arrStrings);

function revString(str){
    return str.split("").reverse().join("");
}

var isPalindrome = function (str){
    if(str.toString() == revString(str.toString()))
        return true;
    else    
        return false;
}

var contatinterDiv = document.createElement("div");

createParagrahElement(contatinterDiv,"<b><u>With Anonymous Functions : </u></b><br>","",[]);
createParagrahElement(contatinterDiv, "<b>Array Input : </b><br>","",nums);
createParagrahElement(contatinterDiv, "<b>Odd numbers are as follows :</b><br>","",oddFilter(nums));
createParagrahElement(contatinterDiv, "<b>Input String To Convert title case as follows : </b><br>","convert string to title case with javascript",[]);
createParagrahElement(contatinterDiv, "<b>Output String : </b><br>",titleCase("convert string to title case with javascript"),[]);
createParagrahElement(contatinterDiv, "<b>Sum of Array : </b><br>"+ nums.toString() + " : ", sum(nums), []);

createParagrahElement(contatinterDiv,"<b><u>With IIFE Functions : </u></b><br>","",[]);
createParagrahElement(contatinterDiv, "<b>Array Input : </b><br>","",nums);
createParagrahElement(contatinterDiv, "<b>Odd numbers are as follows :</b><br>","",oddNumbers);
createParagrahElement(contatinterDiv, "<b>Input String To Convert title case as follows : </b><br>","convert string to title case with javascript",[]);
createParagrahElement(contatinterDiv, "<b>Output String : </b><br>",responseTitleCase,[]);
createParagrahElement(contatinterDiv, "<b>Sum of Array : </b><br>"+ nums.toString() + " : ", sumResult, []);

document.body.append(contatinterDiv);

