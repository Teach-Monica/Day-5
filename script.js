Day -05

Question:01

a).Print odd numbers in an array?

Anonymous  :

//taking an array of data 
let array=[1,2,3,4,5,6,7,8,9,10];
//taking an empty array
let oddNum=[];
let getData=function(array){
    //iterating through the array
    for(var i = 0 ; i< array.length ; i++){
        //pushing elements insode oddNum array if the condition is true
          if(array[i]%2!=0){
             oddNum.push(array[i]);
          } 
     }
     console.log(oddNum);
  }
  getData(array);
  
//output:
//[ 1, 3, 5, 7, 9 ]

IIFE :  

//taking an empty array
let oddNum=[];
  (function(array){
  //iterating through the array
    for(var i = 0 ; i< array.length ; i++){
	  //pushing elements insode oddNum array if the condition is true
               if(array[i]%2!=0){
                  oddNum.push(array[i])
               } 
          }
          console.log(oddNum)
    })([1,2,3,4,5,6,7,8,9,10])


//output:
//[ 1, 3, 5, 7, 9 ]

ARROW :

//taking an array of data 
let array=[1,2,3,4,5,6,7,8,9,10];
//taking an empty array
let oddNum=[];
let getData=(array)=>{
    //iterating through the array
    for(var i = 0 ; i< array.length ; i++){
        //pushing elements insode oddNum array if the condition is true
          if(array[i]%2!=0){
             oddNum.push(array[i]);
          } 
     }
     console.log(oddNum);
  }
  getData(array);
  
//output:
//[ 1, 3, 5, 7, 9 ]  

b).Convert all the strings to title caps in a string array

Anonymous  :

let titleCase=function(string) {
    //making all the items in the sentance lowercase
    var sentence = string.toLowerCase().split(" ");
	//iterating through the string
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 console.log(sentence.join(" "));
 return sentence;
 }
 titleCase("tutorix is one of best e-platforms");
 
//output:
//Tutorix Is One Of Best E-platforms

IIFE : 

(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str.join(' '));
  })("tutorix is one of best e-platforms");
  
  //output:
//Tutorix Is One Of Best E-platforms

ARROW :

let titleCase=(string)=>{
    //making all the items in the sentance lowercase
    var sentence = string.toLowerCase().split(" ");
	//iterating through the string
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 console.log(sentence.join(" "));
 return sentence;
 }
 titleCase("tutorix is one of best e-platforms");
 
//output:
//Tutorix Is One Of Best E-platforms

c).Sum of all numbers in an array

Anonymous  :

let array=[1,2,3,4,5,6,7,8,9,10];
let getSum=function(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}
console.log(getSum(array));

//output:
//55

IIFE : 

(function(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    console.log(sum);
})([1,2,3,4,5,6,7,8,9,10])

//output:
//55

ARROW :

let array=[1,2,3,4,5,6,7,8,9,10];
let getSum=(array)=>{
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}
console.log(getSum(array));

//output:
//55

d).Return all the prime numbers in an array

Anonymous  :

let getPrime=function(n) {
             
    var n, i, flag = true;
    // Getting the value form text
    //n = 10;
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
        // Check and display message
    if (flag == true)
        console.log(n + " is prime");
    else
        console.log(n + " is not prime");
}
getPrime(10);

//output:
10 is not prime

IIFE : 

(function(n) {
    var n, i, flag = true;
    // Getting the value form text
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
        // Check and display alert message
    if (flag == true)
        console.log(n + " is prime");
    else
        console.log(n + " is not prime");
})(3);

//output:
//10 is not prime

ARROW :

let getPrime=(n)=>{
             
    var n, i, flag = true;
    // Getting the value form text
    //n = 10;
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
        // Check and display message
    if (flag == true)
        console.log(n + " is prime");
    else
        console.log(n + " is not prime");
}
getPrime(10);

//output:
//10 is not prime

e).Return all the palindromes in an array

Anonymous  :

// Function to check if given string
// is Palindrome or not
let isPalindrome=function(s)
{
    // Copy string s char into string a
    let a = s;
    s = s.split('').reverse().join('');
 
    // Check if two string are equal or not
    return s == a;
}
 
// Function to return all Palindrome string
function PalindromicStrings(arr,N)
{
    let ans = [];
 
    // Loop to find palindrome string
    for (let i = 0; i < N; i++) {
 
        // Checking if given string is palindrome or not
        if (isPalindrome(arr[i])) {
 
            // Update answer variable
            ans.push(arr[i]);
        }
    }
    return ans;
}
// Driver Code
let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
// Print required answer
let s = PalindromicStrings(arr, N);
if(s.length == 0)
    console.log("-1");
for(let st of s)
    console.log(st);
	
//output:
//ada
//racecar

IIFE : 

