import { Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoFormPage from './components/TodoFormPage';

function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/add" element={<TodoFormPage />} />
      <Route path="/edit/:id" element={<TodoFormPage isEdit/>} /> {/* useParams inside */}
    </Routes>
    
  );
}

export default AppRoutes;
