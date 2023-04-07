import React, { Component } from 'react'
import Counter from "./counter";

class Counters extends Component {
    
    render() { 
        const {onReset, counters, onDelete, onIncrement, onDecrement, totalCounters, onAdd} = this.props;
        return (
        <div className="container-fluid text-center align-items-center">
            <span className="badge m-2 bg-secondary">{totalCounters}</span>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter => (
            <Counter  
            key={counter.id} 
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            onAdd = {onAdd}
             
            />
            ))}
            <button
            onClick={onAdd}
            className="btn btn-info btn-sm m-2 text-white fs-6">Add</button>
        </div>);
    }
} 
 
export default Counters;