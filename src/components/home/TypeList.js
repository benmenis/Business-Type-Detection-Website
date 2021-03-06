import React from 'react';
import Spinner from './Spinner';

const TypeList = ({ types }) => {

    const renderedTypes = types.map( (type, index) => {
        return(
            <div key = {index} className="item" >
                <div className="middle aligned content">
                    <br />
                    <h4 className="header">{type}</h4>
                    <br />
                </div>
                <div className="ui horizontal divider"/>
            </div>
        );
    });




    return(
        <div style= {{ textAlign:'center' }}>
            <h2 className="ui secondary inverted segment" >T Y P E S</h2>
            {types.length ? 
                <div 
                    className="ui items" 
                    style = {{ overflow:'scroll', height:'450px' }}
                    >
                    {renderedTypes}
                </div> 
                : <div style = {{ paddingTop:'100px' }}>
                    <Spinner />
                </div>
            }
        </div>
    );
}

export default TypeList;