import React from 'react';
import Button from './Button';
import Header from './Header';
const BrokenWord = props => {
  return (
    <>
      <Header wording="This is awkawrd..." />
      <div className="content BrokenWord">
        <h2>It looks like Merriam Webster do not recognise "{props.randomWord}" and therefore they do not have a definition right now.</h2>
        <Button function={props.tryAgain} wording="Why not get a new word and try again?" />
      </div>
    </>
  )
}
export default BrokenWord
