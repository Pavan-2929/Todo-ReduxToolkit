import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/TodoSlice";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const updateTodoHandler = (id) => {
    const newText = prompt("Enter your updated Task");
    if (newText !== null && newText.trim() !== "") {
      dispatch(updateTodo({ id, newText }));
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        All Todos List
      </h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between mb-4 p-4 bg-white rounded-md shadow-md"
          >
            <span className="text-xl text-gray-800 w-[70%] break-words">{todo.text}</span>
            <div className="flex gap-4">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
              <button
                onClick={() => updateTodoHandler(todo.id)}
                className="text-blue-500 hover:text-blue-700"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
