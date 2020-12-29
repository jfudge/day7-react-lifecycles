import React from 'react';
import './Dialog.css';

import Button from '../Button/Button';

class Dialog extends React.Component {
  constructor(props) {
    super();
  }
  /*
    The Component Lifecycle methods
    The lifecycle methods allow you to tap into the different stages of a component
    There are 3 main stages of a component:
    1. Mounting
    2. Updating (data updates)
    3. Unmounting
  */

  // Let's check the mounting of the dialog
  componentDidMount() {
    console.log('Dialog component mounted.');
  }

  componentDidUpdate() {
    // There is no change in Dialog, so this lifecycle method should not fire.
    console.log('Dialog component has updated.');
  }

  // Let's check the unmounting of the dialog
  componentWillUnmount() {
    console.log('Dialog component will unmount.');
  }

  render () {
    // Whenever I click the close button, it will run closeDialog, which has been designed to change
    // the dialog state in the app component

    // You can continually pass data as props into components as much as you want
    // At the end of it all your app will be a network of components
    const { closeDialog } = this.props;
    return (
      <div className="overlay">
        <div className="dialog">
          <p>Are you sure?</p>
          <Button onClick={closeDialog}>Close</Button>
        </div>
      </div>
    );
  }
}

export default Dialog;