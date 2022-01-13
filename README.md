# react-ts-01
learn reactjs + typescript + cypress + vite + bootstrap 5

## learning 01 - FunctionalCompopent

### Functional Components

- A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.
- There is no render method used in functional components.
- Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
- React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
- Hooks can be easily used in functional components.
```
example: const [name,SetName]= React.useState(‘ ‘)
```
- Constructors are not used .

###  Class Components
- A class component requires you to extend from React. Component and create a render function which returns a React element.
- It must have the render() method returning HTML
- Also known as Stateful components because they implement logic and state.
- React lifecycle methods can be used inside class components (for example, componentDidMount).
- It requires different syntax inside a class component to implement hooks.
```
example: constructor(props) {

   super(props);

   this.state = {name: ‘ ‘}

}
```
- Constructor are used as it needs to store state.

[Source](https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/)