import './Result.css';
import React from 'react';

const Result = result => {
    console.log('result = ', result)
    

    if (result.result){
        return(
            <div >
                <h2 className="beforeresult">{`${result.result} is belong to \n type:`}</h2>
                <h1 className="result">{"ביגוד והנעלה"}</h1>
            </div>
        );
    }
    return <div/>
};

export default Result;