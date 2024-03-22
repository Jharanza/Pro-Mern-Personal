//we get the html element
const rootElement = document.getElementById('root');
// create our first react component
const Greeting = ({ name }) => React.createElement(
  'p',
  null,
  'Hello ',
  name
);

// create an object that interact with the React application
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(Greeting, { name: 'World' }));