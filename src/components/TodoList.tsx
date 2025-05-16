import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useTodoStore from '../store';
import { useNavigate } from 'react-router-dom';

function TodoList() {
  const { todos, deleteTodo } = useTodoStore();
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = todos.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
  const navigate = useNavigate();

  return (
   <div className="p-6 max-w-3xl mx-auto space-y-6 bg-gray-50 min-h-screen">
  <h1 className="text-3xl font-bold text-gray-800 mb-4">Todo List</h1>

  {/* Search Input */}
  <Input
    placeholder="Search todos..."
    value={search}
    onChange={e => setSearch(e.target.value)}
    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  {/* Todo Cards */}
  <div className="space-y-4">
    {filtered.map(todo => (
      <Card key={todo.id} className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{todo.title}</h3>
          <p className="text-gray-600 mt-1">{todo.description}</p>
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => navigate(`/edit/${todo.id}`)} 
            className="px-3 py-1 border border-blue-500 text-blue-600 hover:bg-blue-50 rounded-md transition duration-200">
            Edit
          </Button>

          <Button
            variant="destructive"
            onClick={() => setDeleteId(todo.id)}
            className="px-3 py-1 bg-red-500 text-white hover:bg-red-600 rounded-md transition duration-200"
          >
            Delete
          </Button>
        </div>
      </Card>
    ))}
  </div>

  {/* Delete Confirmation Dialog */}
  <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
    <DialogContent className="p-6 rounded-lg shadow-lg">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">Confirm Delete</DialogTitle>
      </DialogHeader>
      <p className="text-gray-700 mb-4">Are you sure you want to delete this todo?</p>
      <DialogFooter className="flex justify-end space-x-2">
        <Button
          variant="outline"
          onClick={() => setDeleteId(null)}
          className="px-4 py-2 border border-gray-400 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          Cancel
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            if (deleteId) deleteTodo(deleteId);
            setDeleteId(null);
          }}
          className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md"
        >
          Confirm
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</div>
  );
}

export default TodoList;
