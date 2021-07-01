import React from 'react'
import firebase from "firebase/app";
import "firebase/firestore";
import '../firebase/conf'
import { useCollection } from 'react-firebase-hooks/firestore';

const Firebase = () => {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('fonts'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (value) {
    console.log(value.docs)
  }

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        value.docs.map(doc => (
          <div key={doc.id}>
            {doc.id}
            <div>
              {JSON.stringify(doc.data())},{' '}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Firebase