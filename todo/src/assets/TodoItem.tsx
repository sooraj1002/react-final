export default function TodoItem({
  completed,
  id,
  title,
  keys,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li key={keys}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
