type Urgencia = "baixa" | "média" | "alta";

type Evento = {
  titulo: string;
  data: string; // formato ISO: "2025-04-15"
  urgencia: Urgencia;
};

const eventos: Evento[] = [
  { titulo: "Reunião com João", data: "2025-04-15", urgencia: "média" },
  { titulo: "Entrega do relatório", data: "2025-04-10", urgencia: "alta" },
  { titulo: "Revisão do projeto", data: "2025-04-12", urgencia: "alta" },
  { titulo: "Atualização do sistema", data: "2025-04-15", urgencia: "baixa" },
  { titulo: "Árvore de decisões", data: "2025-04-15", urgencia: "baixa" }
];


const prioridade: Record<Urgencia, number> = {
  alta: 3,
  média: 2,
  baixa: 1
};

const normalizar = (texto: string) =>
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const eventosOrdenados = eventos.sort((a, b) => {
  const diffUrgencia = prioridade[b.urgencia] - prioridade[a.urgencia];
  if (diffUrgencia !== 0) return diffUrgencia;

  const dataA = new Date(a.data).getTime();
  const dataB = new Date(b.data).getTime();
  if (dataA !== dataB) return dataA - dataB;

  return normalizar(a.titulo).localeCompare(normalizar(b.titulo));
});

console.log(eventosOrdenados);