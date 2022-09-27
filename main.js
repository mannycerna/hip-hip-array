//  This assignment will give you some practice with creating arrays and using their methods. */


// console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.

const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  
  // Challenge 1 Code


let i = 0;

while(i < students.length ) {
    console.log(students[i]);
    i++;
}


  console.log("\n");
  console.log("Challenge 2");



  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code
  let revGrades = grades.reverse();
  let i = 0;

  while(i < revGrades.length ) {
      console.log(revGrades[i]);
      i++;
  } 


  console.log("\n");
  console.log("Challenge 3");
 
 

  Challenge 3
  Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

  
  Challenge 3 Code


  let p = 0;

  while (p < positiveNumbers.length) {
    if (positiveNumbers[p] % 2 === 0) {
      console.log(positiveNumbers[p]);
    }
    p++;
  }
2nd Solution:  using forEach method
positiveNumbers.forEach(function(number){
  if (number % 2 === 0)  {console.log(number); }
  })





  console.log("\n");
  console.log("Challenge 4");

  
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code
  let p = 0;
  
  while (p < mixedSignNumbers.length) {
    if (mixedSignNumbers[p] % 2 === 0) {
      console.log(mixedSignNumbers[p]);
    }
    p++;
  // }
  Second solution
  mixedSignNumbers.forEach(function(number){
    if (number < 0 && number % 2 === 0 || number > 0 && number % 2 === 0)  {console.log(number); }
     
    });

  

  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
    
  symmetricalCapitals.shift("A")
  symmetricalCapitals.shift("H")
  symmetricalCapitals.pop("Y")
  symmetricalCapitals.forEach(function(x) {
    console.log(x);
  })
  // console.log(symmetricalCapitals)



  console.log("\n");
  console.log("Challenge 6");

  

  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  
  fibonacciNumbers.unshift(0)
  fibonacciNumbers.push(21,34)
  fibonacciNumbers.forEach(function(x) {
    console.log(x);
  })
  // console.log(fibonacciNumbers)


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code

let myArray = [5,10,15,20,25];

let i = 0;
while(i < myArray.length) {
console.log(myArray[i]);
    i++;
}
// myArray.forEach(function(x) {
//   console.log(x);
// })





  console.log("\n");
  console.log("Challenge 8");
  

  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  // Challenge 8 Code



  emptyArray.push(1,2,3,4,5);
  emptyArray.unshift("Hello");

  let i = 0;

  while(i < emptyArray.length ) {
    console.log(emptyArray[i]);
    i++;
    
    console.log(emptyArray);
}

  
  console.log("\n");
  console.log("Challenge 9");


  Challenge 9
  Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  Challenge 9 Code
  
  
 index = 3;

 while(index < 11) {
  console.log(students[index])
  index++;
 }

  let i = 0;
  students.splice(0,3);
  students.splice(-2)
  while(i < students.length ) {
      console.log(students[i]);
      i++;
  }
  





  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code

  let copyStudents = []
  let i = 3;
   
  while(i < 11) {
    copyStudents.push(students[i]);
    i++;
    };
      copyStudents.forEach(function(i) {
      console.log(i);
 })
 console.log(copyStudents);

  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  Challenge 11 Code
  
  let copyStudents = students.slice(3,10);
  let i = 0;

  while(i < copyStudents.length ) {
      console.log(copyStudents[i]);
      i++;
  }
  console.log(students);


  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code

dinoSplice = dinosaurs.splice(4,3);

index = 0;
while (index < (dinosaurs.length)) {
  console.log(dinosaurs[index]);
  index++;
}

Alternate solution:
  dinosaurs.splice(4,3)
  dinosaurs.forEach(function(x) {
    console.log(x);
  });

  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code

console.log(dinosaurs.join(" * "));

  
  console.log("\n");
  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code

  console.log(dinosaurs.reverse());
  console.log(dinosaurs);


  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code

  let array1 = ["san antonio", "austin", "dallas", "houston"];
  let array2 = ["alamo", "capitol", "cowboys", "astros"];
  let array3 = array1.concat(array2);
  // console.log(array3);
  array3.forEach(function(x) {
    console.log(x);
  });
  console.log(array1, array2);