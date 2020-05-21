import React from 'react';
import StartPage from './StartPage';
import BrokenWord from './BrokenWord';
import SuccessWord from './SuccessWord';
import {getData} from '../Utils/Utils';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      randomWord: '',
      definition: '',
    }

  }

fetchAPI = () => {
  getData(`https://dictionaryapi.com/api/v3/references/collegiate/json/${this.state.randomWord[0]}?key=c0530e4a-01db-49b4-9a6f-cdf1b067626b`)
  .then((definition) => {
    this.setState({
      definition: definition[0].shortdef,
    })
  })
  .catch((error) => {
    console.error(error)
  })
  }

  fetchRandomWord = () => {
    getData("https://random-word-api.herokuapp.com/word?number=1").then(data => {
      this.setState({
        randomWord: data,
      })
    })
  }

  tryAgain = () => {
    window.location.reload();
  }

  componentDidMount() {
    this.fetchRandomWord();
  }


  render() {
    const { randomWord, definition } = this.state
    if (definition === '') {
      return(
        <StartPage fetchAPI={this.fetchAPI} randomWord={randomWord} />
      )
    }
    if (definition === undefined || definition.length === 0) {
      return(
        <BrokenWord tryAgain={this.tryAgain} randomWord={randomWord} />
      )
    } else {
      return(
        <SuccessWord tryAgain={this.tryAgain} randomWord={randomWord} definition={definition} />
      )
  }
  }
}
export default Main
