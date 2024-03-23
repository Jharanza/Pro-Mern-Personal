const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

class Title extends React.Component {
    render() {
        if (typeof this.props.titleDiary !== 'string') console.warn('Invalid prop type. It must be a string')
        return (
            <h2 style={{ color: 'red', height: '10px'}}>{ this.props.titleDiary }</h2>
        )
    }
}

class Task extends React.Component {
    render() {
        if (typeof this.props.idx !== 'number') console.warn('Invalid prop type. It must be a number');
        if (typeof this.props.subTitle !== 'string') console.warn('Invalid prop type. It must be a string');
        return (
            <h4 style={{ color: 'blue', height: '5px'}}>{ this.props.idx } { this.props.subTitle }</h4>
        )
    }
}

class Diary extends React.Component {
    render() {
        return (
            <div>
            <Title titleDiary='My Diary' />
            <Task idx={ 1 } subTitle='Wash the dishes' />
            <Task idx={ 2 } subTitle='Make the bed' />
            </div>
        )
    }
}

root.render(<Diary />)
