import React, { useState } from 'react';

const Alert = ({visable, onAlertClose}) => {

    return(
        <div className="ui warning message" style={{display:visable}}>
            <i className="close icon" onClick={onAlertClose}></i>
            <div className="header">
                Warning!
            </div>
            You must enter some business name
        </div>
    );
}

export default Alert;