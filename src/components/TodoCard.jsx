import React, { useState } from 'react';

const TodoCard = ({ todo, index, allTodo, setAllTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.text);

  const handleEditTodo = () => {
    if (isEditing && updatedTodo.trim() !== "") {
      const updatedTodos = allTodo.map((item, i) =>
        i === index ? { ...item, text: updatedTodo } : item
      );
      setAllTodo(updatedTodos);
    }
    setIsEditing(!isEditing);
  };

  const handleDeleteTodo = () => {
    const filteredTodos = allTodo.filter((_, i) => i !== index);
    setAllTodo(filteredTodos);
  };

  const handleToggleComplete = () => {
    const updatedTodos = allTodo.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setAllTodo(updatedTodos);
  };

  return (
    <div
      className={`md:w-[50%] w-[90%] mx-auto bg-gray-900 border border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start ${
        todo.completed ? "bg-gray-700" : ""
      }`}
    >
      <div className="flex items-center gap-2 w-full sm:w-[70%] mb-2 sm:mb-0">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="w-5 h-5 rounded-lg"
        />
        {isEditing ? (
          <input
            autoFocus
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-gray-100 font-medium"
          />
        ) : (
          <p
            className={` text-gray-100 font-medium ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
             // Prevent text from overflowing
          >
            {todo.text}
          </p>
        )}
      </div>
      <div className="flex gap-2 w-full sm:w-auto justify-end mt-2 sm:mt-0">
        <button
          onClick={handleEditTodo}
          className="w-full sm:w-20 bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-700"
        >
          {isEditing ? "Update" : "Edit"}
        </button>
        <button
          onClick={handleDeleteTodo}
          className="w-full sm:w-20 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
