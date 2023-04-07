import React, { Component } from 'react';

import { useState } from "react"
import './App.css';
import  Counters from './components/counters';
import "./App.css";


class App extends Component {
    state = { 
      counters: [
          {id: 1, value: 0},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0},
        
      ]
    };

  handleIncrement = counter =>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      console.log(index);
      counter[index] = {...counter}
      counters[index].value++;
      this.setState({counters});
  };

handleDecrement = counter => {
  const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counter[index] = {...counter}
      counters[index].value--;
      this.setState({counters});

}
  
  handleReset = () =>{
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({ counters });
  };

  handleDelete = counterId =>{
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
    
  };

  handleOnAdd = counterId =>{

      const newCounter = { id: counterId, value: 0 };
      const counters = [...this.state.counters, newCounter];
      this.setState({ counters });
    
    
    /*const counters = this.state.counters.concat(c => {
      c.id === counter;
      c.value = 0;

      return c;
    });
    this.setState({counters});*/
    
    
  
    

  }

  render(){
    return (
    <React.Fragment>
      
        <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement = {this.handleDecrement}
        onDelete={this.handleDelete}
        totalCounters={this.state.counters.filter(c => c.value > 0).length}
        onAdd={this.handleOnAdd}
        />
      
      </React.Fragment>
    );
  }
}


export default App;
