const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  return tutorials.map(tutorial =>tutorial.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
}


//for (let i = 0; i < tutorials.length; i++) {

//   const zeroTut = 'what does the this keyword mean?'
//   zeroTut.toString();

//   function titleCaseZero(zeroTut) {
//     return zeroTut.toLowerCase().split(' ').map(function (word) {
 //      return (word.charAt(0).toUpperCase() + word.slice(1));
    

//   }

//   const oneTut = 'What is the Constructor OO pattern?'
//   oneTut.toString();
  
//   function titleCaseOne(oneTut) {
//     return oneTut.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//   }

//   const twoTut = 'implementing Blockchain Web API'
//   twoTut.toString();
  
//   function titleCaseTwo(twoTut) {
//     return twoTut.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//   }

//   const threeTut = 'The Test Driven Development Workflow'
//   threeTut.toString();
  
//   function titleCaseThree(threeTut) {
//     return threeTut.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//   }

//   const fourTut = 'What is NaN and how Can we Check for it'
//   fourTut.toString();

//   function titleCaseFour(fourTut) {
//     return fourTut.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//   }
//   const fiveTut = 'What is the difference between stopPropagation and preventDefault?'
//   fiveTut.toString();
  
//   function titleCaseFive(fiveTut) {
//     return fiveTut.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//   }

//   const sixTut = 'Immutable State and Pure Functions'
//   sixTut.toString();
  
//   function titleCaseSix(sixTut) {
//     return sixTut.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//   }

//   const sevenTut = 'what is the difference between == and ===?'
//   sevenTut.toString();
  
//   function titleCaseSeven(sevenTut) {
//     return sevenTut.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//   }

//   const eightTut = 'what is the difference between event capturing and bubbling?'
//   eightTut.toString();
  
//   function titleCaseEight(eightTut) {
//     return eightTut.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//   }

//   const nineTut = 'what is JSONP?'
//   nineTut.toString();
  
//   function titleCaseNine(nineTut) {
//     return nineTut.toLowerCase().split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');

//   }

  
// console.log(titleCaseZero(zeroTut));
// console.log(titleCaseOne(oneTut));
// console.log(titleCaseTwo(twoTut));
// console.log(titleCaseThree(threeTut));  
// console.log(titleCaseFour(fourTut));
// console.log(titleCaseFive(fiveTut));
// console.log(titleCaseSix(sixTut));
// console.log(titleCaseSeven(sevenTut));
// console.log(titleCaseEight(eightTut));  
// console.log(titleCaseNine(nineTut));
// }

