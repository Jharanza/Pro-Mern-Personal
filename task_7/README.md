<h1>Validate Properties</h1>
<p>In this project, we validate the types of the props. Because currently, the propTypes was moved to the 'prop-type' dependency, we have to write a manaul type checking</p>

<h3>Changes</h3>
<li>We transform all the props to React.props.myProp instead of React.props.children</li>
<li>Before the return statement we write a custom checking</li>
