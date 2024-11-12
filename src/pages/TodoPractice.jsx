import { useState } from "react";
const todos = [
  { id:1, message: "Do the new job interview at 4", checked: false },
  { id:2, message: "Decompress and have some alone time", checked: false },
  { id:3, message: "Watch you confort movie", checked: false },
  { id:4, message: "Go on a 3KM walk", checked: true }
];
const TodoPractice = () => {
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
    <div className="w-1/2 mx-auto md:w-1/3">
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          id="todoitem"
          name="todoitem"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a todo..."
          className="px-4 py-2 text-gray-600 border-2 border-gray-200 rounded-lg outline-none placeholder:text-gray-400 placeholder:text-sm hover:border-blue-700"
        />
        <button className="px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Add</button>
      </form>
      <h3 className="text-xl font-bold">My To-Do List</h3>
      <ul>
        {Array.isArray(newtodos) &&
          newtodos.map((item) => {
            return (
              <li key={item.id} className="text-lg">
                <input
                  id="checked"
                  name="checked"
                  type="checkbox"
                  onChange={(e) => item.checked === e.target.checked}
                  className="me-4 w-[14px] h-[14px]"
                />
                {item.message}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
export default TodoPractice; // Ensure default export