// chap 6 to 9 


// Q1
document.write("<h2> Question1 </h2>");
document.write("<br>");

let num = 10;
// console.log(num);
document.write("Result: ");
document.write("<br>");
document.write("The value of a is:" , num);
document.write("<br>");

++num;
// console.log(num);
document.write("The value of ++a is:" , num);
document.write("<br>");
document.write("The value of a is:" , num);
document.write("<br>");
document.write("The value of a++ is:" , num);
document.write("<br>");

num++;
// console.log(num);
document.write("The value of a is:" , num);
document.write("<br>");

--num;
// console.log(num);
document.write("The value of --a is:" , num);
document.write("<br>");
document.write("The value of a is:" , num);
document.write("<br>");
document.write("The value of a-- is:" , num);
document.write("<br>");

num--;
// console.log(num);
document.write("The value of a is:" , num);
document.write("<br>");

// Q2
document.write("<h2> Question2 </h2>");
document.write("<br>");

var a = 2;
document.write("a is:" , a);
document.write("<br>");

var b = 1;
document.write("b is:" , b);
document.write("<br>");

var Result = --a - --b + ++b + b--;
document.write("The Result is:" , Result);
document.write("<br>");

// console.log(Result);
// Result = 1 + ++b;
// console.log(Result);
// Result = 2 + b--;
// console.log(Result);


// Q3
document.write("<h2> Question3 </h2>");
document.write("<br>");

var userName = prompt("Enter your Name:");
document.write("ASSALAM'MU'ALAEKUM", " ++ " , userName);
document.write("<br>");

// Q4
document.write("<h2> Question4 </h2>");
document.write("<br>");

var question = "Enter Name ?";
var defaultAnswer = 5;
var userName = +prompt(question, defaultAnswer);
let i=1;
if(userName === defaultAnswer){
   for(let i=1; i <=10; i++){
    document.write(userName, "x" , i , " = " , i*userName);
    document.write("<br>");
        
   }
}
else{
    for(let i=1; i <=10; i++) {
        document.write(userName, "x" , i , " = " , i*userName);
        document.write("<br>");
        
}
}
// console.log(userName);

// Q5
document.write("<h2> Question5 </h2>");
document.write("<br>");

let subject1= prompt("Enter your first subject name");
console.log("first subject name" , subject1);
document.write("first subject name" , subject1);
document.write("<br>");

let subject2= prompt("Enter your second subject name");
console.log("second subject name" , subject2);
document.write("second subject name" , subject2);
document.write("<br>");

let subject3= prompt("Enter your third subject name");
console.log("third subject name" , subject3);
document.write("third subject name" , subject3);
document.write("<br>");

let totalMarks = 100 

let obtainMarksSubject1 = +prompt("Enter the {subject1} marks out of 100:");
console.log("${subject1} obtained marks" , obtainMarksSubject1);
document.write("${subject1} obtained marks" , obtainMarksSubject1);
document.write("<br>");

let obtainMarksSubject2 = +prompt("Enter the {subject2} marks out of 100:");
console.log("${subject2} obtained marks" , obtainMarksSubject2);
document.write("${subject2} obtained marks" , obtainMarksSubject2);
document.write("<br>");

let obtainMarksSubject3 = +prompt("Enter the {subject3} marks out of 100:");
console.log("${subject3} obtained marks" , obtainMarksSubject3);
document.write("${subject3} obtained marks" , obtainMarksSubject3);
document.write("<br>");

let totalMarksAllSubjects = totalMarks + totalMarks + totalMarks;
console.log("Total obtained marks of all subject:" , totalMarksAllSubjects);
document.write("Total obtained marks of all subject:" , totalMarksAllSubjects);
document.write("<br>");

let totalObtainedMarksAllSubjects = obtainMarksSubject1 + obtainMarksSubject2 + obtainMarksSubject3;
console.log("Total obtained marks of all subject:" , totalObtainedMarksAllSubjects);
document.write("Total obtained marks of all subject:" , totalObtainedMarksAllSubjects);
document.write("<br>");

let percentageSubject1 = (obtainMarksSubject1 * 100)/ 100; 
console.log("${subject1} percentage:" , percentageSubject1, "%");
document.write("${subject1} percentage:" , percentageSubject1, "%");
document.write("<br>");

let percentageSubject2 = (obtainMarksSubject2 * 100)/ 100; 
console.log("${subject2} percentage:" , percentageSubject2, "%");
document.write("${subject2} percentage:" , percentageSubject2, "%");
document.write("<br>");

let percentageSubject3 = (obtainMarksSubject3 * 100)/ 100; 
console.log("${subject3} percentage:" , percentageSubject3, "%");
document.write("${subject3} percentage:" , percentageSubject3, "%");
document.write("<br>");

let totalPercentage = (percentageSubject1 + percentageSubject2 + percentageSubject3)/3;
console.log("Total percentage:" , totalPercentage, "%");
document.write("Total percentage:" , totalPercentage, "%");
document.write("<br>");

