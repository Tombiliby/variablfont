import React, { useRef } from 'react'

const getVariationsString = (variations) => {
  const entries = Object.entries(variations);
  if (!entries.length) {
    return "normal";
  } else {
    return entries.map(([axis, value]) => `'${axis}' ${value}`).join(", ");
  }
}


const EditableSection = ({ onFocusField, fontStyle, fieldName, className, children }) => {
  const sectionRef = useRef();
  const editableClass = [`${className} hover:outline-none focus-visible:outline-none hover:ring hover:ring-blue-100 focus:ring focus:ring-blue-300`]
  const styling = {
    fontFamily: fontStyle.fontFamily,
    fontVariationSettings: getVariationsString(fontStyle.variations)
  }

  const handleClick = (e) => {
    if (sectionRef.current.contains(e.target)) {
      const isFocus = true
      onFocusField(isFocus, fieldName)
      return;
    }
  }

  return (
    <div onClick={handleClick} contentEditable={true} suppressContentEditableWarning={true} ref={sectionRef} style={styling} className={editableClass}>
      {children}
    </div>
  )
}

export default EditableSection