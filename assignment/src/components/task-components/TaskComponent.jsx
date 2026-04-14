import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

function TaskComponent() {
    const [tasks, setTasks] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (!user) return;
        const q = query(collection(db, 'tasks'), where('userId', '==', user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setTasks(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
        });
        return unsubscribe;
    }, [user]);

    async function deleteTask(id) {
        if (!window.confirm('Are you sure you want to delete this task?')) return;
        await deleteDoc(doc(db, 'tasks', id));
    }

    return (
        <div>
            <h3>Your Tasks:</h3>
            {tasks.length === 0 ? (
                <p>No tasks yet. Add one above!</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <strong>{task.taskName}</strong>
                            {task.taskDescription && <span> — {task.taskDescription}</span>}
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskComponent;
