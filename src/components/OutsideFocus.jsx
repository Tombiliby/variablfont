import React, { useEffect, useRef } from 'react'

const OutsideFocus = ({ onFocusField, children }) => {

  const outsideRef = useRef();

  const handleClick = (e) => {
    if (outsideRef.current.contains(e.target)) {
      const isOutside = true
      onFocusField(!isOutside)
      return;
    }


  }

  useEffect(() => {
    // add when mounted
    document.addEventListener("mouseup", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mouseup", handleClick);
    };
  });

  return (
    <div className="h-full" ref={outsideRef}>
      {children}
    </div>
  )
}

export default OutsideFocus
