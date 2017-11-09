import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { IButtonState } from './buttonState.interface';
import { IButtonProps } from './buttonProps.interface';



export class CButton extends React.Component<IButtonProps, IButtonState> {
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
        return <button 
        disabled={this.state.disabled} 
        name={this.state.name}
        type={this.state.type} 
        value={this.state.value}
        > 
        {this.props.node.textContent} 
        </button>
    }

}
