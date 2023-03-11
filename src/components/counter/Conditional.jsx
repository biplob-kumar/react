import React from 'react'

const Conditional = () => {
    let result=4
  return (
    <div>
        {
            result===5 ? <h1>I got GpA 5</h1>:       
            <h1>I got GpA Failed </h1>
        }

    </div>
  )
}

export default Conditional