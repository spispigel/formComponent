import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { IOptionState } from './optionState.interface';
import { IOptionProps } from './optionProps.interface';



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
        return <option disabled={this.state.disabled} selected={this.state.selected} label={this.state.label} value={this.state.value}> {this.props.node.textContent} </option>
    }

}
