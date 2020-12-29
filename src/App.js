// useEffect is how we handle lifecycles with function components
import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Dialog from './components/Dialog/Dialog';
import Counter from './components/Counter/Counter';

const clickMe = () => {
  console.log('Click me! button was pressed.');
}

const anotherButton = () => {
  console.log('Another button! was pressed.')
}

// We are going to have to use useState, because it's a function component.
// If it was a class component, you can use this.state and this.setState().
function App() {
  const [showDialog, setShowDialog] = useState(false);
  // Some random internal state
  const [internal, setInternal] = useState(false);

  /*
    The Component Lifecycle (USEEFFECT)
    The lifecycle hook allow you to tap into the different stages of a component
    There are 3 main stages of a component:
    1. Mounting
    2. Updating
    3. Unmounting

    All of these lifecycle phases can be covered using useEffect.
    The useEffect function will always run after the function component renders
  */

  useEffect(() => {
    // Here is where you can do code updates
    // This works like componentDidUpdate()
    console.log('This will fire after every render or re-render');
  });

  // You can use useEffect to simulate mounting
  // useEffect takes a second parameter. The second paramter is an array of dependencies
  // This works like componentDidMount()
  // An empty dependency array
  useEffect(() => {
    console.log('This will fire after the first render just like componentDidMount')
  }, []);

  // The dependency array. In this case, the useEffect here is dependent on the internal variable
  // This means that this useEffect, will only run when the internal variable changes
  // This works like componentDidUpdate() with controllable constraints
  useEffect(() => {
    console.log('This will fire only if a variable in the dependency array changes value, in this case the internal variable.')
  }, [internal])

  // useEffect also allows the callback function to return a function. This function will run like unmount
  useEffect(() => {
    // Return a function that will act like componentDidUnmount
    return () => {
      console.log('Component is going to unmount!');
    }
  });

  // We want to allow the dialog component to be closed (unmounted)
  // In order for the dialog component to be closed, it needs the ability
  // to modify the showDialog state. We can pass the setShowDialog function
  // into the Dialog component as a prop.

  return (
    <div className="App">
      <p>Hello World!</p>
      <section>
        <p>Click the button below!</p>
        <Button onClick={clickMe}>
          Click me!
        </Button>
        <Button onClick={() => anotherButton()}>
          Another button!
        </Button>
        <Button onClick={() => setInternal(!internal)}>
          Change Internal State
        </Button>
        <Button onClick={() =>  setShowDialog(true)}>
          Show Dialog
        </Button>
        {showDialog && (
          <Dialog closeDialog={() => setShowDialog(false)} />
        )}
      </section>
      <section>
        <Counter />
      </section>
    </div>
  );
}

export default App;
