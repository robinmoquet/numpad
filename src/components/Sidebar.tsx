import React from 'react';
import { connect } from 'react-redux';

const Sidebar = (state: any) => {
    const {nbQuestion, rest, score}: {nbQuestion: number, rest: number, score: number} = state;
    return (
        <div className="sidebar w-1/3 reveal-1">
            <ul className="stats">
                <li className="flex justify-between items-center">
                    <span>Nombre de question(s): </span>
                    <span className="bullet">{nbQuestion}</span>
                </li>
                <li className="flex justify-between items-center">
                    <span>Nombre de question(s) restante(s): </span>
                    <span className="bullet">{rest}</span>
                </li>
                <li className="flex justify-between items-center">
                    <span className="font-bold">Score: </span>
                    <span className="bullet bullet--danger">{score}</span>
                </li>
            </ul>
        </div>
    );
}
// @ts-ignore
export default connect(state => ({nbQuestion: state.nbQuestion, rest: state.restQuestion, score: state.score}), null)(Sidebar);
