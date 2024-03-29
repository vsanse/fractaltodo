import { db, auth } from "../firebase";

const endPoints = {
    USER: 'users'
}

//upload user data
export const uploadUserData = () => {
    db.ref(`/${endPoints.USER}/${auth.currentUser.uid}`).set({
        registered:true
    })
}

export const handleTodo = (data) =>{
    db.ref(`/${endPoints.USER}/${auth.currentUser.uid}`).set({
        completedtodo: data.completedtodo || [],
        pendingtodo: data.pendingtodo || [],
        buckets:data.buckets || []
    })
}

export const getTodo = ()=>{
    return new Promise((resolve, reject) => {
        db.ref(`/${endPoints.USER}/${auth.currentUser.uid}`)
        .on("value", function (snapshot) {
            resolve(snapshot.val())
        })
    })
}