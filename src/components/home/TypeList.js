import React from 'react';
import Types from '../../data/Types';

const TypeList = (props) => {

    const renderedTypes = Types.map( (type, index) => {
        return(
            <div key = {index} className="item" >
                <div className="middle aligned content">
                    <h4 className="header">{type}</h4>
                </div>
                <div className="ui horizontal divider"/>
            </div>
        );
    });

    return(
        <div style= {{ textAlign:'center' }}>
            <h2 className="ui secondary inverted segment" >T Y P E S</h2>
            <div className="ui items" style = {{ overflow:'scroll', height:'500px' }}>{renderedTypes}</div>
        </div>
    );
}

export default TypeList;