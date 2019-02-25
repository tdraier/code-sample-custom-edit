import React from 'react';
import {CustomFormContainer} from './CustomForm/CustomFormContainer'
import {ApolloProvider} from 'react-apollo';
import {client} from '@jahia/apollo-dx';

export class CustomEdit extends React.Component {

    constructor(props) {
        super(props);
        this.form = React.createRef();

        this.ns = ['test'];
        this.defaultNS = 'test';
        this.namespaceResolvers = {}

    }

    onSave(node) {
        let values = this.form.current.getValues();
        console.log('save', values);

        Object.keys(values.main).forEach(k => {
            node.setProperty(k, values.main[k], 1);
        });

        Object.keys(values.children).forEach((c,i) => {
            let childObject = values.children[c];
            let {uuid, ...props} = childObject;
            let child = node.child(uuid, c);
            child.addMixin('jnt:customEditSubContent');
            Object.keys(props).forEach(k => {
                child.setProperty(k, childObject[k], 1);
            });
        });
    }

    onLanguageChange(data) {
        console.log('language change', data)
    }

    onValidate(node) {
        console.log('validate', node);
    }

    render() {
        let {data} = this.props;
        return (
            <React.Fragment>
                <ApolloProvider client={client({
                    contextPath: contextJsParameters.contextPath,
                    useBatch: true,
                    httpOptions: {batchMax: 50}
                })}>
                    <CustomFormContainer formRef={this.form} data={data}/>
                </ApolloProvider>
            </React.Fragment>
        );
    }
};