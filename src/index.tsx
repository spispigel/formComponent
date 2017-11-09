// import * as React from "react";
import * as ReactDOM from "react-dom";

// import Form from "./components/form/Form.component";

const form = document.querySelector('#form-prueba')

// const CForm=  React.createElement(Form, {formHtml: form});

// const app =  React.createElement('div',{},[CForm]);


var HtmlToReactParser = require('html-to-react-mod').Parser;

var htmlToReactParser = new HtmlToReactParser();

var reactElement = htmlToReactParser.parse(form.outerHTML);
ReactDOM.render(
    reactElement, 
    document.getElementById('app-test')
);
