import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
      e.preventDefault();
      dispatch(addColumn({ title, icon }));
      setIcon('');
      setTitle('');
      console.log("add new column");
  }

return (
      <form onSubmit={handleSubmit} className={styles.columnForm}>
          <span className={styles.inputText}>Title:</span>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className={styles.inputStyle} />

          <span className={styles.inputText}>Icon:</span>
          <input type="text"  value={icon}  onChange={e => setIcon(e.target.value)} className={styles.inputStyle}/>
          <Button>Add column</Button>
      </form>
);
};

export default ColumnForm;