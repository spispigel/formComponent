import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { Components } from "./form-elements/index";



interface IFormProps { formHtml: HTMLElement; }

class FormComponent extends React.Component<IFormProps, {}> {
    private components: any;

    constructor(props: any) {
        super(props);
        this.state = { count: "1" };
        this.components = Components;
    }
    public render() {
         return <form>
             {this.searchReactElements()}
         </form>
    }

    generateElement(reactElement: any, element:HTMLElement) {
            return React.createElement(reactElement, {node: element});
    }

    searchReactElements(){
        let arrComponents = new Array<any>();
        const formControls = $(this.props.formHtml).find('select, input, button, textarea, label, fieldset');
        formControls.each((index, element)=>{
            debugger;
            const typeComponent = 'C' + _.capitalize(element.tagName);
            const reactElement = this.components[typeComponent];
            if (reactElement) {
                arrComponents.push(this.generateElement(reactElement, element));
            }
        });
        return arrComponents;
    }
}

export default FormComponent;