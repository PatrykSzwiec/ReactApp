import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import SearchForm from "../SearchForm/SearchForm";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate} from 'react-router';
import { getColumnsByList } from '../../redux/columnsRedux';
import {fetchListsSuccess } from '../../redux/listsRedux';

const List = () => {

  const { listId } = useParams();
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => state.lists.find(list => list.id === listId));
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3011/lists/${listId}`)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchListsSuccess([data]));
      })
      .catch(error => {
        console.error(error);
      });
  }, [listId, dispatch]);

  if (!listData) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column =>
          <Column key={column.id}{...column} />)}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );

};

export default List;