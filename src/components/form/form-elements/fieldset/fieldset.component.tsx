import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { IFieldsetState } from './fieldsetState.interface';
import { IFieldsetProps } from './fieldsetProps.interface';
import { Components } from '../index';


export class CFieldset extends React.Component<IFieldsetProps, IFieldsetState> {
    private components: any;
    constructor(props: any) {
        super(props);
        const parsedProps = this.parseNode(props.node);
        debugger;
        let legend = $(this.props.node).find('legend').first();
        if(legend.length!=0)
           parsedProps['legend'] = legend.text();
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
        return <fieldset disabled={this.state.disabled} form={this.state.form} name={this.state.name}><legend>{this.state.legend}</legend> {this.searchReactElements()} </fieldset>
    }

    generateElement(reactElement: any, element:HTMLElement) {
        return React.createElement(reactElement, {node: element});
}

searchReactElements(){
    let arrComponents = new Array<any>();
    const formControls = $(this.props.node).children('select, input, button, textarea, label, fieldset');
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
