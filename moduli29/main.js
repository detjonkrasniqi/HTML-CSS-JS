var propgrammingLanguages = ["Javascript","PHP","Python"];

console.log(propgrammingLanguages);

var numrat = [1,2,3,4,5,6,7,8,9,10];

console.log(numrat);

console.log(propgrammingLanguages[1]);

// array function 
    
// push add an element at the end of the list

propgrammingLanguages.push("Java");

numrat.push(11);

document.write(propgrammingLanguages)

document.write(numrat)

// pop delete the last element

numrat.pop();

console.log(numrat);

// unshift - add an element at the begining of the list

propgrammingLanguages.unshift("C#");

console.log(propgrammingLanguages);

// shift - delete the first element of the list

propgrammingLanguages.shift();
console.log(propgrammingLanguages);

//splice - cilen pozit, sa elemente, cilin me e shtu 

propgrammingLanguages.splice(1,2,"Ruby");

console.log(propgrammingLanguages);

//array destructuring

var students = ['Drini','florim','lindrit','patris','ernes'];

var [s1, s2, s3, s4, s5] = students; 

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);

//array destructuring

var places = ['Obiliq','Prishtin','Tirana','Peja','Ferizaj','Prizren','Ferizaj','Gjilan','Deçan','Gjakovë','Mitrovicë','Vushtrri','Podujevë','Shtime','Drenas','Kamenicë','Novoberda','Malishevë','Kacanik','Mamusha'];

var  [s1, s2, s3, s4, s5 ,s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20] = places ;

console.log(s1);
console.log(s2);
console.log(s3);    
console.log(s4);
console.log(s5);
console.log(s6);
console.log(s7);
console.log(s8);
console.log(s9);
console.log(s10);
console.log(s11);
console.log(s12);
console.log(s13);    
console.log(s14);
console.log(s15);
console.log(s16);
console.log(s17);
console.log(s18);
console.log(s19);
console.log(s20);

