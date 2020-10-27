import './About.css';
import React, { useEffect } from 'react';

const About = (props) => {

    useEffect( () => {
        props.changeActive('about')
    }, []);

    return(
        <div className="ui container" style={{ marginTop:'100px', paddingLeft:'200px' }}>
            <h1 style = {{ fontSize:'50px' }}>About us</h1>
            <br/>
            <br/>
            <div>
                <p className="small">
                    this site and the API have been developed by us as the final project of Software Engineer BSc.


                </p>
                <h4 className='mid'>
                        Using Machine Learning models, we can find for you the type of a Company or a Business. 
                    </h4>
            </div>
            <br/>
            <div className="ui header big">
                <h3 className="big">What's it about?</h3>
            </div>
            <p className="small">
                this web page is using API that develeoped by us to detect Company or Business type.
            </p>
            <h3>for this time it is working on companies in Israel only.</h3>
            <footer>
                for more information.. 
            </footer>
        </div>
    );
};

export default About;