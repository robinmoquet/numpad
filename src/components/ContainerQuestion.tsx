import React from 'react';
import Question from './Question';
import Form from './Form';

const ContainerQuestion = () => {
    return (
        <div className="container-question w-2/3 pr-10">
            <Question />
            <Form />
        </div>
    );
}

export default ContainerQuestion;
