import React from 'react'
import '../App.css'

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


var db = firebase.firestore();

export default param => {
    return (db.collection("form").get().then(function (querySnapshot) {
        <h1>List: </h1>
        querySnapshot.forEach(function (doc) {
            <form className="form" >
                <p>{doc.data().name}</p>
                <p>{doc.data().date}</p>
                <p>{doc.data().description}</p>
            </form>
            // doc.data() is never undefined for query doc snapshot
        });
    })
    )
}




