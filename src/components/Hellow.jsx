import React from 'react'


const Father =(props)=>{
return <h3></h3>
}

const Hellow = (props) => {
    const {name,age,father}=props
  return (
    <div>  
      <h1>
        Hi i am  {name}. my age{age}.<Father father={father} />
       </h1>  
    </div>
  )
}

export default Hellow