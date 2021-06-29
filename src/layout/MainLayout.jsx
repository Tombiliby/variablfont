import React, { useReducer, useState } from 'react'
import stylePatternContext from '../contexts/stylePattern';
import Types from "../components/Types";
import ArticlePattern from "../components/ArticlePattern";
import customFontsReducer from '../reducer/customFontsReducer';
import OutsideFocus from '../components/OutsideFocus';
import Cards from '../components/Cards';

const MainLayout = () => {

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
  const [isFocus, setIsFocus] = useState(false)
  const [state, dispatch] = useReducer(customFontsReducer, initialStylePattern);

  const onFocusField = (isFocus, fieldName) => {
    if (isFocus) {
      setIsFocus(true)
      dispatch({ type: "set_selectedField", selectedField: fieldName })
      return
    } else {
      setIsFocus(false)
      dispatch({ type: "set_selectedField", selectedField: "" })
    }
  }

  return (
    <stylePatternContext.Provider value={{ state, dispatch }}>
      <Types className={`${!isFocus ? "transform -translate-x-full" : "shadow-2xl"} transition-transform transition-shadow`} dispatch={dispatch} selectedField={state.selectedField} />
      <OutsideFocus onFocusField={onFocusField}>
        <div className={`${isFocus ? "transform translate-x-52" : ""} origin-center transition-transform p-8 md:p-24 md:pb-2 lg:flex items-center`}>
          <ArticlePattern className={`flex-1`} onFocusField={onFocusField} />
          <Cards className={`flex-1  lg:ml-6  xl:ml-12`} onFocusField={onFocusField} />
        </div>
      </OutsideFocus>
    </stylePatternContext.Provider>
  )
}

export default MainLayout