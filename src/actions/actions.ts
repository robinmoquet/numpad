import { UP_SCORE, DOWN_REST_QUESTION, START_GAME, RESTART_GAME, END_GAME } from "./actions-type";
import { generateCalcul } from "../utils/calcul";

export const upScore = () => ({
    type: UP_SCORE
})


export const downRestQuestion = () => ({
    type: DOWN_REST_QUESTION
})

export const startGame = () => {

    return {
        type: START_GAME,
        payload: generateCalcul()
    }
}

export const restartGame = () => {

    return {
        type: RESTART_GAME,
        payload: generateCalcul()
    }
}

export const endGame = () => ({
    type: END_GAME
})