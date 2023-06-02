import styles from './CardForm.module.scss';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        // Check if the title is empty
        if (title.trim() === '') {
            return; // Do nothing if the title is empty
        }

        dispatch(addCard({columnId: props.columnId, title}));
        setTitle('');
    };

	return (
        <form className={styles.CardForm} onSubmit={handleSubmit}>
            <TextInput className={styles.CardFormInput}
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter card title"
            />
            <Button className={styles.CardFormButton}>Add card</Button>
        </form>
	);
};

export default CardForm;