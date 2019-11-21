import React from 'react';
import "./static/styles/main.scss";
import Header from './Components/Molecules/Header';
import AddToDo from './Components/Molecules/AddToDo';
import Todos from './Components/Molecules/Todos';

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
          <AddToDo/>
          <section className="bottom">
            <Todos/>
          </section>
        </main>
    </div>
  );
}

export default App;
