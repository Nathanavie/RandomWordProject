import React from 'react';
import Definition from './Definition';
import Button from './Button';
import Header from './Header';

const StartPage = props => {
  return (
    <>
      <Header wording="Find the definition of a random word!"/>
      <div className="content">
        <h2>Your random word is: <span className="capitalize">{props.randomWord}</span></h2>
        <h2>Your definition</h2>
        <Definition definition={props.definition} />
        <Button function={props.tryAgain} wording="Why not get a new word?" />
      </div>
    </>
  )
}
export default StartPage
