import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';




function App() {
  return (
    <Router>
      <div className="max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <AppRoutes />
        
      </div>
    </Router>
  );
}

export default App;
