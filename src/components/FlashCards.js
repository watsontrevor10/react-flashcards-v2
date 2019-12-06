import React from 'react';
import FlashCardItem from './FlashCardItem'
import CardForm from './CardForm'
import { Segment, Card, } from 'semantic-ui-react';

class FlashCards extends React.Component {
  state = {
    flashCards: [
      { id: 1, question: "why?", answer: "why not?"},
      { id: 2, question: "what?", answer: "what not?"},
    ],
  }

  renderCards = () => {
    return  this.state.flashCards.map( flashCard => <FlashCardItem key={flashCard.id} {...flashCard} />)
  }

  getId = () => {
    Math.floor((1 + Math.random()) * 10000)
  }

  addCard = ({ question, answer }) => {
    let newCard = { id: this.getId, question, answer } 
    this.setState({ flashCards: [...this.state.flashCards, newCard] })
  }

  render() {
    return (
      <Segment>
        <h2>FlashCards</h2>
        <Card.Group>
          {this.renderCards()}
        </Card.Group>
        <CardForm add={this.addCard} />
      </Segment>
    )
  }
}

export default FlashCards;