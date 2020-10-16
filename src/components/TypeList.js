import React from 'react';
import Types from '../data/Types';

const TypeList = (props) => {

    const renderedTypes = Types.map( type => {
        return(
            <div key = {type} className="item" style= {{ textAlign:'center' }}>
                <div className="middle aligned content">
                    <a className="header">{type}</a>
                </div>
                <div className="ui horizontal divider"/>
            </div>
        );
    });

    return(
        <div className='ui items'>
            {renderedTypes}
        </div>
    );
}

export default TypeList;