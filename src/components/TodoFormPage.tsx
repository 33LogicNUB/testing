import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useTodoStore from '../store';
import { todoSchema} from '../types';
import type { TodoForm } from '../types';
function TodoFormPage({ isEdit = false }: { isEdit?: boolean }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { todos, addTodo, updateTodo } = useTodoStore();
  const defaultValues = isEdit && id ? todos.find(t => t.id === id) : undefined;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TodoForm>({ resolver: zodResolver(todoSchema), defaultValues });

  const onSubmit = (data: TodoForm) => {
    if (isEdit && id) {
      updateTodo(id, data);
    } else {
      addTodo({ id: crypto.randomUUID(), ...data });
    }
    navigate('/');
  };

 return (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto space-y-4"
  >
    <h2 className="text-2xl font-semibold text-gray-800">
      {isEdit ? 'Edit Todo' : 'Add New Todo'}
    </h2>

    <div>
      <Input
        placeholder="Title"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...register('title')}
      />
      {errors.title && (
        <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
      )}
    </div>

    <div>
      <Textarea
        placeholder="Description"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={4}
        {...register('description')}
      />
      {errors.description && (
        <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
      )}
    </div>

    <Button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
    >
      {isEdit ? 'Update' : 'Add'} Todo
    </Button>
  </form>
);

}

export default TodoFormPage;
