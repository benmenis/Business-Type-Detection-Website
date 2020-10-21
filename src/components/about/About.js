import React, { useEffect } from 'react';

const About = (props) => {

    useEffect( () => {
        props.changeActive('about')
    }, []);

    return(
        <div className="ui container" style={{ marginTop:'100px' }}>
            <h1 className="ui header">About us</h1>
            <p>
                this site and API have been developed by us as a final project of Software Engineer BSc.
            </p>
            <h3 className="ui header">What is about?</h3>
            <p>
                this api is specified to detect a type for company name.
                for this time it is working on companies in Israel only.
            </p>
        </div>
    );
};

export default About;