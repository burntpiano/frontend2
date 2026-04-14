import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

function TaskForm() {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const { user } = useAuth();

    async function submitTask(e) {
        e.preventDefault();
        if (!taskName.trim()) return;
        await addDoc(collection(db, 'tasks'), {
            userId: user.uid,
            taskName,
            taskDescription,
            createdAt: serverTimestamp(),
        });
        setTaskName('');
        setTaskDescription('');
    }

    return (
        <form onSubmit={submitTask}>
            <input
                type="text"
                placeholder="Task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Task description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;
