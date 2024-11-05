import { TodDto } from '../../types/todo';

import { PaginatedResult } from '../../types/pagination';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos' as string;

export const getTodos = async (
  { page }: { page: number },
  { signal }: { signal: AbortSignal }
): Promise<PaginatedResult<TodDto> | null> => {
  try {
    const request = await fetch(`${BASE_URL}?_page=${page}&_limit=5`, {
      method: 'GET',
      signal,
    });

    if (!request.ok) {
      console.error('Fetching error by server');
      return null;
    }

    const data: TodDto[] = await request.json();

    return {
      data,
      first: 1,
      items: data.length,
      last: Math.ceil(200 / 10),
      next: page < Math.ceil(200 / 10) ? page + 1 : null,
      pages: Math.ceil(200 / 10),
      prev: page > 1 ? page - 1 : null,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        `Failed fetching: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      return null;
    }
  }
  return null;
};
