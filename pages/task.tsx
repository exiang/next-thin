import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';

interface TaskProps {
    // You might might need to an manually add an import
    // if not using VSCode: `import { Task } from 'thin-backend';`

    task: Task;
}

function Task({ task }: TaskProps) {
    return <div>{task.title} created by {task.user.email}</div>
}

function Tasks() {
    const tasks = useQuery(query('tasks').orderBy('createdAt'));

    if (tasks === null) {
        return <div>Loading ...</div>
    }

    return <div>
        {tasks.map(task => <Task task={task} key={task.id} />)}
    </div>
}

export default Tasks;