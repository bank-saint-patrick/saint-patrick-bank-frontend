import React, { createContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import NoPage from './components/NotFound';
import Register from './components/Register';
import { Home } from './components/Home';
import './App.css';
import { TodoProvider } from './context/TodoProvider';

let textGradient: string = "I am going to apply these concepts of React with Typescripts using tailwindcss library. Thanks! Brandito el músico";

function App() {
  

  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/registro' element={<Register />} />
            <Route path='/:any' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </>
  );
}

export default App;