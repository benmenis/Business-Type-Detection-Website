import React, { useState, useEffect } from 'react';
import Home from './home/Home';
import About from './about/About';
import Api from './api/Api';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const App = () => {

    const [isActive, setIsActive] = useState({ home:'', about:'', api:'' });
    const [types, setTypes] = useState([]);

    const changeActive = (s) => {
        const newIsActive = {  home:'', about:'', api:''};
        
        if (s === 'home'){
            newIsActive.home = 'active';
        }
        else if (s === 'about'){
            newIsActive.about = 'active';
        }
        else {
            newIsActive.api = 'active';
        }
        
        setIsActive(newIsActive);
    } 

    // that use effect is to load the types list from our api.
    // then it is passed foward to Home and then to TypesList.
    // the reason that it is here is to not rerender it any time Home rendering
    useEffect( () => {
        const getTypes = async () => {
            const response = await axios.get(
                'https://27j137v1id.execute-api.us-east-2.amazonaws.com/v1/types',
                {}
            );
            setTypes(response.data.types);
        }

        getTypes();
    }, []);

    
    return(
        <Router >
            <div  >

                <nav>
                    <div className="ui inverted segment">
                        <div className="ui inverted secondary pointing menu">
                            <Link className={`item ${isActive.home}`} to="/" >Home</Link>
                            <Link className={`item ${isActive.api}`} to="/api" >Api</Link>
                            <Link className={`item ${isActive.about}`} to="/about" >About</Link>
                            <div className="right menu" style={{  }}>
                                <a href='https://github.com/benmenis' className="ui item">
                                    <h3>
                                        <i className="github icon"/>
                                    </h3>                               
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/api">
                        <Api changeActive={changeActive}/>
                    </Route>
                    <Route path="/about">
                        <About changeActive={changeActive}/>
                    </Route>
                    <Route path="/">
                        <Home changeActive={changeActive} types={types}/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;