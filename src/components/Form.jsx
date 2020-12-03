import React from 'react';
import '../App.css'
import { useForm } from 'react-hook-form'

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var db = firebase.firestore();



export default props => {

    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {

        db.collection("form").add({
            name: data.name,
            date: data.date,
            description: data.description
        }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);

        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
        console.log(data)
    }
    return (
        <div>
            <form class="form" onSubmit={handleSubmit(onSubmit)}>
                <h5>Your name: </h5>
                <input type="text" name="name" placeholder="What is your name?" ref={register({ required: true })} />
                <h5>Date: </h5>
                <input type="date" name="date" placeholder="Is there a disease?" ref={register({ required: true })} />
                <h5>Description: </h5>
                <textarea type="text" name="description" placeholder="Describe the annotation" rows="5" cols="95" ref={register({ required: true })} /><br />

                <input type="submit" value="Save" />
                {errors.description &&
                    <p> The field description is empty</p>
                }
                {errors.date &&
                    <p> The field date is empty</p>
                }
                {errors.name &&
                    <p> The field name is empty</p>
                }
            </form>
        </div>
    )
}
