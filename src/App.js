import React, { useEffect, useState } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import "./static/styles/main.scss";
import Header from './Components/Molecules/Header';
import ToDo from './Components/Organisms/ToDo';
import AddToDos from './Components/Organisms/AddToDos';
import { doSignOut } from './services/auth';
import { getTodo } from './services/db';
import { auth } from './firebase';
import Authentication from './Components/Organisms/Authentication';
import Button from './Components/Atoms/Button';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [showAuthForm, setshowAuthForm] = useState(false);
  const [todos, settodos] = useState({
    buckets: [],
    completedTodo: {},
    pendingTodo: {}
  });

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        notify.show('Logged in successfully', 'success', 2000);
        setisLoggedIn(true)
      }
      else {
        setisLoggedIn(false);
      }
    })
    if (isLoggedIn) {
      getTodo()
        .then(data => {
          settodos({
            ...todos,
            buckets: (data && data.buckets) || [],
            completedTodo: (data && data.completedtodo) || {},
            pendingTodo: (data && data.pendingtodo) || {}
          })
        })
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    doSignOut();
    settodos({
      buckets: [],
      completedTodo: {},
      pendingTodo: {}
    })
  }

  return (
    <div className="App">
      <Notifications />
      {
        (showAuthForm && !isLoggedIn) &&
        <Authentication
          setshowAuthForm={setshowAuthForm}
        />
      }
      <Header
        setshowAuthForm={setshowAuthForm}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <main>
        {
          isLoggedIn ?
            <>
              <AddToDos
                todos={todos}
                settodos={settodos}
              />
              <section className="bottom">
                <ToDo
                  todos={todos}
                  settodos={settodos}
                />
              </section>
            </> :
            <div className="LandingPage">
              <h1>Welcome to FractalTodo.<br /> Last Todo app you will ever need.</h1>
              <Button
                btnLabel={"get started"}
                btnClass={"primary-bg"}
                handleClick={setshowAuthForm}
                args={[true]}
              />
            </div>
        }
      </main>
    </div>
  );
}

export default App;
