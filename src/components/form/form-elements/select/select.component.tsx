import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ISelectState } from './selectState.interface';
import { ISelectProps } from './selectProps.interface';

import * as $ from 'jquery';
import * as _ from 'lodash';


export class CSelect extends React.Component<ISelectProps, ISelectState> {
    constructor(props: any) {
        super(props);
        const parsedProps = this.parseNode(props.node);
        this.state = Object.assign({}, parsedProps);

    }
    parseNode(node: HTMLInputElement) {
        const parsedProps: { [key: string]: any } = {};
        Object.keys(node.attributes).map((index) => {
            const attribute = node.attributes[parseInt(index)];
            parsedProps[attribute.name] = attribute.value;
        });

        return parsedProps;
    }

    public render() {
        return <select 
        disabled={this.state.disabled}
        name={this.state.name} 
        size={this.state.size}
        required={this.state.required}
        multiple={this.state.multiple}
        /> 
    }

}
