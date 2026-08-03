import Column from "./Column";
import "../styles/Board.css";

const columns = [
  {
    title: "📋 To Do",
    status: "todo",
  },
  {
    title: "🚀 In Progress",
    status: "progress",
  },
  {
    title: "✅ Done",
    status: "done",
  },
];

function Board({ tickets = [], onSelect }) {
  return (
    <section className="board">
      {columns.map((column) => (
        <Column
          key={column.status}
          title={column.title}
          status={column.status}
          tickets={tickets}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
}

export default Board;