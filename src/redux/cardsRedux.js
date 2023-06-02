import shortid from "shortid";
import createActionName from "../utils/createActionName";
import strContains from "../utils/strContains";

// selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getFavoriteCard = state => state.cards.filter((card) => card.isFavorite === true);

// actions
const ADD_CARD = createActionName('ADD_CARD');
const FAVORITE_CARD_TOGGLER = createActionName('FAVORITE_CARD_TOGGLER');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const favoriteCardToggler = payload => ({ type: FAVORITE_CARD_TOGGLER, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid() }];
        case FAVORITE_CARD_TOGGLER:
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        case REMOVE_CARD:
            return [...statePart.filter(card => card.id !== action.payload)];
            default:
            return statePart;
    }
}

export default cardsReducer;