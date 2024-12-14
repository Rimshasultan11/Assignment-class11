import React from 'react'

const Child = (props:any) => {
    
  return (
    <div>
        <h1 className="text-6xl leading-[80px] mt-10">{`Name:${props.fName}`}<br />
            {`Father Name: ${props.lName}`} <br />
            {`Age: ${props.age}`}
        </h1>
    </div>
  )
}

export default Child
