export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-8">
          <header className="flex justify-between items-center py-4 px-6 bg-main-background text-white">
            <h1 className="text-base text-black font-bold">Hows Your Day</h1>
            <div className="space-x-4">
              <button className="p-2 rounded bg-purple-500 hover:bg-purple-600 ">
                <span className="text-sm text-white font-medium">+ Create</span>
              </button>
              <button className="p-2 rounded bg-purple-500 hover:bg-purple-600 ">
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

          <main className="mt-8">
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
                    <form id="addTodoForm">
                      <div className="flex items-center w-2/4">
                        <div className=" mr-20">
                          <label htmlFor="date" className="block text-sm font-semibold">
                            Date
                          </label>
                          <input type="date" id="date" name="date" className="p-2 border rounded" />
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-semibold">
                            Time
                          </label>
                          <input type="time" id="time" name="time" className="p-2 border rounded" />
                        </div>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="todo" className="block text-sm font-semibold">
                          Add Todo
                        </label>
                        <ul className="space-y-2 mb-5" id="todoList">
                          <li className="p-3 bg-gray-100 text-black rounded">Sample Task 1</li>
                          <li className="p-3 bg-gray-100 text-black rounded">Sample Task 2</li>
                        </ul>
                        <input type="text" id="todo" name="todo" className="w-2/4 p-2 border-none rounded" placeholder="New task" />
                        <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
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
      ;
    </>
  );
}
