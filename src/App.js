import React,{useEffect, useState} from 'react';
import "./static/styles/main.scss";
import Header from './Components/Molecules/Header';
import ToDo from './Components/Organisms/ToDo';
import AddToDos from './Components/Organisms/AddToDos';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from './services/auth';
import { uploadUserData, getTodo } from './services/db';
import { auth } from './firebase';
import Authentication from './Components/Organisms/Authentication';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [showAuthForm, setshowAuthForm] = useState(false);
  const [todos, settodos] = useState({
    buckets:[],
    completedTodo:{},
    pendingTodo:{}
  });

  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      user?setisLoggedIn(true):setisLoggedIn(false);
    })
    if(isLoggedIn){
      getTodo()
      .then(data=>{
        settodos({
          ...todos,
          buckets: (data && data.buckets)||[],
          completedTodo: (data && data.completedtodo)||{},
          pendingTodo: (data && data.pendingtodo)||{}
        })
        // dispatch({type: SETBUCKETS,buckets:(data && data.buckets)||[]});
        // dispatch({type: SETCOMPLETEDTODO,completedTodo:(data && data.completedtodo)||[]});
        // dispatch({type: SETPENDINGTODO,pendingTodo:(data && data.pendingtodo)||[]});
      })
    }
  }, [isLoggedIn]);


  return (
    <div className="App">
        {
          showAuthForm &&
          <Authentication
            setshowAuthForm={setshowAuthForm}
          />
        }
        <Header
          setshowAuthForm={setshowAuthForm}
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
