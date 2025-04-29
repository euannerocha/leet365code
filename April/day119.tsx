type Ticket = {
  id: number;
  status: "open" | "in progress" | "closed";
};

type Agent = {
  name: string;
  tickets: Ticket[];
};

const supportAgents: Agent[] = [
  {
    name: "Alice",
    tickets: [
      { id: 1, status: "closed" },
      { id: 2, status: "in progress" },
      { id: 3, status: "closed" },
    ],
  },
  {
    name: "Bob",
    tickets: [
      { id: 4, status: "open" },
      { id: 5, status: "in progress" },
    ],
  },
  {
    name: "Charlie",
    tickets: [
      { id: 6, status: "closed" },
      { id: 7, status: "closed" },
      { id: 8, status: "closed" },
      { id: 9, status: "in progress" },
    ],
  },
];

for (const agent of supportAgents) {
  let open = 0;
  let inProgress = 0;
  let closed = 0;

  for (const ticket of agent.tickets) {
    if (ticket.status === "open") open++;
    else if (ticket.status === "in progress") inProgress++;
    else if (ticket.status === "closed") closed++;
  }

  const total = agent.tickets.length;
  const performance = ((closed / total) * 100).toFixed(1);

  console.log(`\nAgent: ${agent.name}`);
  console.log(`Tickets: ${total} (Open: ${open}, In Progress: ${inProgress}, Closed: ${closed})`);
  console.log(`Performance: ${performance}% closed`);
}