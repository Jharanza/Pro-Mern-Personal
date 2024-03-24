const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const workDone = [{
    id: 1, status: 'done', owner: 'Touch-Me', createdAt: new Date('2024-01-13'), difficult: 25,
    completionDay: new Date('2024-01-20'), title: 'Add new interface'
}, {
    id: 2, status: 'Assigned', owner: 'Neia', createdAt: new Date('2024-03-17'), difficult: 14,
    completionDay: undefined, title: 'Add 2 payment gateways'
}, {
    id: 3, status: null, owner: null, createdAt: new Date('2024-03-19'), difficult: 30,
    completionDay: null, title: 'transform class components in function components'
}];

function Title({ titleDiary }) {
    return React.createElement(
        'h4',
        { style: { color: 'green' } },
        titleDiary,
        ' Date: ',
        new Date().toUTCString()
    );
}

function Task({ task }) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h4',
            { style: { color: 'blue' } },
            'Id: ',
            task.id
        ),
        React.createElement(
            'h4',
            null,
            'Status: ',
            task.status
        ),
        React.createElement(
            'h4',
            null,
            'Owner: ',
            task.owner ? task.owner : 'not assigned'
        ),
        React.createElement(
            'h4',
            null,
            'Created at: ',
            task.createdAt.toDateString()
        ),
        React.createElement(
            'h4',
            null,
            'Difficult: ',
            task.difficult
        ),
        React.createElement(
            'h4',
            { style: { color: 'red' } },
            'Completion date: ',
            task.completionDay ? task.completionDay.toDateString() : 'not completed'
        ),
        React.createElement(
            'h4',
            null,
            'Title: ',
            task.title
        )
    );
}

function Diary({ workDone }) {
    const tasks = workDone.map(task => React.createElement(Task, { key: task.id, task: task }));
    return React.createElement(
        'div',
        null,
        React.createElement(Title, { titleDiary: 'Work Done' }),
        tasks
    );
}

root.render(React.createElement(Diary, { workDone: workDone }));