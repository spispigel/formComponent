import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { ILabelState } from './labelState.interface';
import { ILabelProps } from './labelProps.interface';



export class CLabel extends React.Component<ILabelProps, ILabelState> {
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
        return <label htmlFor={this.state.for} form={this.state.form}> {this.props.node.textContent} </label>
    }

}
