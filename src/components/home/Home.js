import React, { useEffect, useState } from 'react';
import TypeList from './TypeList';
import SearchBar from './SearchBar';
import Result from './Result';
import DetectTypeApi from '../api/DetectTypeApi';
import Alert from './Alert';

const Home = props => {

    const [result, setResult] = useState(null);

    const onSubmit = async term => {
        setResult({});
        const response = await DetectTypeApi.get(
            '/detect',
            { params: { company_name: term }}
        );
        
        setResult(response.data);
    };


    useEffect( () => {
        props.changeActive('home')
    }, []);


    return(
        <div className="ui container" style={{ marginTop:'50px' }}>
            <div className="ui grid">
                <div className="ui row">
                    <div className="three wide column">
                        <TypeList types={props.types}/>
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