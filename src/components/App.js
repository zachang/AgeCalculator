import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import AgeStats from './AgeStats';
import './App.css';

class App extends Component {

  state = {
    newDate: '',
    birthday: '1992-07-03',
    showStats: false
  };

  handleInputChange = (event) => {
    event.preventDefault();

    this.setState({
      newDate: event.target.value
    })
  };

  changeBirthday = () => {
    console.log(this.state);
    this.setState({
      birthday: this.state.newDate,
      showStats: true
    })
  };

  render() {
    return (
      <Container className='App'>
        <Row>
          <Col>
            <h4>Check your age:</h4>
          </Col>
        </Row>
        <Row>
          <Col sm='12'>
            <Form>
              <FormGroup>
                <Input onChange={ this.handleInputChange } md='6' type="date" name="date" id="date" />
              </FormGroup>
            </Form>
          </Col>
          <Col sm='12'>
            <Button sm='12' color='primary' onClick={this.changeBirthday}>Check</Button>
          </Col>
        </Row>
        { this.state.showStats ?
          <div className='fades age-stats'><AgeStats date={this.state.birthday}/></div>
          :
          <div></div>
        }
      </Container>
    )
  }
}

export default App;