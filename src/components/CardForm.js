import React from 'react';
import { Form, } from 'semantic-ui-react';

class CardForm extends React.Component {
  state = { question: "", answer: "", }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ question: "", answer: "" })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid
            required
            placeholder="Question"
            label="Question"
            name="question"
            onChange={this.handleChange}
            value={this.state.question}
          />
          <Form.Input 
            fluid
            required
            placeholder="Answer"
            label="Answer"
            name="answer"
            onChange={this.handleChange}
            value={this.state.answer}
          />
        </Form.Group>
        <Form.Button color="green inverted">Submit</Form.Button>
      </Form>
    )
  }
}

export default CardForm;