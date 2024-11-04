import type { FC } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../shared/api/queryClient';

import { TodoList } from '../modules/TodoList/TodoList';

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  );
};