let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
// Print required answer
let s =(function(arr,N){
    let ans = [];
 
    // Loop to find palindrome string
    for (let i = 0; i < N; i++) {
        // Checking if given string is palindrome or not
        if ((function(s){
             // Copy string s char into string a
    let a = s;
    s = s.toString().split('').reverse().join('');
    // Check if two string are equal or not
    return s == a;
        })(arr[i])) {
 
            // Update answer variable
            ans.push(arr[i]);
        }
    }
    return ans;
})(arr,N);

if(s.length == 0)
    console.log("-1");
for(let st of s)
    console.log(st);

//output:
ada
racecar

ARROW :

// Function to check if given string
// is Palindrome or not
let isPalindrome=(s)=>
{
    // Copy string s char into string a
    let a = s;
    s = s.split('').reverse().join('');
 
    // Check if two string are equal or not
    return s == a;
}
 
// Function to return all Palindrome string
function PalindromicStrings(arr,N)
{
    let ans = [];
 
    // Loop to find palindrome string
    for (let i = 0; i < N; i++) {
 
        // Checking if given string is palindrome or not
        if (isPalindrome(arr[i])) {
 
            // Update answer variable
            ans.push(arr[i]);
        }
    }
    return ans;
}
// Driver Code
let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
// Print required answer
let s = PalindromicStrings(arr, N);
if(s.length == 0)
    console.log("-1");
for(let st of s)
    console.log(st);
	
//output:
//ada
//racecar

f).Return median of two sorted arrays of the same size.

IIFE :

let array1=[1,2,3,4,5,6];
let array2=[4,5,6,7,8,9];
(function(arr,arr1){
    let median;
    let median1;
    if(arr.length % 2 !=0){
let middle = (arr.length-1)/2
	median = arr[middle]
    median1=arr1[middle]
}
else{
let middle =(arr.length / 2);
let middle1= middle -1 ;
 median = (arr[middle] + arr[middle1])/2;
 median1=(arr1[middle] + arr1[middle1])/2;
}
console.log(median +" "+ median1);
})(array1,array2)

Anonymous  :


let array1=[1,2,3,4,5,6];
let array2=[6,7,8,9,10,11];

let getMedian = function(arr){
    let median;
    if(arr.length % 2 !=0){
let middle = (arr.length-1)/2
	median = arr[middle]
}
else{
let middle =(arr.length / 2);
let middle1= middle -1 ;
 median = (arr[middle]+ arr[middle1])/2
}
return median;
}
console.log(getMedian(array1),getMedian(array2))

//output:

//3.5 6.5

Anonymous  :

let array1=[1,2,3,4,5,6];
let array2=[6,7,8,9,10,11];

let getMedian = function(arr){
    let median;
    if(arr.length % 2 !=0){
let middle = (arr.length-1)/2
	median = arr[middle]
}
else{
let middle =(arr.length / 2);
let middle1= middle -1 ;
 median = (arr[middle]+ arr[middle1])/2
}
return median;
}
console.log(getMedian(array1),getMedian(array2))

//output:

//3.5 6.5

g).Remove duplicates from an array

Anonymous  :

array=[1,1,2,3,4]
let findMedian=function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }
  findMedian(array)
  
//OUTPUT:
//[ 1, 2, 3, 4 ]  
  
IIFE : 
 
(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  })([1,1,2,3,4]) 
  
//OUTPUT:
//[ 1, 2, 3, 4 ]  

H). Rotate an array by k times  

Anonymous  :

let Rotate_and_Print=function(arr,d,n)
 {
     //Initializing array temp with size n
     var temp=new Array(n);
      
    let k = 0;
 
    // Storing the n - d elements of
    // array arr[] to the front of temp[]
    for (let i = d; i < n; i++) {
        temp[k] = arr[i];
        k++;
    }
 
    // Storing the first d elements of array arr[]
    //  into temp
    for (let i = 0; i < d; i++) {
        temp[k] = arr[i];
        k++;
    }
    //Printing the temp array which stores the result
    for (let i = 0; i < n; i++) {
        console.log(temp[i]+" ");
    }
 }
 
let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
let d = 2; //number of times rotating the array
Rotate_and_Print(arr, d, n);

//output:
//3 4 5 6 7 1 2 

IIFE :

let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
let d = 2; 

(function(arr,d,n)
 {
     //Initializing array temp with size n
     var temp=new Array(n);
      
    let k = 0;
 
    // Storing the n - d elements of
    // array arr[] to the front of temp[]
    for (let i = d; i < n; i++) {
        temp[k] = arr[i];
        k++;
    }
 
    // Storing the first d elements of array arr[]
    //  into temp
    for (let i = 0; i < d; i++) {
        temp[k] = arr[i];
        k++;
    }
    //Printing the temp array which stores the result
    for (let i = 0; i < n; i++) {
        console.log(temp[i]+" ");
    }
 })(arr, d, n)
 
 //output:
//3 4 5 6 7 1 2 