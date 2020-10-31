import '../about/About.css';
import React, { useEffect } from 'react';


const Api = (props) => {

    useEffect( () => {
        props.changeActive('api')
    }, []);

    return(
        <div className="ui container" >
            <div style={{ padding:'150px', paddingBottom:'50px' }}>
                <h1 style = {{ fontSize:'50px' }}>Type Detection API</h1>

                <br/>

                <div>
                    <p className="small" style = {{  margin: '0' }}>
                        This API have been developed by us as the final project of Software Engineer BSc. 
                    </p>
                    <h3 className='mid' style = {{ margin: '0' }}>
                        Using Machine Learning models, we can find for you the type of a Business or a Company. 
                    </h3>
                </div>

                <br />
                <br />

                <div>
                    <div className="ui header big">
                        <h3 className="big">Why to use it?</h3>
                    </div>
                    <p className="small" style = {{ margin: '0' }}>
                        Our Api has developed to let you get a business type for free. 
                        There are various Apis like Google Places Api that offer this service, but it's
                        going to cost you 17 $ per 1000 requests.
                        In our platforme, by using Machine Learning technologies, we are commited to over 80 percent success in predicting 
                        for you the type completely free.
                    </p>
                    <h3 style= {{ margin: '0' }}>Unfortunately, for this time it is working for businesses in Israel only.</h3>
                </div>

                <br />
                <br />

                <div>
                    <div className="ui header big">
                        <h3 className="big">How to use it?</h3>
                    </div>
                    <p className="small" style = {{ margin: '0' }}>
                        Our Api only support Get requests.
                    </p>
                    <h3 className='mid'>Base URL</h3>
                    <p className="small" style = {{ margin: '0' }}>
                        For using the Api, you have to send HTTP request with our base URL, which is - 
                    </p>
                    <p className='small' style={{margin:'0'}}><code>'https://27j137v1id.execute-api.us-east-2.amazonaws.com/v1'</code></p>
                    <h3 className='mid'>Get a business type</h3>
                    <p className="small" style = {{ margin: '0' }}>
                        To get the a business type you will need to add <code>'/detect'</code> to the end of the Base URL.
                        In addition, in the params object, the Api expects to receive <code>'company_name'</code> parmeter,
                        there you can pass your business name as the value.
                    </p>
                    <h3 className='mid'>Get the types list</h3>
                    <p className="small" style = {{ margin: '0' }}>
                        In order to get the list of 32 types that we have defined, you will need to add <code>'/types'</code> to the end of the Base URL.
                        There is not an expectation to any param, so you need to pass an empty params object.
                    </p>
                </div>

                <br />
                <br />

                <div>
                    <div className="ui header big">
                        <h3 className="big">Simple Javascript Example</h3>
                    </div>
                    <div className="ui instructive bottom attached segment">
                        <pre>
                            <code>
                                <span>const baseURL = "https://27j137v1id.execute-api.us-east-2.amazonaws.com/v1"</span>
                                <span>{"\n\n\n\n"}// To get a Business type {"\n\n"}</span>
                                <span>
                                fetch(`${"{baseURL}"}/detect?company_name=your-company-name`)     
                                </span>
                                <span>
                                    {"\n"}.then(response =&#62; {"{your function}"})
                                </span>
                                <span>{"\n\n\n\n"}// To get a types list {"\n\n"}</span>
                                <span>
                                    fetch(`${"{baseURL}"}/types`)     
                                </span>
                                <span>
                                    {"\n"}.then(response =&#62; {"{your function}"})
                                </span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Api;