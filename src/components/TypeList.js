import React from 'react';
import Types from '../data/Types';

const TypeList = (props) => {

    const renderedTypes = Types.map( (type, index) => {
        return(
            // <div key = {index} className="ui segment">
                <div className="item" style= {{ textAlign:'center' }}>
                    <div className="middle aligned content">
                        <a className="header">{type}</a>
                    </div>
                    <div className="ui horizontal divider"/>
                </div>
            // {/* </div> */}
        );
    });

    return(
        // <div className="ui segments">
            <div className="ui items">{renderedTypes}</div>
            
        // {/* </div> */}
    );
}

export default TypeList;