import React from "react"

const Slider = ({ minVal, maxVal, val, slideChange, i }) => {

  return (
    <>
      <input onChange={(e) => { slideChange(i, e.target.value) }} type="range" min={minVal} max={maxVal} value={val} step="1" />
    </>
  )
}

export default Slider