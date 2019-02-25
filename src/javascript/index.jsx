import React from 'react';
import ReactDOM from 'react-dom';
import {CustomEdit} from './CustomEdit';

let edit = React.createRef();
var contextJsParameters = window.parent.jahiaGWTParameters;
contextJsParameters.config = {};

if (!document.getElementById('google-places-import')) {
    let sc = document.createElement('script');
    sc.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD_LDYlV6ryp0eeORRYzMZdvknPhgzs0EE&libraries=places');
    sc.setAttribute('id', 'google-places-import')
    document.querySelector('head').appendChild(sc);
}

export const customEditInit = (data) => {
    ReactDOM.render(<CustomEdit ref={edit} data={data} dxContext={contextJsParameters}/>, document.getElementById('JahiaGxtEditEnginePanel-customEdit'))
};

export const customEditLanguageChange = (data) => {
    edit.current.onLanguageChange(data);
};

export const customEditDoSave = (node) => {
    edit.current.onSave(node);
};

export const customEditDoValidate = (node) => {
    edit.current.onValidate(node);
};
