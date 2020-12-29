import React from 'react';
import Button from '../Button/Button';

import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super();
    // Set up a state in the class
    // In class components, you can only have one state. This state is a giant object
    // with many properties
    this.state = {
      count: 0,
      anotherStateProperty: false,
    };

    // Remember to bind our methods to this
    this.increment = this.increment.bind(this);
  }

  /*
    The Component Lifecycle methods
    The lifecycle methods allow you to tap into the different stages of a component
    There are 3 main stages of a component:
    1. Mounting
    2. Updating
    3. Unmounting
  */

  // Updating (Fires when the state changes, or when props change)
  componentDidUpdate() {
    console.log('The counter component has updated!');
  }

  increment() {
    // This will set the state to the count + 1
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h3>Counter</h3>
        <span className="count">
          {count}
        </span>
        <Button onClick={this.increment}>Increment</Button>
      </div>
    );
  }
};

export default Counter;