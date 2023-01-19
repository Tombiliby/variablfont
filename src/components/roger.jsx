import React from 'react'

const yops = ["salut", "hi", "wesh"]
const roger = () => {
  return (
    <div>
      {yops.map(yop => <p>{yop}</p>)}
    </div>
  )
}

export default roger
