import React from 'react'
import firebase from "firebase/app";
import "firebase/firestore";
import { useForm } from 'react-hook-form'
import InputArray from './InputArray'
import VariationsArray from './VariationsArray'
import Firebase from '../../layout/Firebase';
import "firebase/auth"

const AddTypeForm = () => {

  const db = firebase.firestore();
  const defaultValues = {
    variations: [{
      name: ""
    }]
  }

  const {
    control,
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues
  });

  const onSubmit = (data, e) => {
    db.collection("fonts").add(data)
      .then((docRef) => {
        console.log("Document test written with ID: ", docRef.id);
        reset(defaultValues)
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }


  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        console.log(`${user} logged`)
      }).catch((error) => {
        console.log(error.message)
      });
  }
  return (
    <>
      <button onClick={handleLogin}>Login</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Firebase />
        <div className="flex  p-4">
          <div className="flex-1 p-4">
            <div>
              <div className="font-bold">fileName</div>
              <input className="w-full" type="text" placeholder="filenam.woff2" {...register("fileName")} />
            </div>
            <div>
              <div className="font-bold">Name</div>
              <input className="w-full" defaultValue="" type="text" {...register("name")} />
            </div>
            <div>
              <div className="font-bold">Designer</div>
              <InputArray name="designers" {...{ control, register }} />
            </div>
            <div>
              <div className="font-bold">Publisher</div>
              <InputArray name="publisher" {...{ control, register }} />
            </div>
            <div>
              <div className="font-bold">Characters</div>
              <InputArray name="characters" {...{ control, register }} />
            </div>
            <div>
              <div className="font-bold">Uploaded date</div>
              <input className="w-full" type="date" {...register("uploadedDate")} />
            </div>
            <div>
              <div className="font-bold">ReleasedDate</div>
              <input className="w-full" type="date" {...register("releasedDate")} />
            </div>
            <div>
              <div className="font-bold">License</div>
              <InputArray name="license" {...{ control, register }} />
            </div>
          </div>
          <div className="flex-1 p-4">
            <div className="font-bold">
              <div>Tags</div>
              <InputArray name="tags" {...{ control, register }} />
            </div>
            <div>
              <div className="font-bold">Website</div>
              <InputArray name="website" {...{ control, register }} />
            </div>
            <div>
              <div className="font-bold">Variations</div>
              <VariationsArray name="variations" {...{ control, register }} />
            </div>
          </div>
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>

    </>
  )
}

export default AddTypeForm
