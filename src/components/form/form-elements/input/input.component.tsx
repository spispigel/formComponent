import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IInputState } from './inputState.interface'
import { IInputProps } from './inputProps.interface';

import * as $ from 'jquery';
import * as _ from 'lodash';


export class CInput extends React.Component<IInputProps, IInputState> {
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
    handleBlur(){
        var evt = document.createEvent("FocusEvent");
        evt.initEvent("blur",false,true);
        this.props.node.dispatchEvent(evt);
    }
    handleFocus(){
        var evt = document.createEvent("FocusEvent");
        evt.initEvent("focus",false,true);
        this.props.node.dispatchEvent(evt);
    }
    handleKeyDown(){
        var evt = document.createEvent("KeyboardEvent");
        evt.initEvent("keydown",false,true);
        this.props.node.dispatchEvent(evt);
    }
    handleKeyUp(){
        var evt = document.createEvent("KeyboardEvent");
        evt.initEvent("keyup",false,true);
        this.props.node.dispatchEvent(evt);
    }
    handleKeyPress(){
        //$(this.props.node).keypress();
      var evt = document.createEvent("KeyboardEvent");
      evt.initEvent("keypress",false,true);
      this.props.node.dispatchEvent(evt);
  }
  handleClick(){
    //$(this.props.node).keypress();
      var evt = document.createEvent("MouseEvent");
      evt.initEvent("click",false,true);
      this.props.node.dispatchEvent(evt);
  } 
  handleChange = (event :any) => {
        this.setState({value: event.target.value});
        var evt = new Event('change');
        this.props.node.value = event.target.value;
        this.props.node.dispatchEvent(evt);
  }
    public render() {
        return <input 
        disabled={this.state.disabled}
        maxLength={this.state.maxLength} 
        name={this.state.name} 
        type={this.state.type} 
        value={this.state.value}
        readOnly={this.state.readonly}
        checked={this.state.checked}
        size={this.state.size}
        onBlur={ev =>this.handleBlur()}
        onFocus={ev =>this.handleFocus()}
        onKeyDown={ev =>this.handleKeyDown()}
        onKeyUp={ev =>this.handleKeyUp()}
        onKeyPress={ev => this.handleKeyPress()}
        onClick={ev => this.handleClick()} 
        onChange={this.handleChange}
        required={this.state.required}
    
        />
    }

}
