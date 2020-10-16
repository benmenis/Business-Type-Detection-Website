import React from 'react';
import TypeList from './components/TypeList';
import SearchBar from './components/SearchBar';


const App = () => {

    const onSubmit = (term) => {
        console.log(term);
    };

    return(
        <div className="ui container" style={{ marginTop:'15px' }}>
            <div className="ui grid">
                <div className="ui row">
                    <div className="five wide column">
                        <TypeList />
                    </div>
                    <div className="eleven wide column">
                        <SearchBar onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default App;