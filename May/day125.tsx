type Employee = {
  name: string;
  salary: number;
};

type Departments = {
  [departmentName: string]: Employee[];
};

const company: Departments = {
  Engineering: [
    { name: "Alice", salary: 8000 },
    { name: "Bob", salary: 7500 },
  ],
  HR: [
    { name: "Carol", salary: 5000 },
    { name: "Dan", salary: 5200 },
  ],
  Marketing: [
    { name: "Eve", salary: 6000 },
    { name: "Frank", salary: 6300 },
    { name: "Grace", salary: 6100 },
  ],
};

for (const dept in company) {
  const employees = company[dept];
  let totalSalary = 0;

  for (const employee of employees) {
    totalSalary += employee.salary;
  }

  const averageSalary = totalSalary / employees.length;

  console.log(`\nDepartment: ${dept}`);
  console.log(`Employees: ${employees.length}`);
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
}