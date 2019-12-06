import React from 'react';
import { Card } from 'semantic-ui-react';

class FlashCardItem extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>Question: {this.props.question}</Card.Content>
        <Card.Content>Answer: {this.props.answer}</Card.Content>
      </Card>
    )
  }
}

export default FlashCardItem;