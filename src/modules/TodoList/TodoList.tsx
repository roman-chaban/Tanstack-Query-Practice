import { useState, type FC } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getTodos } from '../../shared/api/getTodos';

import { TodoItem } from '../TodoListItem/TodoListItem';

import { TodDto } from '../../types/todo';
import { Page, PaginatedResult } from '../../types/pagination';

import styles from '../../assets/app.module.css';

export const TodoList: FC = () => {
  const [page, setPage] = useState<Page>(1);

  const {
    isLoading,
    data: todos,
    error,
  } = useQuery<PaginatedResult<TodDto> | null>({
    queryKey: ['todo', 'list', { page }],
    queryFn: ({ signal }) => getTodos({ page }, { signal }),
  });

  if (isLoading) {
    return <div>Loading Todos....</div>;
  }

  if (error || !todos) {
    return <div>Error loading todos.</div>;
  }

  return (
    <div>
      <ul className={styles.taskList}>
        {todos.data.map((item: TodDto) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
      <div className={styles.paginationButtons}>
        <button
          onClick={() => setPage((page) => Math.max(1, page - 1))}
          className={styles.prevButton}
          disabled={todos.prev === null}
        >
          Prev page
        </button>
        <button
          onClick={() => setPage((page) => page + 1)}
          className={styles.nextButton}
          disabled={todos.next === null}
        >
          Next page
        </button>
      </div>
    </div>
  );
};
