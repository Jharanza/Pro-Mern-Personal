class DiaryFilter extends React.Component {
    render() {
        return <div>It is a placeholder for the Diary Filter</div>
    };
}

class DiaryTable extends React.Component {
    render() {
        return <div>It is a table of the diary</div>
    };
}

class DiaryAdd extends React.Component {
    render() {
        return <div>It is a Diary Add entry form</div>
    };
}

class MyDiary extends React.Component {
    render() {
        return (
            <div>
            <h1>Issue Tracker</h1>
            <DiaryFilter />
            <hr />
            <DiaryTable />
            <hr />
            <DiaryAdd />
            </div>
        )
    }
}


// create an object that interact with the React application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<MyDiary />);
