/*

Update Phase

During this phase, a React component is already inserted into the DOM. This DOM represents a component's current state, and when that state changes, 
React needs to evaluate how a new state is going to mutate the previously rendered DOM.

A React component has  ve lifecycle methods that belong to a component's updating phase:
 
 • componentWillReceiveProps() 
 • shouldComponentUpdate()
 • componentWillUpdate()
 • render()
 • componentDidUpdate()

 • componentWillReceiveProps()
   This method is invoked  first in the component lifecycle's updating phase. 
   It is called when a component receives new properties from its parent component.
   
   This method is an opportunity for us to compare the current component's properties using the this.props object with the next 
   component's properties using the nextProps object. 
   Based on this comparison, we can choose to update the component's state using the this.setState() function, 
   which will not trigger an additional render in this scenario.
   No matter how many times you call this.setState() in the componentWillReceiveProps() method, it won't trigger any additional renders of that component. 
   React does an internal optimization where it batches the state updates together.

 • shouldComponentUpdate()
   method allows us to decide whether the next component's state should trigger the component's re-rendering or not. 
   This method returns a Boolean value, which by default is true, but you can return false, and the following component methods won't be called:
    • componentWillUpdate() 
    • render()
    • componentDidUpdate()

   This method is invoked second in the component lifecycle's updating phase.

 • componentWillUpdate()  
   This is invoked just before rendering when new props or state are being received. 
   Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.
   It gets the following two arguments:
    • nextProps: The next properties object
    • nextState: The next state object
   
   After calling the componentWillUpdate() method, React invokes the render() method that performs the DOM update. 
   Then, the componentDidUpdate() method is called.
   Note that you cannot call this.setState() here; nor should you do anything else (e.g. dispatch a Redux action) 
   that would trigger an update to a React component before componentWillUpdate() returns.

 • componentDidUpdate()
   The componentDidUpdate() method is called immediately after React updates the DOM. It gets these two arguments:
    • prevProps: The previous properties object
    • prevState: The previous state object
  
   
  After componentDidUpdate() is called, the updating cycle ends. 
  A new cycle is started when a component's state is updated or a parent component passes new properties. 
  Or when you call the forceUpdate() method, it triggers a new updating cycle, but skips the shouldComponentUpdate() method on a 
  component that triggered the update. However, shouldComponentUpdate() is called on all the child components as per the usual updating phase. 
  Try to avoid using the forceUpdate() method as much as possible; this will promote your application's maintainability.

*/


