import './Result.css';
import React from 'react';

const Result = result => {
    console.log(result, typeof result)
    return(
        <div className="result">
            <h1>{result.result}</h1>
            <div>tyring to add something for git practice</div>

            <div>tyring to add another pice for git practice</div>
        </div>
    );
};

export default Result;