import React, { useState } from 'react';
import Alert from './Alert';



const SearchBar  = props => {

    const [term, setTerm] = useState('');
    const [alertVisable, setAlertVisable] = useState('none');

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (term === ''){
            setAlertVisable('block');
        }
        else{
            setAlertVisable('none');
            props.onSubmit(term);
        }
    } 



    return(
        <div>
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
            <div style = {{ paddingTop:'5px' }}>
                <Alert visable = {alertVisable} onAlertClose={ () => setAlertVisable('none')}/>
            </div>
        </div>
    );
}

export default SearchBar;