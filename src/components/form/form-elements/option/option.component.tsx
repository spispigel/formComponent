import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IOptionState } from './optionState.interface';
import { IOptionProps } from './optionProps.interface';

import * as $ from 'jquery';
import * as _ from 'lodash';


export class COption extends React.Component<IOptionProps, IOptionState> {
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
