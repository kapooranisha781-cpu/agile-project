import Column from "./Column";

function Board({ tickets }) {
  return (
    <div className="board">
      <Column title="To Do" status="todo" tickets={tickets} />
      <Column title="In Progress" status="progress" tickets={tickets} />
      <Column title="Done" status="done" tickets={tickets} />
    </div>
  );
}

export default Board;