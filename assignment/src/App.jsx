import './App.css';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import { TaskForm, TaskComponent } from './components';

function Dashboard() {
    const { user } = useAuth();

    async function handleLogout() {
        await signOut(auth);
    }

    return (
        <div>
            <h2>Welcome, {user.email}!</h2>
            <button onClick={handleLogout}>Logout</button>
            <TaskForm />
            <TaskComponent />
        </div>
    );
}

function AuthPage() {
    const [showLogin, setShowLogin] = useState(true);
    return showLogin
        ? <Login onSwitch={() => setShowLogin(false)} />
        : <SignUp onSwitch={() => setShowLogin(true)} />;
}

function AppContent() {
    const { user } = useAuth();
    return user ? <Dashboard /> : <AuthPage />;
}

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

export default App;
