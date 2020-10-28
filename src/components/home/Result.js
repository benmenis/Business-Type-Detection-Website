import './Result.css';
import React from 'react';
import Spinner from './Spinner';

const Result = ({ result }) => {
    if (!result){
        return null;
    }

    if (result.company_type){
        return(
            <div >
                <h2 className="beforeresult">{`'${result.results_for}' is belong to type:`}</h2>
                <h1 className="result">{result.company_type}</h1>
            </div>
        );
    }
    return <Spinner />
};

export default Result;