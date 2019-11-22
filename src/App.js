import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./static/styles/main.scss";
import Header from './Components/Molecules/Header';
import ToDo from './Components/Organisms/ToDo';
import AddToDos from './Components/Organisms/AddToDos';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from './services/auth';
import { uploadUserData, getTodo } from './services/db';
import { auth } from './firebase';
import { SETBUCKETS, SETCOMPLETEDTODO, SETPENDINGTODO } from './store/common/types';

function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      user?setisLoggedIn(true):setisLoggedIn(false);
    })
    if(isLoggedIn){
      getTodo()
      .then(data=>{
        dispatch({type: SETBUCKETS,buckets:(data && data.buckets)||[]});
        dispatch({type: SETCOMPLETEDTODO,completedTodo:(data && data.completedtodo)||[]});
        dispatch({type: SETPENDINGTODO,pendingTodo:(data && data.pendingtodo)||[]});
      })
    }
  }, [isLoggedIn]);


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
