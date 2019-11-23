import React, { useEffect, useState } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import "./static/styles/main.scss";
import Header from './Components/Molecules/Header';
import ToDo from './Components/Organisms/ToDo';
import AddToDos from './Components/Organisms/AddToDos';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignOut } from './services/auth';
import { uploadUserData, getTodo } from './services/db';
import { auth } from './firebase';
import Authentication from './Components/Organisms/Authentication';

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
        showAuthForm &&
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
      </main>
    </div>
  );
}

export default App;
