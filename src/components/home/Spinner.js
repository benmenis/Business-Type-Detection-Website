import './Spinner.css';
import React from 'react';

const Spinner = props => {
    return(
        <div>
            <div className="ui active loader">
                <div className="ui text loader">Loading...</div>
            </div>
        </div>  
    );
}

// Spinner.defaultProps = {
//     message: 'Loading...'
// }

export default Spinner;