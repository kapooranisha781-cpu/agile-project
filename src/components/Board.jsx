import Column from "./Column";

function Board({ tickets, onSelect }) {
  return (
    <div className="board">
      <Column
        title="📋 To Do"
        status="todo"
        tickets={tickets}
        onSelect={onSelect}
      />

      <Column
        title="🚀 In Progress"
        status="progress"
        tickets={tickets}
        onSelect={onSelect}
      />

      <Column
        title="✅ Done"
        status="done"
        tickets={tickets}
        onSelect={onSelect}
      />
    </div>
  );
}

export default Board;