import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./static/styles/main.scss";
import Header from './Components/Molecules/Header';
import ToDo from './Components/Organisms/ToDo';
import AddToDos from './Components/Organisms/AddToDos';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
        <Header/>
        <main>
          <AddToDos/>
          <section className="bottom">
            <ToDo/>
          </section>
        </main>
    </div>
  );
}

export default App;
