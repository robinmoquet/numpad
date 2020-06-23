import { createStore } from 'redux';
import { UP_SCORE, DOWN_REST_QUESTION, START_GAME, RESTART_GAME, END_GAME } from '../actions/actions-type';

const defaultState = {
    nbQuestion: 10,
    restQuestion: 10,
    score: 0,
    calcul: null,
    onGame: false
}

function mainReducer (state = defaultState, action: any) {
    switch (action.type) {
        case UP_SCORE:
            return {
                ...state,
                score: state.score + 1
            }
        case DOWN_REST_QUESTION: 
            return {
                ...state,
                restQuestion: state.restQuestion - 1
            }
        case START_GAME: 
            return {
                ...state,
                onGame: true,
                nbQuestion: action.payload.length,
                restQuestion: action.payload.length,
                calcul: action.payload
            }
        case RESTART_GAME: 
            return {
                ...state,
                onGame: true,
                nbQuestion: action.payload.length,
                restQuestion: action.payload.length,
                calcul: action.payload,
                score: 0
            }

        case END_GAME: 
            return {
                ...state,
                onGame: false
            }

        default:
            return state;
    }
}

export let store = createStore(mainReducer);