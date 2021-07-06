import React from 'react'
import firebase from "firebase/app";
import "firebase/firestore";
import '../firebase/conf'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Type from '../components/Type';

const Firebase = () => {
  const [values, loading, error] = useCollectionData(
    firebase.firestore().collection('fonts'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log(values)
  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {values && (
        values.map((font, i) => (
          <div key={i}>
            {font.id}
            <div>
              <Type name={font.name} variations={font.variations} />
              {JSON.stringify(font)},{' '}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Firebase