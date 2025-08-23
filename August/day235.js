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

const sorted = approved.sort((a, b) => b.grade - a.grade);

const ranking = sorted.map((student, index) => ({
  position: index + 1,
  name: student.name,
}));

const average = students.reduce((acc, student) => acc + student.grade, 0) / students.length;

// EXERCISE

// You are given an array of students with their names and grades.

// Your tasks are:

// 1. Filter only the students with grade ≥ 7.

// 2. Sort the approved students by grade (highest to lowest).

// 3. Transform the array into a new one that contains only the student’s name and their ranking position.

// 4. Calculate the overall class average using reduce.


