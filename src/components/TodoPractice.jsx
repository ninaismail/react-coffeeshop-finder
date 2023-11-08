import { useState } from "react";
const todos = [
  { id:1, message: "Do the new job interview at 4", checked: false },
  { id:2, message: "Decompress and have some alone time", checked: false },
  { id:3, message: "Watch you confort movie", checked: false },
  { id:4, message: "Go on a 3KM walk", checked: true }
];
export default function TodoPractice() {
  const [todo, setTodo] = useState("");
  const [newtodos, setNewTodos] = useState(todos);

  const onSubmit = async (e) => {
    e.preventDefault();
    // rest of the submit logic
    const data = {
      message: todo,
      checked: false
    };
    setNewTodos([...newtodos, data]);
    console.log(newtodos);
  };

  return (
    <div className="md:w-1/3 w-1/2 mx-auto">
      <form onSubmit={onSubmit}>
        <input
          id="todoitem"
          name="todoitem"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a todo..."
          
        />
        <button>Add</button>
      </form>
      <h3>My To-Do List</h3>
      <ul>
        {Array.isArray(newtodos) &&
          newtodos.map((item) => {
            return (
              <li key={item.id}>
                {item.message}
                <input
                  id="checked"
                  name="checked"
                  type="checkbox"
                  onChange={(e) => item.checked === e.target.checked}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
