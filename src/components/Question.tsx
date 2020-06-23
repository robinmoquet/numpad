import React from 'react';
import {connect} from 'react-redux';

const Question = (state: any) => {

    return (
        <div className="question p-5 reveal-1">
            <p>Calcul: {state.calcul[state.rest - 1].join(' * ')} = ??</p>
        </div>
    );
}

// @ts-ignore
export default connect(state => ({calcul: state.calcul, rest: state.restQuestion}), null)(Question);
