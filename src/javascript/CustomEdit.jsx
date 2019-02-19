import React from 'react';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {Provider} from 'react-redux';
import {CustomForm} from './CustomForm'

export class CustomEdit extends React.Component {

    constructor(props) {
        super(props);
        this.form = React.createRef();
    }

    onSave(node) {
        let values = this.form.current.values;
        console.log('1', values);

        node.setProperty('test', values.test, 1);

        let test1 = node.child('1', 'node-1');
        test1.addMixin('jnt:customEditSubContent');
        test1.setProperty('test', values.node1, 1);

        let test2 = node.child('2', 'node-2');
        test2.addMixin('jnt:customEditSubContent');
        test2.setProperty('test', values.node2, 1);
    }

    onLanguageChange(data) {
        console.log('1', data)
    }

    onValidate(node) {
        console.log('1', node);
        this.form.current.submit();
    }

    render() {
        const rootReducer = combineReducers({
            form: formReducer
        });
        const store = createStore(rootReducer);

        let values = {
            test: this.props.data.getProperty('test')
        };

        return (
            <Provider store={store}>
                <CustomForm ref={this.form} initialValues={values} onSubmit={(da) => {console.log(da)}}/>
            </Provider>
        );
    }
};