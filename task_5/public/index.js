class DiaryFilter extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'It is a placeholder for the Diary Filter'
        );
    }
}

class Title extends React.Component {
    render() {
        const styleTitle = { height: '15px', color: 'red' };
        return React.createElement(
            'h1',
            { style: styleTitle },
            this.props.title
        );
    }
}

class Task extends React.Component {
    render() {
        const styleTask = { height: '10px', color: 'blue' };
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                { style: styleTask },
                this.props.task
            )
        );
    }
}

class DiaryAdd extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Title, { title: 'My first title' }),
            React.createElement(Task, { task: '1. My first task' })
        );
    }
}

class MyDiary extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Issue Tracker'
            ),
            React.createElement(DiaryFilter, null),
            React.createElement('hr', null),
            React.createElement(DiaryAdd, null)
        );
    }
}

// create an object that interact with the React application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(MyDiary, null));