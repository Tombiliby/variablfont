import React from 'react'
import firebase from "firebase/app";
import "firebase/firestore";
import '../firebase/conf'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Type from "./Type"

const Types = ({ className, dispatch, selectedField }) => {

  const [values, loading, error] = useCollectionData(
    firebase.firestore().collection('fonts').orderBy('name'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const applyFont = (name, stateVariation) => {
    if (selectedField === "") {
      alert("You must have selected à text field")
      return
    }
    let variations = {}
    stateVariation.forEach(variation => {
      const name = variation.name
      const value = variation.defaultVal
      variations[name] = value
    })
    const fontUpdate = {
      fontFamily: name,
      variations: variations
    }

    dispatch({ type: "set_font", fontUpdate: fontUpdate, selectedField: selectedField })

  }

  return (
    <div className={`p-4 bg-white h-screen fixed z-30 w-64 overflow-y-auto ${className}`}>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}

      {values && (
        values.map((font, i) => (
          <div key={i}>
            <Type name={font.name} variations={font.variations} applyFont={applyFont} />
          </div>
        ))
      )}
    </div>
  )
}

export default Types
