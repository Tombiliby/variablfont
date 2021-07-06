import React from 'react'
import firebase from "firebase/app";
import "firebase/firestore";
import '../firebase/conf'
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Firebase = () => {
  const [values, loading, error] = useCollectionData(
    firebase.firestore().collection('fonts'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log(values)
  return (
    <ul className="list-decimal list-inside">
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {values && (
        values.map((font, i) => (
          <li key={i}>
            <span className="font-bold">{font.name}</span> : {font.fileName}
          </li>
        ))
      )}
    </ul>
  )
}

export default Firebase