import React from 'react'

const Person = ({person}) => {
    // console.log(JSON.stringyfy(person));
  return (
    <div>

      <ul>
      {
            person.map(person => <li> nmae:{person.name}-age:-{person.age}address:-{person.address}</li> )
        }
      </ul>
    </div>
  )
}

export default Person