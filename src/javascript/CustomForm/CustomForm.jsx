import React from 'react'
import GoogleMapReact from 'google-map-react';

class CustomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.initialValues;
        this.setValue = this.setValue.bind(this);
        this.setChildValue = this.setChildValue.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.addChild = this.addChild.bind(this);
    }

    getValues() {
        return this.state;
    }

    setValue(name, val) {
        this.setState(state => ({
            main: {
                ...state.main,
                [name]: val
            },
            children: state.children
        }));
    }

    setChildValue(child, name, val) {
        this.setState(state => ({
            main: state.main,
            children: {
                ...state.children,
                [child]: {
                    ...state.children[child],
                    [name]: val
                }
            }
        }));
    }

    addChild() {
        this.setState(state => ({
            main: {
                ...state.main,
            },
            children: {
                ...state.children,
                ['node-' + Object.keys(state.children).length]: {
                    uuid: '',
                    content: ''
                }
            }
        }));
    }


    setPosition({lat, lng}) {
        this.setState(state => ({
            main: {
                ...state.main,
                lat: lat.toString(),
                lng: lng.toString()
            },
            children: state.children
        }));
    }

    render() {
        return (
            <div style={{height:'100%', overflow:'auto'}}>
                <form>
                    <fieldset className=" x-fieldset x-component">
                        <legend className=" x-fieldset-header"><span
                            className="x-fieldset-header-text">Custom form - Main element</span></legend>
                        <div className=" x-form-label-left">
                            <div role="presentation" className="x-form-item " tabIndex="-1">
                                <label htmlFor="title"
                                       className="x-form-item-label">Title:</label>
                                <div role="presentation" className="x-form-element">
                                    <div className=" x-component x-box-layout-ct">
                                        <input type="text" value={this.state.main.title} onChange={(ev) => {
                                            this.setValue('title', ev.target.value)
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            <div role="presentation" className="x-form-item " tabIndex="-1">
                                <label htmlFor="title"
                                       className="x-form-item-label">Latitude :</label>
                                <div role="presentation" className="x-form-element">
                                    <div className=" x-component x-box-layout-ct">
                                        <input type="text" value={this.state.main.lat} onChange={(ev) => {
                                            this.setValue('lat', ev.target.value)
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            <div role="presentation" className="x-form-item " tabIndex="-1">
                                <label htmlFor="title"
                                       className="x-form-item-label">Longitude :</label>
                                <div role="presentation" className="x-form-element">
                                    <div className=" x-component x-box-layout-ct">
                                        <input type="text" value={this.state.main.lng} onChange={(ev) => {
                                            this.setValue('lng', ev.target.value)
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" x-form-label-left">
                            <div role="presentation" className="x-form-item " tabIndex="-1">
                                <label htmlFor="test"
                                       className="x-form-item-label">Main value:</label>
                                <div role="presentation" className="x-form-element">
                                    <div className=" x-component x-box-layout-ct" style={{height: '300px'}}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{key: 'AIzaSyD_LDYlV6ryp0eeORRYzMZdvknPhgzs0EE'}}
                                            center={{
                                                lat: parseFloat(this.state.main.lat),
                                                lng: parseFloat(this.state.main.lng)
                                            }}
                                            defaultZoom={11}
                                            onBoundsChange={this.setPosition}
                                        >

                                        </GoogleMapReact>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    {Object.keys(this.state.children).map(child => (
                        <fieldset className=" x-fieldset x-component">
                            <legend className=" x-fieldset-header"><span
                                className="x-fieldset-header-text">Custom form - child</span></legend>
                            <div className=" x-form-label-left">
                                <div role="presentation" className="x-form-item " tabIndex="-1">
                                    <label htmlFor="node1"
                                           className="x-form-item-label">Content :</label>
                                    <div role="presentation" className="x-form-element">
                                        <div className=" x-component x-box-layout-ct">
                                            <input type="text" value={this.state.children[child].content}
                                                   onChange={(ev) => {
                                                       this.setChildValue(child, 'content', ev.target.value)
                                                   }}/>
                                        </div>
                                    </div>
                                </div>


                                <div role="presentation" className="x-form-item " tabIndex="-1">
                                    <label htmlFor="title"
                                           className="x-form-item-label">News :</label>
                                    <div role="presentation" className="x-form-element">
                                        <div className=" x-component x-box-layout-ct">
                                            <input type="text" value={this.state.main.lng} onChange={(ev) => {
                                                this.setValue('lng', ev.target.value)
                                            }}/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </fieldset>
                    ))}
                    <input type="button" onClick={this.addChild} value="Add child"/>
                </form>
            </div>
        )
    }

};

export {CustomForm};