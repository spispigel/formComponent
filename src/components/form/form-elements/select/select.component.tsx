import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { ISelectState } from './selectState.interface';
import { ISelectProps } from './selectProps.interface';
import { Components } from '../index';


export class CSelect extends React.Component<ISelectProps, ISelectState> {
    private components : any;

    constructor(props: any) {
        super(props);
        const parsedProps = this.parseNode(props.node);
        this.state = Object.assign({}, parsedProps);
        this.components = Components;

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
        return <select disabled={this.state.disabled} name={this.state.name} size={this.state.size} required={this.state.required} multiple={this.state.multiple}>
            {this.searchOptionElements()}
         </select> 
    }

    generateElement(reactElement: any, element:HTMLElement) {
        return React.createElement(reactElement, {node: element});
}

    searchOptionElements(){
        let arrComponents = new Array<any>();
        let formControls = $(this.props.node).find('optgroup');
        if (formControls.length == 0)
           formControls = $(this.props.node).find('option');
        formControls.each((index, element)=>{
            const typeComponent = 'C' + _.capitalize(element.tagName);
            const reactElement = this.components[typeComponent];
            if (reactElement) {
                arrComponents.push(this.generateElement(reactElement, element));
            }
        });
        return arrComponents;
    }

}
