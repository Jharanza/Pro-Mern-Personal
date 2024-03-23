class DiaryFilter extends React.Component {
    render() {
        return <div>It is a placeholder for the Diary Filter</div>
    };
}

class Title extends React.Component {
    render() {
        const styleTitle = { height: '15px', color: 'red'}
        return (
            <h1 style={ styleTitle }>{ this.props.title }</h1>
        )
    }
}

class Task extends React.Component {
    render() {
        const styleTask = { height: '10px', color: 'blue'};
        return (
            <div > 
                <h3 style={ styleTask }>{ this.props.task }</h3>
            </div>
        )
    }
}


class DiaryAdd extends React.Component {
    render() {
        return (
            <div>
                <Title title="My first title" />
                <Task task='1. My first task' />
            </div>
        )
    };
}

class MyDiary extends React.Component {
    render() {
        return (
            <div>
            <h1>Issue Tracker</h1>
            <DiaryFilter />
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
