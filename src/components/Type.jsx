import React, { useState } from "react"
import useVariableFont from "react-variable-fonts";
import Slider from "./Slider"

const Type = ({ name, variations, applyFont }) => {

  // For CSS font-variation-settings
  const initialVariationSettings = {}
  variations.forEach(variation => {
    initialVariationSettings[variation.name] = variation.defaultVal
  });
  const [initialVariation, updateVariation] = useVariableFont(name, initialVariationSettings);

  // Values about type
  const [stateVariation, setStateVariation] = useState(variations)

  // Slide
  const slideChange = (i, val) => {
    setStateVariation((currentValues) => {
      currentValues[i].defaultVal = Number(val)
      return [...currentValues];
    })
    updateVariation({ [stateVariation[i].name]: Number(val) })
  }

  return (
    <div className="mb-5 rounded border border-gray-200 p-4 group opacity-50 hover:opacity-100">
      <div style={{ ...initialVariation }} className="text-3xl mb-5 truncate">{name}</div>
      {stateVariation.map((variation, i) => {
        return (
          <div key={variation.name}>
            <div className="font-bold">
              {variation.name} : {variation.defaultVal}
            </div>
            <Slider minVal={variation.minVal} maxVal={variation.maxVal} val={variation.defaultVal} slideChange={slideChange} i={i} />
          </div>
        )
      })}
      <button onClick={() => applyFont(name, stateVariation)} className="rounded py-1 px-3 bg-green-200  group-hover:bg-green-800 group-hover:text-white block w-full mt-4 ">Apply</button>
    </div>
  )
}

export default Type