import React from 'react'
import {Field, reduxForm} from 'redux-form'

let CustomForm = props => (
    <form>
        <div>
            <label htmlFor="test">test</label>
            <Field name="test" component="input" type="text"/>
        </div>
        <div>
            <label htmlFor="node1">node1</label>
            <Field name="node1" component="input" type="text"/>
        </div>
        <div>
            <label htmlFor="node2">node2</label>
            <Field name="node2" component="input" type="text"/>
        </div>
    </form>
);

CustomForm = reduxForm({
    form: 'customForm'
})(CustomForm);

export {CustomForm};