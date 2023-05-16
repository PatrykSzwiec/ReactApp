import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';

const ColumnForm = props => {

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
      e.preventDefault();
      props.action({title: title, icon: icon });// Call function from props that will add new column for column array at app.js
      setIcon('');
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