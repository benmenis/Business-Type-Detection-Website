import './Result.css';
import React from 'react';
import Spinner from './Spinner';

const Result = ({ result }) => {
    if (!result){
        return <div />
    }

    if (result.company_type){
        return(
            <div >
                <h2 className="beforeresult">{`'${result.company_name}' is belong to \n type:`}</h2>
                <h1 className="result">{result.company_type}</h1>
            </div>
        );
    }
    return <Spinner />
};

export default Result;