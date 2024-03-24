const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


const workDone = [
    {
        id: 1, status: 'done', owner: 'Touch-Me', createdAt: new Date('2024-01-13'), difficult: 25,
        completionDay: new Date('2024-01-20'), title: 'Add new interface'
    },
    {
        id: 2, status: 'Assigned', owner: 'Neia', createdAt: new Date('2024-03-17'), difficult: 14,
        completionDay: undefined, title: 'Add 2 payment gateways' 
    },
    {
        id: 3, status: null, owner: null, createdAt: new Date('2024-03-19'), difficult: 30,
        completionDay: null, title: 'transform class components in function components'
    }
]

function Title({ titleDiary }) {
    return (
        <h4 style={{ color: 'green' }}>{ titleDiary } Date: { new Date().toUTCString() }</h4>
    );
}

function Task({ task }) {
    return (
        <div>
            <h4 style={{ color: 'blue' }}>Id: { task.id }</h4>
            <h4>Status: { task.status }</h4>
            <h4>Owner: { task.owner ? task.owner : 'not assigned' }</h4>
            <h4>Created at: { task.createdAt.toDateString() }</h4>
            <h4>Difficult: { task.difficult }</h4>
            <h4 style={{ color: 'red' }}>Completion date: { task.completionDay ? task.completionDay.toDateString() : 'not completed' }</h4>
            <h4>Title: { task.title }</h4>
        </div>
    );
}

function Diary({ workDone }) {
    const tasks =  workDone.map(task => <Task key={ task.id } task={ task } />)
    return (
        <div>
            <Title titleDiary="Work Done" />
            { tasks }
        </div>
    )
}



root.render(<Diary workDone={ workDone }/>);
