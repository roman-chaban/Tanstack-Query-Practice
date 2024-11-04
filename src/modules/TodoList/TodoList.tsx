import type { FC } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getTodos } from '../../shared/api/getTodos';

import { TodoItem } from '../TodoListItem/TodoListItem';

import { TodDto } from '../../types/todo';

import styles from '../../assets/app.module.css';

export const TodoList: FC = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['todo', 'list'],
    queryFn: getTodos,
  });

  if (isLoading) {
    return <div>Loading Todos....</div>;
  }

  if (error) {
    console.error('Error...');
  }

  return (
    <ul className={styles.taskList}>
      {data?.map((item: TodDto) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
