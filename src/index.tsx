import * as React from "react";
import * as ReactDOM from "react-dom";

// const React = require('react');
// const ReactDOM = require('react-dom');

import Form from "./components/form/Form.component";

const form = document.querySelector('#form-prueba')
/*
ReactDOM.render(
    React.createElement(Form, {compiler: form}),
    document.getElementById('app-test')
);
*/
const CForm=  React.createElement(Form, {formHtml: form});

const app =  React.createElement('div',{},[CForm]);

ReactDOM.render(
    app, 
    document.getElementById('app-test')
);