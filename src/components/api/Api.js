import React, { useEffect } from 'react';

const Api = (props) => {

    useEffect( () => {
        props.changeActive('api')
    }, []);

    return(
        <div className="ui container" style={{ marginTop:'100px', paddingLeft:'200px' }}>
            <h1 className="ui header">Type Detection API</h1>
            <p>
                this is our api. get started and use it easily.
            </p>
            <h3 className="ui header">What is about?</h3>
            <p>
                this api is specified to detect a type for company name.
                for this time it is working on companies in Israel only.
            </p>
        </div>
    );
}

export default Api;