const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

class Title extends React.Component {
    render() {
        if (typeof this.props.titleDiary !== 'string') console.warn('Invalid prop type. It must be a string');
        return React.createElement(
            'h2',
            { style: { color: 'red', height: '10px' } },
            this.props.titleDiary
        );
    }
}

class Task extends React.Component {
    render() {
        if (typeof this.props.idx !== 'number') console.warn('Invalid prop type. It must be a number');
        if (typeof this.props.subTitle !== 'string') console.warn('Invalid prop type. It must be a string');
        return React.createElement(
            'h4',
            { style: { color: 'blue', height: '5px' } },
            this.props.idx,
            ' ',
            this.props.subTitle
        );
    }
}

class Diary extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Title, { titleDiary: 'My Diary' }),
            React.createElement(Task, { idx: 1, subTitle: 'Wash the dishes' }),
            React.createElement(Task, { idx: 2, subTitle: 'Make the bed' })
        );
    }
}

root.render(React.createElement(Diary, null));