import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';


const ColumnForm = (props) => {

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId: props.listId, isFavorite: props.isFavorite }));
    setIcon('');
    setTitle('');
  }

return (
  <form onSubmit={handleSubmit} className={styles.columnForm}>
    <span className={styles.inputText}>Title:</span>
    <input type="text"
      value={title}
      onChange={e => setTitle(e.target.value)}
      className={styles.inputStyle}
      placeholder="Enter title text"
      required
    />

    <span className={styles.inputText}>Icon:</span>
    <input type="text"
      value={icon}
      onChange={e => setIcon(e.target.value)}
      className={styles.inputStyle}
      placeholder="Enter icon name"
    />
    <Button>Add column</Button>
  </form>
);
};

export default ColumnForm;