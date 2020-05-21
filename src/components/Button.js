import React from 'react';

const Button = props => {
  return (
    <button onClick={props.function}>{props.wording}</button>
  )
}
export default Button
