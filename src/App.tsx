// src/App.js
import { useEffect } from "react";
import { auth } from "./firebase-config";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import Editor from "./components/Editor";

function App() {
  useEffect(() => {
    signInAnonymously(auth);
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log("User signed in:", user.uid);
      }
    });
  }, []);
  
  return (
    <div className="App">
      <header className="bg-white border-b">
        <nav className="max-w-7xl mx-auto px-6 h-16">
          <div className="flex items-center justify-between h-full">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-blue-500"
          >
            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
          </svg>
          <h1 className="text-xl font-medium text-gray-700">Docs Clone</h1>
        </div>

        {/* User Profile */}
        <button className="inline-flex items-center justify-center w-10 h-10 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </button>
          </div>
        </nav>
      </header>
      
      <Editor />
    </div>
  );
}

export default App;
