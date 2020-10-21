import React, { useState } from 'react';


const SearchBar  = props => {

    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(term);
    } 



    return(
        <div className='ui segment' onSubmit={onFormSubmit} >
            <form className='ui form' >
                <div className='field' >
                    <input 
                        className='prompt'
                        placeholder='Enter Company Name To Get the Type'
                        type='text'
                        value={term}
                        onChange={ e => setTerm(e.target.value) } 
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;