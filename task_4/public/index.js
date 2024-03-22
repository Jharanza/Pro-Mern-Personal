class DiaryFilter extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'It is a placeholder for the Diary Filter'
        );
    }
}

class DiaryTable extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'It is a table of the diary'
        );
    }
}

class DiaryAdd extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'It is a Diary Add entry form'
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
            React.createElement(DiaryTable, null),
            React.createElement('hr', null),
            React.createElement(DiaryAdd, null)
        );
    }
}

// create an object that interact with the React application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(MyDiary, null));