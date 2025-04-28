type Student = {
  name: string;
  grades: number[];
};

const students: Student[] = [
  { name: "Alice", grades: [85, 90, 78] },
  { name: "Bob", grades: [60, 58, 70] },
  { name: "Charlie", grades: [95, 92, 88] },
];

for (const student of students) {
  let total = 0;

  for (const grade of student.grades) {
    total += grade;
  }

  const average = total / student.grades.length;
  const status = average >= 70 ? "Approved" : "Failed";

  console.log(`\nStudent: ${student.name}`);
  console.log(`Grades: ${student.grades.join(", ")}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Status: ${status}`);
}