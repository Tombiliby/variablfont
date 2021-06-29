import React from 'react'
import typeList from "../fonts/fontFace.json"
import Type from "./Type"

const Types = ({ className, dispatch, selectedField }) => {

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
      {typeList.map((type, i) => {
        return (
          <div key={i}>
            <Type name={type.name} variations={type.variations} applyFont={applyFont} />
          </div>
        )
      })}
    </div>
  )
}

export default Types
