import React from 'react';
import {Query} from 'react-apollo'
import {CustomForm} from "./CustomForm";
import gql from 'graphql-tag';

let query = gql`query($uuid:String!) {
    jcr {
        nodeById(uuid: $uuid) {
            uuid
            path
            workspace
            children {
                nodes {
                    name
                    uuid
                    path
                    workspace
                    property(name:"content") {
                        value
                    }
                }
            }
        }
    }
}`;

export class CustomFormContainer extends React.Component {

    render() {

        let {data, formRef} = this.props;

        if (data.isNewNode) {
            let values = {
                main: {
                    title: 'new content',
                    lat: '51.501845',
                    lng: '-0.1406278'
                },
                children: {}
            };
            return <CustomForm ref={formRef} initialValues={values}/>;
        } else {
            return <Query query={query} variables={{uuid: data.getUUID()}}>
                {({data: gqlData, loading}) => {
                    if (loading) {
                        return null;
                    }
                    let values = {
                        main: {
                            title: data.getProperty('title'),
                            lat: data.getProperty('lat'),
                            lng: data.getProperty('lng'),
                        },
                        children: {}
                    };
                    gqlData.jcr.nodeById.children.nodes.forEach(c => {
                        values.children[c.name] = {
                            uuid: c.uuid,
                            content: c.property.value
                        }
                    });
                    return <CustomForm ref={formRef} initialValues={values}/>
                }}
            </Query>
        }
    }
}