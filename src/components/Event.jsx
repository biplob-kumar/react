// import React, { useEffect } from 'react'

const Event = () => {
    const handleChange=(e)=>{
      const {name,value}=e.target
      console.log(name,value);
   
        
    }
  
  return (
    <div> 
        <input name='name' onClick={handleChange} type="text" placeholder='name' /> <br/>
        {/* <br/>
        <br/>
        Dummy form
        <form >
            <input name='name' type="text" placeholder='name' /> <br/>
            <input name='age' type="number" placeholder='address' />  <br/>
            <input type="submit" />
        </form> */}
    </div>
  )
}

export default Event