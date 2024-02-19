"use client";

import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const addTodo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!task.trim()) return;
    const newTodo = {
      id: Date.now(), // random ID 값 생성하는 함수 구현필요
      text: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const handleTodoTextClick = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const handleEditSubmit = (e: React.KeyboardEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) => (todo.id === editingId ? { ...todo, text: editingText } : todo));
    setTodos(updatedTodos);
    setEditingId(null);
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const todoItems = todos.map((todo) => (
    <li key={todo.id} className="group p-3 text-black rounded flex justify-between items-center">
      {editingId === todo.id ? (
        <input
          type="text"
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEditSubmit(e)}
          onBlur={handleEditSubmit}
          className="flex-1"
          autoFocus
        />
      ) : (
        <>
          <div className="flex items-center w-2/4">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span className="ml-4 w-full" onClick={() => handleTodoTextClick(todo.id, todo.text)}>
              {todo.text}
            </span>
          </div>
          <div className="flex items-center">
            <button
              className="p-1 ml-10 mr-5 rounded bg-purple-500 hover:bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              onClick={(e) => handleDeleteClick(e, todo.id)}
            >
              삭제
            </button>
            <input type="time" id="time" name="time" className="p-2 border rounded" />
          </div>
        </>
      )}
    </li>
  ));

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-8 bg-main-background">
          <header className="flex justify-between items-center py-4 px-6 bg-main-background text-white">
            <h1 className="text-2xl text-black font-bold">Hows Your Day</h1>
            <div className="space-x-4">
              <button className="p-2 rounded bg-purple-500 hover:bg-purple-600">
                <span className="text-sm text-white font-medium">+ Create</span>
              </button>
              <button className="p-2 rounded bg-purple-500 hover:bg-purple-600">
                <span className="text-sm text-black font-medium">Search 아이콘</span>
              </button>
              <button className="p-2 rounded bg-purple-500 hover:bg-purple-600">
                <span className="text-sm text-black font-medium">Notifications 아이콘</span>
              </button>
              <button className="p-2 rounded bg-purple-500 hover:bg-purple-600">
                <span className="text-sm text-black font-medium">Setting 아이콘</span>
              </button>
              <button className="p-2 rounded bg-purple-500 hover:bg-purple-600">
                <span className="text-sm text-black font-medium">User 아이콘</span>
              </button>
            </div>
          </header>
          <main className="mt-8 bg-main-background">
            <div className="flex">
              <aside className="w-1/4">
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="block p-4 font-bold bg-main-color rounded">
                        TODOLIST
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-4 text-black font-bold hover:bg-purple-400 rounded">
                        Calendar
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
              <section className="w-3/4 ml-8">
                <div className="bg-white px-4 py-5 rounded shadow-lg">
                  <div className="py-3 text-black font-bold text-xl mb-4 border-b-2">TodoList</div>
                  <div className="mb-4 pl-10">
                    <form id="addTodoForm" onSubmit={addTodo}>
                      <div className="flex items-center w-2/4 my-3">
                        <div className=" mr-20">
                          <label htmlFor="date" className="block text-sm font-semibold text-zinc-400 py-3">
                            Date
                          </label>
                          <input type="date" id="date" name="date" className="p-2 border rounded" />
                        </div>
                      </div>
                      <div className="py-4">
                        <button className="text-sm text-zinc-400 font-semibold">추천 TODOLIST</button>
                      </div>
                      <div className="mb-2">
                        <ul className="space-y-2 mb-5" id="todoList">
                          {todoItems}
                        </ul>
                        <input
                          type="text"
                          id="todo"
                          name="todo"
                          value={task}
                          onChange={(e) => setTask(e.target.value)}
                          className="w-2/5 p-2 border-solid border-2 border-zinc-400 rounded-l-lg text-black"
                          placeholder="New task"
                        />
                        <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 border-solid border-2 rounded-r-lg border-purple-500">
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
