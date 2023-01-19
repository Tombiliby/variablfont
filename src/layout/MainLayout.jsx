import React, { useEffect, useReducer } from 'react'
import stylePatternContext from '../contexts/stylePattern';
import { addFont } from "../fonts/fontFace"
import customFontsReducer from '../reducer/customFontsReducer';
import firebase from "firebase/app";
import "firebase/firestore";
import '../firebase/conf'
import "firebase/analytics"
import "firebase/auth"
import { useCollectionData } from 'react-firebase-hooks/firestore';

const MainLayout = ({ children }) => {


  const [fonts, loading, error] = useCollectionData(
    firebase.firestore().collection('fonts').orderBy('name'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (error) {
    console.log(error)
  }

  useEffect(() => {
    if (!loading) {
      fonts.forEach(font => {
        addFont(font.name, font.fileName)
      })
    }
  }, [fonts, loading])

  const initialStylePattern = {
    selectedField: "",
    article: {
      title1: {
        fontFamily: "Fraunces",
        variations: {
          SOFT: 67,
          WONK: 0,
          opsz: 9,
          wght: 652
        }
      },
      title2: {
        fontFamily: "Source Sans",
        variations: {
          "wght": 200
        }
      },
      title3: {
        fontFamily: "Source Sans",
        variations: {
          "wght": 500
        }
      },
      title4: {
        fontFamily: "Source Sans",
        variations: {
          "wght": 800
        }
      },
      body: {
        fontFamily: "Montserrat",
        variations: {
          "wght": 300
        }
      },
      quote: {
        fontFamily: "Montserrat",
        variations: {
          "wght": 300
        }
      }
    }
  }
  const [state, dispatch] = useReducer(customFontsReducer, initialStylePattern);

  return (
    <stylePatternContext.Provider value={{ state, dispatch }}>
      {loading ? (<div>Loading...</div>) : (
        <>
          <div>
            <div className="">
              <div className="absolute top-0 left-0 h-screen v-screen right-0 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500"></div>
              <div className="mix-blend-screen bg-white">
                {children}
              </div>
            </div>
            <div className="bg-green-400 absolute top-0 left-0 h-screen v-screen"></div>
          </div>
        </>
      )}
    </stylePatternContext.Provider>
  )
}

export default MainLayout