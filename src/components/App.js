import React, { useState } from 'react';
import Home from './home/Home';
import About from './about/About';
import Api from './api/Api';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";


const App = () => {

    const [isActive, setIsActive] = useState({ home:'', about:'', api:'' });

    const changeActive = (s) => {
        const newIsActive = {  home:false, about:false, api:false};
        
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
                                <a href='https://google.com' className="ui item">
                                    <h3>
                                        <i className="github icon"/>
                                    </h3>                                </a>
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
                        <Home changeActive={changeActive}/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;