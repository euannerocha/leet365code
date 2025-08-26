// SOLUTION

const students = [
  { name: "Anna", grade: 9 },
  { name: "Peter", grade: 6 },
  { name: "Mary", grade: 8 },
  { name: "John", grade: 7 },
  { name: "Carla", grade: 5 },
  { name: "Lucas", grade: 10 },
];

const approved = students.filter(student => student.grade >= 7);
const failed = students.filter(student => student.grade < 7);

const approvedSorted = approved.sort((a, b) => b.grade - a.grade);
const failedSorted = failed.sort((a, b) => a.grade - b.grade);

const ranking = approvedSorted.map((student, index) => ({
  position: index + 1,
  name: student.name,
}));

const bestStudent = students.reduce((best, current) =>
  current.grade > best.grade ? current : best
);
const worstStudent = students.reduce((worst, current) =>
  current.grade < worst.grade ? current : worst
);

const overallAverage =
  students.reduce((acc, student) => acc + student.grade, 0) / students.length;

const approvedAverage =
  approved.reduce((acc, student) => acc + student.grade, 0) /
  (approved.length || 1);

const failedAverage =
  failed.reduce((acc, student) => acc + student.grade, 0) /
  (failed.length || 1);

const gradesSorted = [...students.map(s => s.grade)].sort((a, b) => a - b);
const mid = Math.floor(gradesSorted.length / 2);

let median;
if (gradesSorted.length % 2 === 0) {
  median = (gradesSorted[mid - 1] + gradesSorted[mid]) / 2;
} else {
  median = gradesSorted[mid];
}

{
  approvedSorted,
  failedSorted,
  ranking,
  bestStudent,
  worstStudent,
  overallAverage,
  approvedAverage,
  failedAverage,
  median
}

// EXERCISE
*/
You are given an array of students with their names and grades.

Your tasks are:

1. Filter students into two groups:
   - Approved: grade >= 7
   - Failed: grade < 7

2. Sort both groups:
   - Approved → from highest grade to lowest
   - Failed → from lowest grade to highest

3. Transform the approved students into a ranking:
   - Create an array of objects with only { position, name }
   - Position starts at 1 for the highest grade

4. Find the best and the worst student in the whole class:
   - Best student = the one with the highest grade
   - Worst student = the one with the lowest grade

5. Calculate averages:
   - Overall class average (all students)
   - Average of approved students
   - Average of failed students

6. Bonus challenge:
   - Calculate the median grade of the whole class
   - To do this:
     → Sort all grades
     → If the number of grades is odd → take the middle value
     → If the number of grades is even → average the two middle values
*/