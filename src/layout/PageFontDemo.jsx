import React, { useState, useContext } from 'react'
import stylePatternContext from '../contexts/stylePattern'
import Types from "../components/Types";
import OutsideFocus from '../components/OutsideFocus';
import Cards from '../components/Cards';
import ArticlePattern from "../components/ArticlePattern";

const PageFontDemo = () => {

  const { state, dispatch } = useContext(stylePatternContext)
  const [isFocus, setIsFocus] = useState(false)

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
    <>
      <Types className={`${!isFocus ? "transform -translate-x-full" : "shadow-2xl"} transition-transform transition-shadow`} dispatch={dispatch} selectedField={state.selectedField} />
      <OutsideFocus onFocusField={onFocusField}>
        <div className={`${isFocus ? "transform translate-x-52" : ""} origin-center transition-transform p-8 md:p-24 md:pb-2 lg:flex items-center`}>
          <ArticlePattern className={`flex-1`} onFocusField={onFocusField} />
          <Cards className={`flex-1  lg:ml-6  xl:ml-12`} onFocusField={onFocusField} />
        </div>
      </OutsideFocus>
    </>
  )
}

export default PageFontDemo
