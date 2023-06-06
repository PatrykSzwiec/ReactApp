import styles from '../Lists/Lists.module.scss';
import ListForm from "../ListForm/ListForm";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchListsSuccess } from '../../redux/listsRedux';


const Lists = () => {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the lists data from the server
    fetch('http://localhost:3011/lists')
      .then((response) => response.json())
      .then((data) => {
        // Dispatch the action to store the fetched lists data in Redux store
        dispatch(fetchListsSuccess(data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.map(list => (
        <Link
          key={list.id}
          to={'/list/' + list.id}
          className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link>
      ))}
      <ListForm/>
    </section>
  );
}
export default Lists;