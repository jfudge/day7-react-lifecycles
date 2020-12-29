import React from 'react';
// Don't forget your prop-types
import PropTypes from 'prop-types';

import './Button.css';

// This Button component is an excellent example of a general use-case component
// that can be re-used many times in the application
class Button extends React.Component {
  constructor(props) {
    super();
  }

  /*
    The Component Lifecycle methods
    The lifecycle methods allow you to tap into the different stages of a component
    There are 3 main stages of a component:
    1. Mounting
    2. Updating
    3. Unmounting
  */

  // Mounting
  componentDidMount() {
    const { children } = this.props;
    console.log(`The ${children} button mounted.`);
  }

  // Remember all class components need a render method
  render() {
    // This component is going to take in a prop called "children"
    // props.children is a special prop that returns the content
    // between the opening and closing tags of the component
    // <Button>The content in here is in the children</Button>
    // console.log(this.props);

    // I'm using props to forward functionality and other types of code into the component
    const { children, onClick } = this.props;

    return (
      <button onClick={onClick} className="customButton">
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  children: '',
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  onClick: PropTypes.func, // This is to pass event handlers to the component
}

export default Button;