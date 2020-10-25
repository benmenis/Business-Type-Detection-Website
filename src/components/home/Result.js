import './Result.css';
import React from 'react';

const Result = ({ result }) => {

    if (result){
        return(
            <div >
                <h2 className="beforeresult">{`'${result}' is belong to \n type:`}</h2>
                <h1 className="result">{result}</h1>
            </div>
        );
    }
    return <div/>
};

export default Result;