import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { columnId: props.columnId, title}})
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