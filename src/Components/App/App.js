import React from 'react';
import { Container } from 'react-bootstrap';

import Subtotal from '../Subtotal/Subtotal';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      total: 100
    }
  }
  
  render(){
    return (
      <div className='Container'>
        <Container className='purchase-card'>
          <Subtotal price={this.state.total.toFixed(2)}></Subtotal>
        </Container>
      </div>
    );
  }
}

export default App;
