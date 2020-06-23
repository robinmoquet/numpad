import React from 'react';
import { connect } from 'react-redux';
import {startGame, restartGame} from '../actions/actions';

const Navbar = (state: any) => {

    const handleClickThemePicker = (event: any) => {
        event.preventDefault();
        const { body } = document;
        body.classList.toggle('dark-mode');
    };

    const handleClickNewGame = () => {
        state.restartGame();
    }

    const handleClickStartGame = () => {
        state.startGame();
    }

    return (
        <div className="nav-bar flex justify-between items-center">
            <h2 className="font-bold text-lg main-title">Num Pad</h2>
            <div className="flex items-center">
                {(state.onGame ? (
                    <button className="mr-4" onClick={handleClickNewGame}>Nouvelle partie</button>
                ) : (
                    <button className="mr-4" onClick={handleClickStartGame}>Démarrer la partie</button>
                ))}
                <a
                    href="/theme"
                    className="theme-picker"
                    onClick={handleClickThemePicker}
                    >
                    <i className="material-icons">invert_colors</i>
                </a>
            </div>
        </div>
    );
}

// @ts-ignore
export default connect(state => ({onGame: state.onGame}), {startGame, restartGame})(Navbar);
