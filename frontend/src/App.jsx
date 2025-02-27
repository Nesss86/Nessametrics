import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100 text-gray-900">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-600">Vite + React</h1>
          <p className="text-lg text-gray-700 mt-2">
            Edit <code className="bg-gray-200 p-1 rounded">src/App.jsx</code> and save to test HMR.
          </p>
        </header>

        <div className="bg-white shadow-md rounded-lg p-6 text-center w-full max-w-md">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Count is {count}
          </button>
        </div>

        <footer className="mt-10 text-gray-600 text-sm">
          Click on the Vite and React docs to learn more.
        </footer>
      </div>
    </div>
  );
}

export default App;



