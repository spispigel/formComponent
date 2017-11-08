import * as React from "react";
import * as ReactDOM from "react-dom";

import Form from "./components/form/Form.component";

const form = document.querySelector('#form-prueba')

const CForm=  React.createElement(Form, {formHtml: form});

const app =  React.createElement('div',{},[CForm]);

ReactDOM.render(
    app, 
    document.getElementById('app-test')
);