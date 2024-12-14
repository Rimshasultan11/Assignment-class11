import React from 'react'
import Child from './Child'

const Parent = () => {
    const fName = "Rimsha"
    const lName = "Sultan"
    const age =   25
  return (
    <div>
      <Child fName={fName} lName={lName} age={age}/>
    </div>
  )
}

export default Parent
