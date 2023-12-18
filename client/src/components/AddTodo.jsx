import React, { useState } from "react";
import { addTodo } from "../features/TodoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-md shadow-md mb-5">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Enter your Task
      </h1>
      <form
        onSubmit={addTodoHandler}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          placeholder="Enter your Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
