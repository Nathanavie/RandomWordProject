import React from 'react';

const Definition = props => {
  let capitalise = props.definition
  let definitionArray = [];

  const capitaliseArray = capitalise.map((capital, index) => {
    let wording =  capital.slice(0,1).toUpperCase() + capital.slice(1, capital.length);
    definitionArray.push(wording)
    return definitionArray
  })

  const definition = definitionArray.map((def, index) => {
    return (
      <div key={index}>
        <p>{index + 1}. <span className="definitionWording">{def}</span></p>
      </div>
    )
  })
  return(
    <>
    {definition}
    </>
  )
}

export default Definition
