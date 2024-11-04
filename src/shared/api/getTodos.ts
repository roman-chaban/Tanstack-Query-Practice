import { TodoItems } from '../../types/todo';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = async () => {
  try {
    const request = await fetch(BASE_URL, { method: 'GET' });

    if (!request.ok) {
      console.error('Fetching error by server');
    }

    const data: TodoItems = await request.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed fetching ${error.message}`);
    }
  }
};
