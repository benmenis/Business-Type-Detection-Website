import './Result.css';
import React from 'react';

const Result = result => {
    console.log(result, typeof result)
    return(
        <div className="result">
            <h1>{result.result}</h1>
        </div>
    );
};

export default Result;