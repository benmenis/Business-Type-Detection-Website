import './About.css';
import React, { useEffect } from 'react';

const About = (props) => {

    useEffect( () => {
        props.changeActive('about')
    }, []);

    return(
        <div className="ui container" >
            <div style={{ padding:'150px', paddingBottom:'50px' }}>
                <h1 style = {{ fontSize:'50px' }}>About us</h1>

                <br/>

                <div>
                    <p className="small" style = {{  margin: '0' }}>
                        this site and the API have been developed by us as the final project of Software Engineer BSc. 
                    </p>
                    <h3 className='mid' style = {{ margin: '0' }}>
                        Using Machine Learning models, we can find for you the type of a Business or a Company. 
                    </h3>
                </div>

                <br />
                <br />

                <div>
                    <div className="ui header big">
                        <h3 className="big">What's it about?</h3>
                    </div>
                    <p className="small" style = {{ margin: '0' }}>
                        this web page is using API develeoped by us to detect Company or Business type.
                        the type is one of 32 types that we defined.
                    </p>
                    <h3 style = {{ margin: '0' }}>for this time it is working on businesses and companies in Israel only.</h3>
                    <p className="small" >
                        You can navigate to Api tab read more about our api and how to use it. 
                    </p>
                </div>

                <br />
                <br />

                <div>
                    <div className="ui header big">
                        <h3 className="big">How is it working?</h3>
                    </div>
                    <p className="small" style = {{ display:'inline', margin: '0' }}>
                        behind the scenes, there is a Machine Learning model that we have fitted with some data that includes some businesses and their types.
                        the model and some other functions and algorithms are storing in our api server. 
                        by enter some business name, you actualy sending a request to our api, then the api use the ML model to predict the type and sends it back.
                    </p>
                    <p className="small">
                        you can tap on the Github icon on the up-right corner to see the origin Code and some other things about this project.
                    </p>
                </div>

                <br />
                <br />

                <div>
                    <div className="ui header big">
                        <h3 className="big">Our Github accounts</h3>
                    </div>
                    <a className="small" href='https://github.com/benmenis'>Israel's Github</a>
                    <br/>
                    <a className="small" href='https://github.com/benmenis'>Yuri's Github</a>
                </div>

                <br/>
                <br/>

                <div>
                    <div className="ui header big">
                        <h3 className="big">Our Linkedin accounts</h3>
                    </div>
                    <a className="small" href='https://www.linkedin.com/in/israel-ben-menachem-79123a161/'>Israel's Github</a>
                    <br/>
                    <a className="small" href='https://www.linkedin.com/in/yuriy-kovalyov/'>Yuri's Github</a>
                </div>
            </div>

        </div>
    );
};

export default About;