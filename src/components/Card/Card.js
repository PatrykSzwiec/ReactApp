import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { favoriteCardToggler, removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        dispatch(favoriteCardToggler(props.id))
    }

    const removeClick = e => {
      e.preventDefault();
      dispatch(removeCard(props.id));
  }


  return (
    <li className={styles.card}>{props.title}
      <div className={styles.buttons}>
            <button onClick={handleClick} className={clsx(styles.button, props.isFavorite && styles.isActive)}>
              <i className={'fa fa-star-o'} />
            </button>
            <button onClick={removeClick} className={styles.activeButton}>
              <i className={'fa fa-trash'} />
            </button>
      </div>
    </li>
  );
};

export default Card;