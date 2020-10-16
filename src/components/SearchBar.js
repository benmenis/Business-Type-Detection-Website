import React from 'react';


class SearchBar extends React.Component{

    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    } 


    render(){
        return(
            <div className='ui segment' onSubmit={this.onFormSubmit}>
                <form className='ui form'>
                    <div className='field' >
                        <input 
                            className='prompt'
                            placeholder='Enter Company Name To Get the Type'
                            type='text'
                            value={this.state.term}
                            onChange={ e => this.setState({ term: e.target.value }) } 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;