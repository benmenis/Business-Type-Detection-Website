import React, { useEffect, useState } from 'react';
import TypeList from './TypeList';
import SearchBar from './SearchBar';
import Result from './Result';
import Axios from 'axios';

const Home = props => {

    const [result, setResult] = useState(null);

    const onSubmit = async term => {
        setResult({});
        const response = await Axios.get(
            'https://27j137v1id.execute-api.us-east-2.amazonaws.com/v1/detect',
            { params: { company_name: term }}
        );

        console.log(response);
        
        setResult(response.data);
    };

    // eslint-disable-next-line
    useEffect( () => {
        props.changeActive('home')
    }, []);


    return(
        <div className="ui container" style={{ marginTop:'50px' }}>
            <div className="ui grid">
                <div className="ui row">
                    <div className="three wide column">
                        <TypeList />
                    </div>

                    <div className="one wide column" />

                    <div className="eleven wide column">
                        <div className="ui row">
                            <SearchBar onSubmit={onSubmit}/>
                        </div>
                        <div className="ui row"> 
                            <Result result={result} />
                        </div>
                    </div>

                    <div className="one wide column" />
                </div>
            </div>
        </div> 
    );
}


export default Home;