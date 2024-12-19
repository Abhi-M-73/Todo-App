import React, { useState } from 'react';

const AddTodo = ({ allTodo, setAllTodo }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      // Add new todo to the list
      setAllTodo((prevTodos) => [
        ...prevTodos,
        { text: todo, completed: false },
      ]);
      setTodo(""); // Clear the input
    }
  };

  return (
    <div className="flex items-center gap-0 mb-4 border rounded-lg">
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        autoFocus
        type="text"
        placeholder="Add a new todo..."
        className="flex-1 text-white bg-gray-600 placeholder:text-gray-300 rounded-l-lg px-4 py-2 outline-none"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-700 text-white md:w-24 px-4 py-2 rounded-r-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
