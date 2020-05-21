import React from 'react';
import Button from './Button';
import Header from './Header';

const StartPage = props => {
  return (
    <>
      <Header wording="Find the definition of a random word!" />
      <div className="content">
        <h2 className="randomWord">Your random word is: <span className="capitalize">{props.randomWord}</span></h2>
        <Button function={props.fetchAPI} wording="Show Definition" />
      </div>
    </>
  )
}
export default StartPage
