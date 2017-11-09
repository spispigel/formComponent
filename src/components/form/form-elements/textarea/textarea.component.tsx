import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { ITextareaState } from './textareaState.interface';
import { ITextareaProps } from './textareaProps.interface';



export class CTextarea extends React.Component<ITextareaProps, ITextareaState> {
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
        return <textarea 
               cols={this.state.cols} 
               disabled={this.state.disabled} 
               form={this.state.form} 
               maxLength={this.state.maxlength} 
               name={this.state.name} 
               readOnly={this.state.readonly}
               required={this.state.required}
               rows={this.state.rows}
                >
                {this.props.node.textContent}
        </textarea>
    }

}
