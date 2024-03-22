//we get the html element
const rootElement = document.getElementById('root');
// create our first react component
const Greeting = ({ name }) => <p>Hello { name }</p>

// create an object that interact with the React application
const root = ReactDOM.createRoot(rootElement);
root.render(<Greeting name='Jhony' />);