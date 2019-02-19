import React from 'react';
import ReactDOM from 'react-dom';
import {CustomEdit} from './CustomEdit';

let edit = React.createRef();

export const customEditInit = (data) => {
    ReactDOM.render(<CustomEdit ref={edit} data={data}/>, document.getElementById('JahiaGxtEditEnginePanel-customEdit'))
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
