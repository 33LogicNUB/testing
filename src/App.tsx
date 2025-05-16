import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import TodoFormPage from './components/TodoFormPage';
<<<<<<< HEAD
import TodoList from './components/TodoList';
=======
>>>>>>> 34be5caec4e3e576fab96fe9a3271b92b024a227



function App() {
  return (
    <Router>
      <div className="max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <TodoFormPage />
        <AppRoutes />
        
      </div>
    </Router>
  );
}

export default App;
