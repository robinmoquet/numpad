import React, {useState} from 'react';
import {connect} from 'react-redux';
import { upScore, downRestQuestion, endGame } from '../actions/actions';
import { checkIfValidRes } from '../utils/calcul';

const Form = (state: any) => {

    const [res, setRes] = useState("");
    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);

    const reset = (e: any) => {
        e.preventDefault();
        setRes("");
    }

    const handleChange = (event: any) => {
        setRes(event.target.value);
    }

    const checkValidation = (e: any) => {
        e.preventDefault();
        state.downRestQuestion();
        if (checkIfValidRes(state.calcul[state.rest - 1], parseInt(res, 10))) {
            if (state.rest === 1) {
                state.endGame();
            } else {
                state.upScore();
            }
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 4000);
        } else {
            setErr(true);
            setTimeout(() => {
                setErr(false);
            }, 4000);
        }
        setRes("");
    } 

    return (
        <div className="form">
            <form action="">
                <input type="text" placeholder="Tapez votre réponse" className="reveal-2" value={res} onChange={handleChange} />
                <div className="pt-5 flex justify-between items-center reveal-3">
                    <button className="mr-4 button--danger" onClick={reset}>Effacer</button>
                    <button className="mr-4 button--valid" onClick={checkValidation}>Valider</button>
                </div>
            </form>
            {(err ? (
                <p className="erreur-form">Oups !</p>
            ) : null)}
            {(success ? (
                <p className="success-form">Bravo !</p>
            ) : null)}
        </div>
    );
}

// @ts-ignore
export default connect(state => ({calcul: state.calcul, rest: state.restQuestion}), {upScore, downRestQuestion, endGame})(Form);
