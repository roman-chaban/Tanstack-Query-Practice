import type { FC } from 'react';

import { TodDto } from '../../types/todo';

import styles from '../../assets/app.module.css';

interface TodoItemProps {
  item: TodDto;
}

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  return (
    <li className={styles.listItem}>
      <h4 className={styles.listItemTitle}>{item.title}</h4>
    </li>
  );
};
