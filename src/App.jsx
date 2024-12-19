import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoCard from './components/TodoCard';

const App = () => {
  // Load todos from localStorage or initialize as an empty array
  const [allTodo, setAllTodo] = useState(() => {
    const storedTodos = localStorage.getItem("Todo");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(allTodo));
  }, [allTodo]);

  return (
    <div className="min-h-screen bg-gray-400 p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 shadow-md rounded-lg p-6">
        <h1 className="text-3xl text-white font-bold mb-4 text-center">Todo App</h1>
        <AddTodo allTodo={allTodo} setAllTodo={setAllTodo} />
      </div>
      <div className="flex flex-col gap-2 mt-10">
        {allTodo.length > 0 ? (
          allTodo.map((todo, index) => (
            <TodoCard
              key={index}
              todo={todo}
              index={index}
              allTodo={allTodo}
              setAllTodo={setAllTodo}
            />
          ))
        ) : (
          <p className="text-center text-gray-800 font-bold text-xl">
            No todos yet. Add your first task!
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
