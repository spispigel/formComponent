import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { IOptgroupState } from './optgroupState.interface';
import { IOptgroupProps } from './optgroupProps.interface';
import { Components } from '../index';


export class COptgroup extends React.Component<IOptgroupProps, IOptgroupState> {
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
        return <optgroup disabled={this.state.disabled} label={this.state.label}> {this.searchOptionElements()} </optgroup>
    }

    generateElement(reactElement: any, element:HTMLElement) {
        return React.createElement(reactElement, {node: element});
}

    searchOptionElements(){
        let arrComponents = new Array<any>();
        const formControls = $(this.props.node).find('option');
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
