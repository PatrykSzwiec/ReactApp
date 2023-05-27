import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = props => {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({title: title}, props.columnId);
        setTitle('');
    };

	return (
        <form className={styles.CardForm} onSubmit={handleSubmit}>
            <TextInput className={styles.CardFormInput} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button className={styles.CardFormButton}>Add card</Button>
        </form>
	);
};

export default CardForm;